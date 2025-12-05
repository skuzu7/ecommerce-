"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import Image from "next/image";

const salesData = [
    { name: "Maria S.", location: "São Paulo, SP", product: "Mini Impressora Térmica", time: "há 2 minutos" },
    { name: "João P.", location: "Rio de Janeiro, RJ", product: "Projetor Galáxia", time: "há 5 minutos" },
    { name: "Ana C.", location: "Curitiba, PR", product: "Umidificador Anti-Gravidade", time: "há 1 minuto" },
    { name: "Pedro H.", location: "Belo Horizonte, MG", product: "Massageador Inteligente", time: "há 8 minutos" },
    { name: "Lucas M.", location: "Porto Alegre, RS", product: "Smartwatch Ultra", time: "há 3 minutos" },
];

export function SalesPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSale, setCurrentSale] = useState(salesData[0]);

    useEffect(() => {
        // Initial delay
        const initialTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        // Cycle through sales
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                const randomSale = salesData[Math.floor(Math.random() * salesData.length)];
                setCurrentSale(randomSale);
                setIsVisible(true);
            }, 2000); // Wait 2s before showing next
        }, 15000); // Show every 15s

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 animate-slide-up">
            <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/5 max-w-[350px]">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                >
                    <X className="h-3 w-3" />
                </button>

                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                </div>

                <div>
                    <p className="text-sm font-medium text-foreground">
                        <span className="font-bold text-primary">{currentSale.name}</span> de {currentSale.location}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Comprou <span className="font-medium text-foreground">{currentSale.product}</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                        {currentSale.time}
                    </p>
                </div>
            </div>
        </div>
    );
}
