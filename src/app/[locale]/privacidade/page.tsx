export default function PrivacidadePage() {
    return (
        <div className="container py-12 md:py-20 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Política de Privacidade
                </h1>
                <p className="text-muted-foreground">
                    Última atualização: Dezembro de 2024
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Coletamos informações que você nos fornece diretamente, como:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Nome completo e e-mail</li>
                            <li>Endereço de entrega</li>
                            <li>Telefone para contato</li>
                            <li>Informações de pagamento (processadas por gateways seguros)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Utilizamos suas informações para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Processar e entregar seus pedidos</li>
                            <li>Enviar atualizações sobre seu pedido</li>
                            <li>Responder suas dúvidas e solicitações</li>
                            <li>Melhorar nossos produtos e serviços</li>
                            <li>Enviar ofertas e promoções (com seu consentimento)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Proteção de Dados</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL em todas as transações.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Não vendemos suas informações pessoais. Compartilhamos dados apenas com parceiros necessários para processar pedidos (transportadoras, processadores de pagamento) e sempre de forma segura.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Utilizamos cookies para melhorar sua experiência de navegação, lembrar suas preferências e analisar como nosso site é utilizado. Você pode controlar os cookies através das configurações do seu navegador.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Você tem o direito de:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Acessar seus dados pessoais</li>
                            <li>Corrigir dados incorretos</li>
                            <li>Solicitar a exclusão de seus dados</li>
                            <li>Cancelar o recebimento de e-mails promocionais</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail contato@lojapremium.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
