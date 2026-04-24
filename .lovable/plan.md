

# Plano: Otimização de Conversão VittaPool Group

## 1. Conectar Nova Loja Shopify

**Arquivo:** `src/lib/shopify.ts` (linha 4)

Atualizar o domínio permanente da loja:
```typescript
// De:
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'sdrum3-11.myshopify.com';
// Para:
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'vittapool-group.myshopify.com';
```

**Importante:** Após esta mudança, será necessário gerar um novo **Storefront Access Token** no painel da nova loja Shopify (`vittapool-group.myshopify.com`) e atualizá-lo no segredo `SHOPIFY_STOREFRONT_ACCESS_TOKEN`. Vou solicitar isso após a alteração do código.

## 2. Substituir "Solicitar Orçamento" por "Ver Produtos"

**`src/components/Header.tsx`**:
- Substituir botão desktop "Solicitar Orçamento" (`href="#contato"`) por "Ver Produtos" (`href="/#produtos"`)
- Substituir botão mobile correspondente
- Remover link "Categorias" do menu (foco em produtos)

**`src/components/HeroSection.tsx`**:
- Já tem "Ver Produtos" como CTA primário
- Trocar o secundário "Solicitar Orçamento" por "Falar com Especialista" (WhatsApp) — alinhado com a estratégia de conversão para itens de alto valor

## 3. Remover Depoimentos Falsos

**`src/components/TestimonialsSection.tsx`**: Reescrever completamente como uma seção minimalista "Avaliações em breve":
- Card único centralizado com ícone de estrelas
- Texto: "Avaliações em breve — Seja um dos nossos primeiros clientes!"
- CTA "Ver Produtos" → `#produtos`
- Mantém id="depoimentos" para não quebrar âncoras

## 4. Atualizar Rodapé

**`src/components/Footer.tsx`**:
- Copyright: `© 2026 VittaPool Group. Todos os direitos reservados.`
- Remover links: `Blog`, `Trabalhe Conosco`
- Adicionar texto de afiliado Amazon (parágrafo destacado próximo ao copyright):
  > "Como Associado Amazon, recebemos comissões em compras qualificadas."

## 5. Foco em Vendas — CTAs por Seção

Adicionar/ajustar botão "Ver Produtos" (`href="#produtos"`) em:

| Seção | Ação |
|-------|------|
| `WhyChooseSection` | Adicionar CTA final "Ver Produtos" |
| `AudienceSection` | Adicionar CTA "Ver Produtos" |
| `ApartmentSection` | Trocar CTA atual para "Ver Produtos" |
| `MeditationSection` | Trocar CTA atual para "Ver Produtos" |
| `CategoriesSection` | Garantir que cada categoria leve a `#produtos` |
| `CTASection` | Já tem "Ver Produtos" — manter |
| `ProductsSection` (estado vazio) | Trocar "Solicitar Catálogo" por "Falar no WhatsApp" |

## 6. Aviso de Afiliado Amazon

Conforme item 4, será adicionado em `Footer.tsx` em uma linha dedicada acima do copyright, com estilo discreto (`text-xs text-background/50`).

## 7. Copyright 2026

Já incluído no item 4.

---

## Resumo dos Arquivos Modificados

| Arquivo | Mudança Principal |
|---------|-------------------|
| `src/lib/shopify.ts` | Novo domínio Shopify |
| `src/components/Header.tsx` | "Ver Produtos" no lugar de "Solicitar Orçamento" |
| `src/components/HeroSection.tsx` | CTA secundário → WhatsApp |
| `src/components/TestimonialsSection.tsx` | Reescrito: "Avaliações em breve" |
| `src/components/Footer.tsx` | Copyright 2026, aviso Amazon, remover links |
| `src/components/WhyChooseSection.tsx` | + CTA "Ver Produtos" |
| `src/components/AudienceSection.tsx` | + CTA "Ver Produtos" |
| `src/components/ApartmentSection.tsx` | CTA → "Ver Produtos" |
| `src/components/MeditationSection.tsx` | CTA → "Ver Produtos" |
| `src/components/ProductsSection.tsx` | Empty state → WhatsApp |

## Próximo Passo (Após Aprovação)

Após aplicar as mudanças, vou solicitar o novo **Storefront Access Token** da loja `vittapool-group.myshopify.com` para que os produtos carreguem corretamente. Você pode gerá-lo em: **Shopify Admin → Settings → Apps and sales channels → Develop apps → Storefront API**.

