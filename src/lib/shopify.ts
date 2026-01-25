import { toast } from "sonner";

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'sdrum3-11.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

// Token carregado de variável de ambiente
// Tenta VITE_ primeiro (dev local), depois sem prefixo (injeção Lovable)
const SHOPIFY_STOREFRONT_TOKEN = 
  import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || 
  import.meta.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || 
  '';

if (!SHOPIFY_STOREFRONT_TOKEN && typeof window !== 'undefined') {
  console.warn('[Shopify] Token não configurado. Verifique variáveis de ambiente.');
}

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
    amazonLink?: {
      value: string;
    } | null;
  };
}

const STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
          amazonLink: metafield(namespace: "spreadr", key: "amazon_link") {
            value
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
      amazonLink: metafield(namespace: "spreadr", key: "amazon_link") {
        value
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Shopify API access requires an active Shopify billing plan."
    });
    return null;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }

  return data;
}

export async function fetchProducts(first: number = 20, query?: string): Promise<ShopifyProduct[]> {
  try {
    const data = await storefrontApiRequest(STOREFRONT_QUERY, { first, query });
    if (!data) return [];
    return data.data.products.edges || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductByHandle(handle: string) {
  try {
    const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
    if (!data) return null;
    return data.data.productByHandle;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

// Valida se URL é checkout válido do Shopify
export function isValidShopifyCheckoutUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  if (!url.startsWith('http://') && !url.startsWith('https://')) return false;
  // Aceita domínios do Shopify e domínio customizado
  const validDomains = [
    'myshopify.com', 
    'shopify.com', 
    'checkout.shopify.com',
    'vittapoolgroup.com.br'
  ];
  try {
    const parsed = new URL(url);
    return validDomains.some(domain => parsed.hostname.includes(domain));
  } catch {
    return false;
  }
}

// Abre URL de checkout com fallback para bloqueio de popup
export function openCheckoutUrl(url: string): { success: boolean; error?: string } {
  console.log('[Shopify Checkout] Tentando abrir URL:', url);
  
  if (!isValidShopifyCheckoutUrl(url)) {
    console.error('[Shopify Checkout] URL inválida:', url);
    return { success: false, error: `URL de checkout inválida: ${url}` };
  }
  
  const newWindow = window.open(url, '_blank');
  
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    console.log('[Shopify Checkout] Popup bloqueado, redirecionando na mesma aba');
    window.location.href = url;
  }
  
  return { success: true };
}

export async function createStorefrontCheckout(items: CartItem[]): Promise<string> {
  try {
    const lines = items.map(item => ({
      quantity: item.quantity,
      merchandiseId: item.variantId,
    }));

    console.log('[Shopify Checkout] Criando checkout com items:', lines);

    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
      input: { lines },
    });

    if (!cartData) {
      throw new Error('Failed to create cart');
    }

    console.log('[Shopify Checkout] Resposta do Shopify:', cartData.data.cartCreate);

    if (cartData.data.cartCreate.userErrors.length > 0) {
      const errors = cartData.data.cartCreate.userErrors.map((e: { message: string }) => e.message).join(', ');
      console.error('[Shopify Checkout] userErrors:', errors);
      throw new Error(`Cart creation failed: ${errors}`);
    }

    const cart = cartData.data.cartCreate.cart;
    
    if (!cart.checkoutUrl) {
      throw new Error('No checkout URL returned from Shopify');
    }

    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    const finalUrl = url.toString();
    
    console.log('[Shopify Checkout] URL final gerada:', finalUrl);
    
    return finalUrl;
  } catch (error) {
    console.error('[Shopify Checkout] Erro ao criar checkout:', error);
    throw error;
  }
}

export function formatPrice(amount: string, currencyCode: string): string {
  const num = parseFloat(amount);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currencyCode,
  }).format(num);
}

// Função para compra direta (Buy Now) - cria checkout com item único
export async function createBuyNowCheckout(variantId: string, quantity: number = 1): Promise<string> {
  try {
    const lines = [{ quantity, merchandiseId: variantId }];

    console.log('[Shopify BuyNow] Criando checkout para:', { variantId, quantity });

    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
      input: { lines },
    });

    if (!cartData) {
      throw new Error('Failed to create cart');
    }

    console.log('[Shopify BuyNow] Resposta do Shopify:', cartData.data.cartCreate);

    if (cartData.data.cartCreate.userErrors.length > 0) {
      const errors = cartData.data.cartCreate.userErrors.map((e: { message: string }) => e.message).join(', ');
      console.error('[Shopify BuyNow] userErrors:', errors);
      throw new Error(`Cart creation failed: ${errors}`);
    }

    const cart = cartData.data.cartCreate.cart;
    
    if (!cart.checkoutUrl) {
      throw new Error('No checkout URL returned from Shopify');
    }

    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    const finalUrl = url.toString();
    
    console.log('[Shopify BuyNow] URL final gerada:', finalUrl);
    
    return finalUrl;
  } catch (error) {
    console.error('[Shopify BuyNow] Erro ao criar checkout:', error);
    throw error;
  }
}
