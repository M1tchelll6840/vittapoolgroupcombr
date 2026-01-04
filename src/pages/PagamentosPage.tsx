import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCard } from "lucide-react";

export default function PagamentosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Política de Pagamentos
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
                Na VittaPool Group, oferecemos diversas formas de pagamento para facilitar sua compra, sempre com segurança e transparência.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">1. Formas de Pagamento Aceitas</h2>
              
              <h3 className="font-semibold text-lg mt-6 mb-3">Cartão de Crédito</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Visa, Mastercard, American Express, Elo, Hipercard</li>
                <li>Parcelamento em até 12x (conforme valor da compra)</li>
                <li>Parcelas mínimas de R$ 50,00</li>
                <li>Juros podem ser aplicados a partir de determinado número de parcelas</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6 mb-3">PIX</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Pagamento instantâneo, disponível 24 horas</li>
                <li>Confirmação imediata após o pagamento</li>
                <li>QR Code válido por 30 minutos</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6 mb-3">Boleto Bancário</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Vencimento em 3 dias úteis</li>
                <li>Compensação em até 3 dias úteis após o pagamento</li>
                <li>Pagamento à vista</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">2. Segurança das Transações</h2>
              <p className="text-muted-foreground mb-4">
                Sua segurança é nossa prioridade. Todas as transações são protegidas por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Criptografia SSL:</strong> Seus dados são criptografados durante toda a transação</li>
                <li><strong className="text-foreground">Gateways de pagamento certificados:</strong> Utilizamos plataformas reconhecidas e auditadas</li>
                <li><strong className="text-foreground">Antifraude:</strong> Sistema de análise de risco para proteger compradores e vendedores</li>
                <li><strong className="text-foreground">Certificação PCI DSS:</strong> Conformidade com padrões internacionais de segurança de dados</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">3. Confirmação de Pagamento</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Cartão de crédito:</strong> Confirmação em até 1 hora (sujeito à análise de fraude)</li>
                <li><strong className="text-foreground">PIX:</strong> Confirmação instantânea</li>
                <li><strong className="text-foreground">Boleto:</strong> Confirmação em até 3 dias úteis após o pagamento</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Você receberá um e-mail de confirmação assim que o pagamento for aprovado. A preparação do pedido inicia somente após a confirmação.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">4. Problemas com Pagamento</h2>
              <p className="text-muted-foreground mb-4">
                Se seu pagamento não for aprovado, verifique:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Se os dados do cartão foram inseridos corretamente</li>
                <li>Se há limite disponível no cartão</li>
                <li>Se o cartão está habilitado para compras online</li>
                <li>Se o boleto foi pago dentro do prazo de vencimento</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Em caso de dúvidas, entre em contato com seu banco ou conosco.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">5. Cancelamentos e Estornos</h2>
              
              <h3 className="font-semibold text-lg mt-6 mb-3">Cancelamento pelo Cliente</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Pedidos podem ser cancelados antes do envio entrando em contato conosco</li>
                <li>Após o envio, aplicam-se as regras da Política de Trocas e Devoluções</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6 mb-3">Estorno no Cartão de Crédito</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Processado em até 10 dias úteis após aprovação</li>
                <li>O valor aparecerá como crédito em até 2 faturas subsequentes, conforme operadora</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6 mb-3">Estorno PIX e Boleto</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Reembolso via transferência bancária para conta indicada pelo cliente</li>
                <li>Processado em até 10 dias úteis após aprovação</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">6. Notas Fiscais</h2>
              <p className="text-muted-foreground">
                A nota fiscal eletrônica (NF-e) será enviada para o e-mail cadastrado após a confirmação do pagamento e emissão do pedido. Guarde este documento para eventuais solicitações de garantia, trocas ou devoluções.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">7. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas sobre pagamentos:
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
