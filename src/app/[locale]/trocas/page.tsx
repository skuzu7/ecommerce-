import { Package, RefreshCcw, Clock, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        icon: Package,
        title: "Solicite a Troca",
        description: "Entre em contato conosco informando o número do pedido e o motivo da troca ou devolução.",
    },
    {
        icon: CheckCircle,
        title: "Aguarde Aprovação",
        description: "Nossa equipe analisará sua solicitação e responderá em até 48 horas.",
    },
    {
        icon: RefreshCcw,
        title: "Envie o Produto",
        description: "Após aprovação, você receberá as instruções para envio do produto.",
    },
    {
        icon: Clock,
        title: "Receba o Reembolso",
        description: "Após recebermos o produto, o reembolso será processado em até 7 dias úteis.",
    },
];

export default function TrocasPage() {
    return (
        <div className="container py-12 md:py-20 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Trocas e Devoluções
                </h1>
                <p className="text-lg text-muted-foreground">
                    Sua satisfação é nossa prioridade. Conheça nossa política de trocas e devoluções.
                </p>
            </div>

            {/* Guarantee Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-12">
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Garantia de 30 Dias</h2>
                        <p className="text-muted-foreground">
                            Você tem até 30 dias após o recebimento do produto para solicitar troca ou devolução.
                            Sem burocracia, sem complicação.
                        </p>
                    </div>
                </div>
            </div>

            {/* Steps */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Como funciona?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditions */}
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        Condições para Troca/Devolução
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Produto dentro do prazo de 30 dias após o recebimento</li>
                        <li>Produto na embalagem original, sem sinais de uso</li>
                        <li>Nota fiscal ou comprovante de compra</li>
                        <li>Acessórios e brindes inclusos (se aplicável)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-amber-500" />
                        Exceções
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Produtos com danos causados por mau uso</li>
                        <li>Itens personalizados ou sob encomenda</li>
                        <li>Produtos de higiene pessoal (após abertura)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <HelpCircle className="h-6 w-6 text-primary" />
                        Dúvidas?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Nossa equipe está pronta para ajudar você com qualquer dúvida sobre trocas e devoluções.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Falar com Suporte
                    </Link>
                </section>
            </div>
        </div>
    );
}
