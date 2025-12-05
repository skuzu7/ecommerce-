"use client";

import Image from "next/image";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import { useTranslations } from 'next-intl';

interface ProductCardProps {
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    stock?: number;
}

export function ProductCard({
    title,
    price,
    originalPrice,
    rating,
    reviews,
    image,
    stock = 5,
}: ProductCardProps) {
    const { addItem } = useCart();
    const t = useTranslations('ProductCard');
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    const handleAddToCart = () => {
        addItem({
            id: Math.floor(Math.random() * 10000), // Using random ID for mock products
            title,
            price,
            image,
        });
    };

    return (
        <Card className="overflow-hidden group relative bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/30">
            <CardHeader className="p-0 relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                {discount > 0 && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold px-3 py-1 text-xs shadow-lg">
                        -{discount}% OFF
                    </Badge>
                )}
                {stock < 10 && (
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200/50 font-medium shadow-sm">
                        🔥 Restam {stock}
                    </Badge>
                )}
                <Badge variant="outline" className="absolute bottom-3 right-3 bg-black/50 text-white border-white/20 backdrop-blur-md text-[10px] font-medium px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✈️ Compra Internacional
                </Badge>

                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button size="sm" variant="secondary" className="flex-1 backdrop-blur-sm bg-white/90 hover:bg-white text-foreground font-medium shadow-lg">
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Detalhes
                    </Button>
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90 hover:bg-white text-foreground shadow-lg">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">({reviews})</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {title}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl font-bold text-foreground">
                        {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}
                    </span>
                    {originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(originalPrice)}
                        </span>
                    )}
                </div>
                <p className="text-sm text-primary font-medium mt-2">
                    ou 12x de {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price / 12)} sem juros
                </p>
            </CardContent>

            <CardFooter className="p-5 pt-0">
                <Button
                    onClick={handleAddToCart}
                    className="w-full font-semibold h-12 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
                >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {t('addToCart')}
                </Button>
            </CardFooter>
        </Card>
    );
}
