import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Qual é o prazo de entrega?",
        answer: "O prazo de entrega varia de acordo com a sua região. Em geral, entregamos em até 15-30 dias úteis para todo o Brasil. Você pode acompanhar seu pedido em tempo real através do código de rastreamento que enviamos por e-mail.",
    },
    {
        question: "Como funciona a política de devolução?",
        answer: "Oferecemos 30 dias de garantia em todos os produtos. Se você não estiver satisfeito, pode solicitar a devolução do valor pago. Basta entrar em contato conosco pelo WhatsApp ou e-mail com seu número de pedido.",
    },
    {
        question: "Os produtos são originais?",
        answer: "Trabalhamos apenas com fornecedores confiáveis e produtos de alta qualidade. Todos os nossos produtos passam por rigoroso controle de qualidade antes de serem enviados.",
    },
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos cartões de crédito (Visa, Mastercard, Elo, American Express), Pix, boleto bancário e parcelamento em até 12x sem juros no cartão.",
    },
    {
        question: "Como rastrear meu pedido?",
        answer: "Após a confirmação do envio, você receberá um e-mail com o código de rastreamento. Você também pode acessar nossa página de rastreamento e inserir o código para verificar o status da entrega.",
    },
    {
        question: "Vocês entregam para todo o Brasil?",
        answer: "Sim! Entregamos para todos os estados brasileiros. O frete é calculado automaticamente no checkout de acordo com o seu CEP.",
    },
    {
        question: "Como entrar em contato com o suporte?",
        answer: "Você pode nos contatar pelo WhatsApp (11) 99999-9999, e-mail contato@lojapremium.com ou através do formulário na página de Contato. Nossa equipe responde em até 24 horas.",
    },
    {
        question: "É seguro comprar neste site?",
        answer: "Absolutamente! Utilizamos criptografia SSL em todas as transações e trabalhamos com as maiores plataformas de pagamento do Brasil. Seus dados estão 100% protegidos.",
    },
];

export default function FAQPage() {
    return (
        <div className="container py-12 md:py-20 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Central de Ajuda
                </span>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Perguntas Frequentes
                </h1>
                <p className="text-lg text-muted-foreground">
                    Encontre respostas para as dúvidas mais comuns sobre nossa loja
                </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
                    >
                        <summary className="flex items-center justify-between font-semibold text-lg list-none">
                            {faq.question}
                            <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                        </summary>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-muted/50 text-center">
                <h3 className="text-xl font-semibold mb-2">Não encontrou o que procurava?</h3>
                <p className="text-muted-foreground mb-4">
                    Entre em contato com nossa equipe de suporte
                </p>
                <a
                    href="/contato"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                    Falar com Suporte
                </a>
            </div>
        </div>
    );
}
