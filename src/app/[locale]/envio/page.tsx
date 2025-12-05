import { Truck, Package, Clock, MapPin, CheckCircle, Globe, Plane, AlertTriangle } from "lucide-react";

const shippingInfo = [
    {
        icon: Plane,
        title: "Envio Internacional",
        description: "Produtos enviados diretamente dos nossos fornecedores no exterior (EUA, Europa e Ásia).",
    },
    {
        icon: Clock,
        title: "Prazo de Entrega",
        description: "Média de 15 a 25 dias úteis após a postagem. O prazo pode variar conforme a agilidade dos Correios.",
    },
    {
        icon: Globe,
        title: "Rastreio Global",
        description: "Acompanhe seu pedido desde a origem até a chegada em sua residência no Brasil.",
    },
    {
        icon: CheckCircle,
        title: "Garantia de Entrega",
        description: "Garantimos a entrega do seu pedido ou devolvemos o seu dinheiro integralmente.",
    },
];

const freeShippingBenefits = [
    "Frete Grátis Internacional para todo Brasil",
    "Seguro contra extravio incluso",
    "Código de rastreio internacional",
    "Suporte em português durante todo o trajeto",
];

export default function EnvioPage() {
    return (
        <div className="container py-12 md:py-20 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Política de Envio Internacional
                </h1>
                <p className="text-lg text-muted-foreground">
                    Transparência total sobre o processo de importação e entrega dos seus produtos.
                </p>
            </div>

            {/* Free Shipping Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border border-blue-500/20 mb-12">
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Plane className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Frete Internacional Grátis</h2>
                        <p className="text-muted-foreground mb-4">
                            Aproveite frete grátis em todos os pedidos para qualquer lugar do Brasil.
                        </p>
                        <ul className="space-y-1">
                            {freeShippingBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-blue-500" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {shippingInfo.map((info, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Como Funciona a Importação</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Nossos produtos são enviados diretamente dos fabricantes no exterior para o seu endereço.
                            Isso nos permite oferecer preços muito mais baixos do que o mercado nacional, pois eliminamos
                            intermediários e custos de estoque local.
                        </p>
                        <p>
                            Após a confirmação do pagamento, o pedido é processado em até 3 a 5 dias úteis.
                            Você receberá o código de rastreamento internacional assim que o produto for despachado.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-amber-500" />
                        Alfândega e Tributação
                    </h2>
                    <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-muted-foreground space-y-4">
                        <p>
                            A grande maioria dos nossos pedidos é entregue sem cobrança de taxas extras. No entanto,
                            como se trata de uma importação, o pacote está sujeito à fiscalização da Receita Federal.
                        </p>
                        <p>
                            <strong>Importante:</strong> Caso seu pedido seja taxado, nós oferecemos suporte para orientar
                            sobre o pagamento ou, em alguns casos promocionais, podemos arcar com parte ou totalidade do custo.
                            Consulte nossas promoções vigentes.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Prazos Estimados por Região</h2>
                    <div className="rounded-xl border overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="text-left p-4 font-medium">Região</th>
                                    <th className="text-left p-4 font-medium">Prazo Estimado (dias úteis)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="p-4">Sul e Sudeste</td>
                                    <td className="p-4 text-muted-foreground">15 a 20 dias</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Centro-Oeste</td>
                                    <td className="p-4 text-muted-foreground">18 a 25 dias</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Nordeste</td>
                                    <td className="p-4 text-muted-foreground">20 a 30 dias</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Norte</td>
                                    <td className="p-4 text-muted-foreground">25 a 35 dias</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Dúvidas sobre seu Pedido?</h2>
                    <p className="text-muted-foreground mb-4">
                        Você pode rastrear seu pedido ou entrar em contato com nossa equipe.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/rastreio"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            Rastrear Pedido
                        </a>
                        <a
                            href="/contato"
                            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent transition-colors"
                        >
                            Falar com Suporte
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
