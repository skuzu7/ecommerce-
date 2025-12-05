import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, CreditCard, Shield, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
];

const quickLinks = [
    { title: "Produtos", href: "/produtos" },
    { title: "Sobre Nós", href: "/sobre" },
    { title: "Contato", href: "/contato" },
    { title: "Perguntas Frequentes", href: "/faq" },
    { title: "Rastrear Pedido", href: "/rastreio" },
];

const institutionalLinks = [
    { title: "Termos de Uso", href: "/termos" },
    { title: "Política de Privacidade", href: "/privacidade" },
    { title: "Trocas e Devoluções", href: "/trocas" },
    { title: "Política de Envio", href: "/envio" },
];

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                    {/* Brand & Newsletter */}
                    <div className="md:col-span-4">
                        <Link href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">Loja Premium</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Cadastre-se para receber 10% OFF na primeira compra e ficar por dentro das novidades.
                        </p>
                        <div className="flex w-full gap-2">
                            <Input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="h-11 flex-1 rounded-lg"
                            />
                            <Button size="lg" className="h-11 px-6 rounded-lg">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-base mb-4">Links Rápidos</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {quickLinks.map(link => (
                                <li key={link.title}><Link href={link.href} className="hover:text-primary transition-colors">{link.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-base mb-4">Institucional</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {institutionalLinks.map(link => (
                                <li key={link.title}><Link href={link.href} className="hover:text-primary transition-colors">{link.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-base mb-4">Fale Conosco</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary" />
                                <span>(11) 99999-9999 (WhatsApp)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <span>contato@lojapremium.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <span>Atendimento: Seg. à Sex. das 9h às 18h</span>
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 pt-6">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.href} className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t bg-muted/50">
                <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Loja Premium. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span>Ambiente Seguro</span>
                        </div>
                        <div className="h-4 w-px bg-border"></div>
                        <p>Desenvolvido com ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

