import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RefreshCw } from "lucide-react";

export default function TrocasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Política de Trocas e Devoluções
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
                Na VittaPool Group, sua satisfação é nossa prioridade. Trabalhamos para garantir que você tenha uma experiência de compra tranquila e segura, incluindo nosso processo de trocas e devoluções.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">1. Direito de Arrependimento</h2>
              <p className="text-muted-foreground mb-4">
                De acordo com o Código de Defesa do Consumidor (Art. 49), você tem o direito de desistir da compra em até <strong className="text-foreground">7 (sete) dias corridos</strong> após o recebimento do produto, sem necessidade de justificativa.
              </p>
              <p className="text-muted-foreground">
                Para exercer esse direito, o produto deve estar:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                <li>Sem uso ou sinais de utilização</li>
                <li>Na embalagem original, com todos os acessórios e manuais</li>
                <li>Com a nota fiscal de compra</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">2. Condições para Troca</h2>
              <p className="text-muted-foreground mb-4">
                Aceitamos solicitações de troca nos seguintes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Produto com defeito de fabricação:</strong> Você tem até 30 dias para solicitar a troca após o recebimento</li>
                <li><strong className="text-foreground">Produto diferente do pedido:</strong> Se o produto entregue não corresponder ao que foi comprado</li>
                <li><strong className="text-foreground">Produto danificado no transporte:</strong> Danos visíveis devem ser reportados no ato da entrega ou em até 48 horas</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">3. Produtos Não Elegíveis</h2>
              <p className="text-muted-foreground mb-4">
                Não aceitamos trocas ou devoluções de produtos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Que tenham sido utilizados, inflados, montados ou instalados</li>
                <li>Com danos causados por mau uso, negligência ou acidentes</li>
                <li>Sem embalagem original ou com embalagem danificada pelo cliente</li>
                <li>Fora do prazo estabelecido para solicitação</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">4. Como Solicitar</h2>
              <p className="text-muted-foreground mb-4">
                Para solicitar uma troca ou devolução, siga os passos:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Entre em contato pelo e-mail <strong className="text-foreground">contato@vittapoolgroup.com.br</strong> informando o número do pedido e o motivo da solicitação</li>
                <li>Aguarde a análise e aprovação da nossa equipe (até 3 dias úteis)</li>
                <li>Após aprovação, você receberá as instruções para envio do produto</li>
                <li>Envie o produto com todos os itens e acessórios originais</li>
                <li>Após recebermos e analisarmos o produto, processaremos a troca ou reembolso</li>
              </ol>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">5. Custos de Envio</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Arrependimento:</strong> O frete de devolução é de responsabilidade do cliente</li>
                <li><strong className="text-foreground">Defeito ou erro no envio:</strong> O frete de devolução é por nossa conta</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">6. Análise e Reembolso</h2>
              <p className="text-muted-foreground mb-4">
                Após o recebimento do produto devolvido:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>A análise será realizada em até <strong className="text-foreground">5 dias úteis</strong></li>
                <li>Se aprovada a devolução, o reembolso será processado em até <strong className="text-foreground">10 dias úteis</strong></li>
                <li>O reembolso será feito na mesma forma de pagamento utilizada na compra</li>
                <li>Para compras no cartão de crédito, o estorno aparecerá em até 2 faturas subsequentes, conforme política da operadora</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">7. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas sobre trocas e devoluções:
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
