import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Política de Privacidade
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
                A VittaPool Group está comprometida com a proteção e privacidade dos dados pessoais de seus clientes. Esta política descreve como coletamos, usamos e protegemos suas informações.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">1. Coleta de Dados Pessoais</h2>
              <p className="text-muted-foreground mb-4">
                Coletamos informações pessoais quando você:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Realiza uma compra em nosso site</li>
                <li>Cria uma conta ou cadastro</li>
                <li>Entra em contato conosco por formulário, e-mail ou chat</li>
                <li>Se inscreve em nossa newsletter</li>
                <li>Navega em nosso site (cookies e dados de navegação)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Dados coletados incluem:</strong> nome, e-mail, telefone, endereço de entrega, CPF, dados de pagamento e informações de navegação.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">2. Uso das Informações</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos seus dados para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Processar e entregar seus pedidos</li>
                <li>Comunicar sobre status de compras e entregas</li>
                <li>Enviar ofertas, novidades e informações relevantes (com seu consentimento)</li>
                <li>Melhorar a experiência de navegação e compra</li>
                <li>Prevenir fraudes e garantir a segurança das transações</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">3. Proteção e Segurança</h2>
              <p className="text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL em todas as transações e armazenamos dados em servidores seguros.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground mb-4">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar informações apenas com:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Operadores de pagamento para processamento de transações</li>
                <li>Empresas de logística para entrega de produtos</li>
                <li>Autoridades legais quando exigido por lei</li>
                <li>Parceiros de tecnologia que auxiliam na operação do site (com contratos de confidencialidade)</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">5. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground mb-4">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e analisar o tráfego do site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">7. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas sobre privacidade ou para exercer seus direitos, entre em contato conosco:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">E-mail:</strong> contato@vittapoolgroup.com.br
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">8. Alterações nesta Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos seus dados.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
