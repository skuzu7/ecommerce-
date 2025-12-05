"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Search, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const mockStatuses = [
    { status: "Pedido Confirmado", date: "01/12/2024 - 10:30", completed: true },
    { status: "Pagamento Aprovado", date: "01/12/2024 - 10:35", completed: true },
    { status: "Em Preparação", date: "02/12/2024 - 14:20", completed: true },
    { status: "Enviado para Transportadora", date: "03/12/2024 - 09:15", completed: true },
    { status: "Em Trânsito", date: "04/12/2024 - 08:00", completed: false, current: true },
    { status: "Saiu para Entrega", date: "", completed: false },
    { status: "Entregue", date: "", completed: false },
];

export default function RastreioPage() {
    const [trackingCode, setTrackingCode] = useState("");
    const [showTracking, setShowTracking] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingCode.trim()) {
            setShowTracking(true);
        }
    };

    return (
        <div className="container py-12 md:py-20 max-w-3xl">
            <div className="text-center mb-12">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Package className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Rastrear Pedido
                </h1>
                <p className="text-lg text-muted-foreground">
                    Insira o código de rastreamento para acompanhar seu pedido em tempo real.
                </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-12">
                <div className="flex gap-3">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Digite o código de rastreamento"
                            value={trackingCode}
                            onChange={(e) => setTrackingCode(e.target.value)}
                            className="h-14 pl-12 text-base rounded-xl"
                        />
                    </div>
                    <Button type="submit" size="lg" className="h-14 px-8 rounded-xl">
                        Rastrear
                    </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                    O código de rastreamento foi enviado para seu e-mail após o envio do pedido.
                </p>
            </form>

            {/* Tracking Result */}
            {showTracking && (
                <div className="animate-fade-in">
                    {/* Order Info */}
                    <div className="p-6 rounded-2xl bg-card border border-border/50 mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Código de Rastreamento</p>
                                <p className="font-semibold text-lg">{trackingCode}</p>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
                                Em Trânsito
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>Previsão de entrega: 10/12/2024 - 15/12/2024</span>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="p-6 rounded-2xl bg-card border border-border/50">
                        <h3 className="font-semibold text-lg mb-6">Histórico do Pedido</h3>
                        <div className="space-y-0">
                            {mockStatuses.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    {/* Timeline Line */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${item.completed
                                                    ? "bg-green-500 text-white"
                                                    : item.current
                                                        ? "bg-primary text-white animate-pulse"
                                                        : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            {item.completed ? (
                                                <CheckCircle className="h-4 w-4" />
                                            ) : item.current ? (
                                                <Truck className="h-4 w-4" />
                                            ) : (
                                                <Clock className="h-4 w-4" />
                                            )}
                                        </div>
                                        {index < mockStatuses.length - 1 && (
                                            <div
                                                className={`w-0.5 h-12 ${item.completed ? "bg-green-500" : "bg-muted"
                                                    }`}
                                            />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="pb-8">
                                        <p
                                            className={`font-medium ${item.current ? "text-primary" : item.completed ? "" : "text-muted-foreground"
                                                }`}
                                        >
                                            {item.status}
                                        </p>
                                        {item.date && (
                                            <p className="text-sm text-muted-foreground">{item.date}</p>
                                        )}
                                        {item.current && (
                                            <p className="text-sm text-primary mt-1">
                                                Seu pedido está a caminho!
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Help */}
                    <div className="mt-6 p-4 rounded-xl bg-muted/50 text-center">
                        <p className="text-sm text-muted-foreground">
                            Precisa de ajuda?{" "}
                            <a href="/contato" className="text-primary hover:underline font-medium">
                                Entre em contato com nosso suporte
                            </a>
                        </p>
                    </div>
                </div>
            )}

            {/* No Search Yet */}
            {!showTracking && (
                <div className="text-center py-12">
                    <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        <Truck className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">
                        Digite seu código de rastreamento para ver o status do seu pedido.
                    </p>
                </div>
            )}
        </div>
    );
}
