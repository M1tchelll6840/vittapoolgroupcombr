import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck } from "lucide-react";

export default function EnvioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Política de Envio e Entrega
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
              <p className="lead text-lg text-muted-foreground">
                Na VittaPool Group, trabalhamos para garantir que seus produtos cheguem de forma rápida, segura e com total transparência em cada etapa do processo.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">1. Formas de Envio</h2>
              <p className="text-muted-foreground mb-4">
                Trabalhamos com transportadoras parceiras de confiança para entregar em todo o Brasil:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Transportadoras parceiras:</strong> Para produtos de grande porte como piscinas e banheiras</li>
                <li><strong className="text-foreground">Correios:</strong> Para produtos menores e acessórios</li>
                <li><strong className="text-foreground">Transportadora expressa:</strong> Opção disponível para algumas regiões</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                A modalidade de envio disponível será exibida no momento da finalização da compra, de acordo com seu CEP e produtos no carrinho.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">2. Prazos de Entrega</h2>
              <p className="text-muted-foreground mb-4">
                Os prazos estimados são calculados a partir da confirmação do pagamento:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Capitais e regiões metropolitanas:</strong> 5 a 10 dias úteis</li>
                <li><strong className="text-foreground">Interior:</strong> 7 a 15 dias úteis</li>
                <li><strong className="text-foreground">Regiões remotas:</strong> 10 a 20 dias úteis</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Importante:</strong> Prazos podem variar em períodos de alta demanda (datas comemorativas, promoções) ou por fatores externos como greves e intempéries.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">3. Processamento do Pedido</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Confirmação do pagamento:</strong> Boletos podem levar até 3 dias úteis para compensação</li>
                <li><strong className="text-foreground">Preparação:</strong> Até 2 dias úteis após confirmação do pagamento</li>
                <li><strong className="text-foreground">Postagem:</strong> Você receberá o código de rastreamento por e-mail</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">4. Acompanhamento de Pedidos</h2>
              <p className="text-muted-foreground">
                Após a postagem, você receberá um e-mail com o código de rastreamento para acompanhar seu pedido em tempo real através do site da transportadora ou dos Correios.
              </p>
              <p className="text-muted-foreground mt-4">
                Também é possível verificar o status do pedido através do nosso site, na área "Meus Pedidos" (quando disponível) ou entrando em contato conosco.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">5. Tentativas de Entrega</h2>
              <p className="text-muted-foreground mb-4">
                As transportadoras e Correios realizam até 3 tentativas de entrega no endereço informado:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>É necessário que haja alguém para receber no endereço</li>
                <li>Após 3 tentativas sem sucesso, o produto retorna ao nosso centro de distribuição</li>
                <li>Em caso de retorno, entraremos em contato para agendar nova entrega (custos adicionais de frete podem ser aplicados)</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">6. Verificação na Entrega</h2>
              <p className="text-muted-foreground mb-4">
                Ao receber seu pedido, recomendamos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Verificar se a embalagem está íntegra antes de assinar</li>
                <li>Conferir se o produto corresponde ao pedido</li>
                <li>Em caso de avarias visíveis, recusar a entrega e entrar em contato conosco imediatamente</li>
                <li>Reportar problemas em até 48 horas após o recebimento</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">7. Atrasos e Comunicação</h2>
              <p className="text-muted-foreground">
                Em caso de atrasos por motivos externos (greves, intempéries, feriados prolongados), comunicaremos você por e-mail sobre a situação e nova previsão de entrega. Nosso time de atendimento está sempre disponível para esclarecer dúvidas.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">8. Frete Grátis</h2>
              <p className="text-muted-foreground">
                Oferecemos frete grátis para compras acima de determinado valor e para regiões específicas. As condições de frete grátis são exibidas no site e podem variar conforme promoções vigentes.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">9. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas sobre envio e entrega:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">E-mail:</strong> contato@vittapoolgroup.com.br
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
