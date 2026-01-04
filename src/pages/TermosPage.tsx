import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Termos de Uso
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
                Bem-vindo ao site da VittaPool Group. Ao acessar e utilizar nosso site, você concorda com os termos e condições descritos abaixo. Leia atentamente antes de navegar.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground">
                Ao acessar, navegar ou utilizar o site da VittaPool Group, você declara que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde com algum termo, recomendamos que não utilize nossos serviços.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">2. Uso do Site</h2>
              <p className="text-muted-foreground mb-4">
                Você se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Utilizar o site apenas para fins legais e de acordo com estes termos</li>
                <li>Não reproduzir, duplicar, copiar ou explorar comercialmente qualquer conteúdo sem autorização</li>
                <li>Fornecer informações verdadeiras e atualizadas ao realizar cadastros ou compras</li>
                <li>Não interferir na segurança ou funcionamento do site</li>
                <li>Não transmitir vírus, malware ou qualquer código malicioso</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">3. Propriedade Intelectual</h2>
              <p className="text-muted-foreground">
                Todo o conteúdo do site, incluindo textos, imagens, logotipos, gráficos, vídeos e software, é propriedade da VittaPool Group ou de seus licenciadores e está protegido por leis de propriedade intelectual. É proibida a reprodução, distribuição ou uso não autorizado de qualquer conteúdo.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">4. Responsabilidades do Usuário</h2>
              <p className="text-muted-foreground mb-4">
                O usuário é responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Todas as atividades realizadas em sua conta</li>
                <li>Verificar a compatibilidade dos produtos com suas necessidades antes da compra</li>
                <li>Utilizar os produtos conforme instruções e recomendações</li>
              </ul>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground mb-4">
                A VittaPool Group não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Danos indiretos, incidentais ou consequenciais decorrentes do uso do site</li>
                <li>Interrupções temporárias no acesso ao site por motivos técnicos</li>
                <li>Conteúdo de sites de terceiros acessados através de links</li>
                <li>Uso inadequado dos produtos fora das especificações recomendadas</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Nos esforçamos para fornecer informações precisas e atualizadas, mas não garantimos que o conteúdo esteja livre de erros ou omissões.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">6. Compras e Pagamentos</h2>
              <p className="text-muted-foreground">
                Todas as compras realizadas no site estão sujeitas à disponibilidade de produtos e confirmação de pagamento. Reservamo-nos o direito de cancelar pedidos em caso de suspeita de fraude, inconsistência de dados ou indisponibilidade de estoque.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">7. Alterações nos Termos</h2>
              <p className="text-muted-foreground">
                A VittaPool Group pode alterar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação no site. Recomendamos que você revise esta página periodicamente.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">8. Lei Aplicável e Foro</h2>
              <p className="text-muted-foreground">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca da sede da VittaPool Group.
              </p>

              <h2 className="font-display text-xl font-semibold mt-8 mb-4">9. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
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
