"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ShieldCheck, Star, Zap, CreditCard, Globe } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Hero() {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 0 });
    const t = useTranslations('Hero');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return { hours: 2, minutes: 15, seconds: 0 }; // Reset
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="container relative z-10 py-20">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <div className="animate-fade-in inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm shadow-sm">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                            </span>
                            <span className="font-bold text-red-500">OFERTA RELÂMPAGO</span>
                        </div>
                        <div className="w-px h-4 bg-primary/20"></div>
                        <div className="flex items-center gap-1 font-mono text-base">
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="animate-slide-up text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                        <span className="block text-foreground">{t('title')}</span>
                        <span className="block gradient-text">Direto Para Você</span>
                    </h1>

                    {/* Subheading */}
                    <p className="animate-slide-up text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.1s' }}>
                        {t('subtitle')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" style={{ animationDelay: '0.2s' }}>
                        <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-10 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300" asChild>
                            <Link href="#produtos">
                                Ver Novidades <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-10 rounded-full border-2 hover:bg-primary/5 hover:scale-105 transition-all duration-300" asChild>
                            <Link href="/sobre">
                                Como Funciona
                            </Link>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="animate-slide-up grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Truck className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Frete Grátis</span>
                            <span className="text-xs text-muted-foreground">Para todo Brasil</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Garantia de Entrega</span>
                            <span className="text-xs text-muted-foreground">Rastreio Internacional</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <CreditCard className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Sem Taxas Extras</span>
                            <span className="text-xs text-muted-foreground">Impostos Inclusos</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Star className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Curadoria Premium</span>
                            <span className="text-xs text-muted-foreground">Produtos Virais</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
