import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, Truck, ShieldCheck, Headphones, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "50K+", label: "Clientes Satisfeitos" },
    { value: "10K+", label: "Produtos Entregues" },
    { value: "99%", label: "Avaliações Positivas" },
    { value: "24/7", label: "Suporte ao Cliente" },
];

const values = [
    {
        icon: Heart,
        title: "Compromisso com Você",
        description: "Cada cliente é único para nós. Trabalhamos incansavelmente para garantir sua satisfação total.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança Garantida",
        description: "Todas as transações são protegidas com a mais alta tecnologia de criptografia.",
    },
    {
        icon: Truck,
        title: "Entrega Rápida",
        description: "Parcerias com as melhores transportadoras para entregar seu pedido o mais rápido possível.",
    },
    {
        icon: Headphones,
        title: "Suporte Premium",
        description: "Nossa equipe está disponível 24/7 para ajudar você com qualquer dúvida ou problema.",
    },
];

export default function SobrePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            Nossa História
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Transformando a forma como você{" "}
                            <span className="gradient-text">compra online</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Somos uma loja focada em trazer os melhores produtos do mundo inteiro
                            diretamente para sua casa, com qualidade, segurança e os melhores preços.
                        </p>
                    </div>
                </div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y bg-muted/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Nossa Missão
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            Democratizar o acesso a produtos de qualidade
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Acreditamos que todos merecem ter acesso aos melhores produtos do mercado,
                            sem precisar pagar fortunas. Por isso, trabalhamos diretamente com fornecedores
                            globais para trazer produtos de alta qualidade pelos melhores preços.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Nossa equipe está constantemente buscando novidades e tendências para
                            oferecer a você uma experiência de compra única e satisfatória.
                        </p>
                        <Button size="lg" className="rounded-full" asChild>
                            <Link href="/produtos">
                                Explorar Produtos
                            </Link>
                        </Button>
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                            alt="Nossa equipe"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Nossos Valores
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            O que nos move
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Nossos valores fundamentam cada decisão que tomamos e cada produto que oferecemos.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <value.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 container">
                <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-10 md:p-16 text-center text-primary-foreground overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para começar?
                        </h2>
                        <p className="text-primary-foreground/80 mb-8 text-lg">
                            Explore nossa coleção de produtos e encontre ofertas incríveis esperando por você.
                        </p>
                        <Button size="lg" variant="secondary" className="rounded-full font-semibold" asChild>
                            <Link href="/produtos">
                                Ver Produtos
                            </Link>
                        </Button>
                    </div>
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
                </div>
            </section>
        </div>
    );
}
