"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Landmark, QrCode, User, Mail, Phone, Truck, Package, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function CheckoutPage() {
    const { items, total, clearCart } = useCart();
    const [shippingCost, setShippingCost] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState("BR");
    // const { toast } = useToast();

    const calculateShipping = (country: string) => {
        // LÓGICA DE DROPSHIPPING (PLACEHOLDER)
        // Aqui você integraria com a API do seu fornecedor ou serviço de frete.
        // Para simulação, vamos definir custos diferentes por país.
        if (country === "BR") {
            setShippingCost(0); // Frete Grátis para o Brasil
        } else if (country === "US") {
            setShippingCost(50); // Custo de 50 para os EUA
        } else {
            setShippingCost(100); // Custo de 100 para outros países
        }
        setSelectedCountry(country);
    };

    const handlePlaceOrder = () => {
        // LÓGICA DE DROPSHIPPING (PLACEHOLDER)
        // 1. Processar o pagamento com um gateway (Stripe, etc.)
        // 2. Se o pagamento for bem-sucedido:
        //    a. Salvar o pedido no seu banco de dados.
        //    b. Enviar os detalhes do pedido para a API do seu fornecedor.

        const orderData = {
            customer: { name: "John Doe", email: "john.doe@example.com" }, // Obter dados do formulário
            shippingAddress: { country: selectedCountry, zip: "12345" }, // Obter dados do formulário
            items: items,
            total: total + shippingCost,
        };

        // Simulação de envio para a API do fornecedor
        console.log("Enviando pedido para o fornecedor:", orderData);
        alert(`Pedido Simulado!\n\nDados enviados ao fornecedor:\n${JSON.stringify(orderData, null, 2)}`);

        toast.success("Pedido realizado com sucesso!", {
            description: "Seu pedido foi enviado para processamento.",
        });

        clearCart();
        // Redirecionar para uma página de "Obrigado"
        // router.push('/thank-you');
    }

    return (
        <div className="bg-muted/30">
            <div className="container py-12 md:py-16">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight">Finalizar Compra</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Formulários de Contato e Endereço */}
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><User className="text-primary" /> Informações de Contato</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2"><Label htmlFor="name">Nome Completo</Label><Input id="name" placeholder="Seu nome" /></div>
                                <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" placeholder="seu@email.com" /></div>
                                <div className="space-y-2"><Label htmlFor="phone">Telefone / WhatsApp</Label><Input id="phone" placeholder="(11) 99999-9999" /></div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><Truck className="text-primary" /> Endereço de Entrega</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="country">País</Label>
                                    <Select onValueChange={calculateShipping} defaultValue="BR">
                                        <SelectTrigger><SelectValue placeholder="Selecione o país" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="BR">Brasil</SelectItem>
                                            <SelectItem value="US">Estados Unidos</SelectItem>
                                            <SelectItem value="Outro">Outro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2 md:col-span-1"><Label htmlFor="zip">CEP</Label><Input id="zip" placeholder="00000-000" /></div>
                                    <div className="space-y-2 md:col-span-2"><Label htmlFor="street">Rua / Avenida</Label><Input id="street" placeholder="Sua rua" /></div>
                                </div>
                                {/* ... resto dos campos de endereço ... */}
                            </CardContent>
                        </Card>

                        {/* Pagamento */}
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><CreditCard className="text-primary" /> Pagamento</CardTitle></CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible defaultValue="credit-card" className="w-full">
                                    {/* Opções de Pagamento */}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Resumo do Pedido */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24">
                            <CardHeader><CardTitle className="flex items-center gap-2"><Package className="text-primary" /> Resumo do Pedido</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3 max-h-64 overflow-y-auto">
                                    {items.map(item => (
                                        <div key={item.id} className="flex items-center gap-4">
                                            <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                                                <Badge className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{item.quantity}</Badge>
                                            </div>
                                            <div className="flex-1"><p className="text-sm font-medium line-clamp-1">{item.title}</p><p className="text-sm text-muted-foreground">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}</p></div>
                                            <p className="text-sm font-semibold">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price * item.quantity)}</p>
                                        </div>
                                    ))}
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total)}</span></div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Frete</span>
                                        {shippingCost === 0 ? <span className="text-green-600 font-semibold">Grátis</span> : <span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(shippingCost)}</span>}
                                    </div>
                                    <Separator />
                                    <div className="flex justify-between items-center font-bold text-lg">
                                        <span>Total</span>
                                        <span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total + shippingCost)}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handlePlaceOrder} className="w-full h-12 text-lg font-bold" size="lg" disabled={items.length === 0}>
                                    Finalizar e Pagar
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
