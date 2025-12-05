import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="container py-12 md:py-20">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Fale Conosco
                </span>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Entre em Contato
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Estamos aqui para ajudar! Envie sua mensagem e nossa equipe responderá o mais rápido possível.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">E-mail</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                            Resposta em até 24 horas
                        </p>
                        <a href="mailto:contato@lojapremium.com" className="text-primary font-medium hover:underline">
                            contato@lojapremium.com
                        </a>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">Telefone</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                            Seg - Sex, 9h às 18h
                        </p>
                        <a href="tel:+5511999999999" className="text-primary font-medium hover:underline">
                            (11) 99999-9999
                        </a>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <MessageCircle className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">WhatsApp</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                            Atendimento rápido
                        </p>
                        <a href="https://wa.me/5511999999999" className="text-primary font-medium hover:underline">
                            Iniciar conversa
                        </a>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                        <p className="text-muted-foreground text-sm">
                            Segunda a Sexta: 9h - 18h<br />
                            Sábado: 9h - 13h
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <div className="p-8 rounded-2xl bg-card border border-border/50">
                        <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome completo</Label>
                                    <Input id="name" placeholder="Seu nome" className="h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input id="email" type="email" placeholder="seu@email.com" className="h-12" />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone</Label>
                                    <Input id="phone" placeholder="(00) 00000-0000" className="h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Assunto</Label>
                                    <Input id="subject" placeholder="Como podemos ajudar?" className="h-12" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Mensagem</Label>
                                <textarea
                                    id="message"
                                    placeholder="Escreva sua mensagem aqui..."
                                    rows={5}
                                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                                />
                            </div>
                            <Button size="lg" className="w-full sm:w-auto px-8 rounded-full">
                                Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
