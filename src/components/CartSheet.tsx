"use client";

import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

export function CartSheet() {
    const { items, removeItem, updateQuantity, total, count } = useCart();
    const freeShippingThreshold = 200;
    const progressValue = (total / freeShippingThreshold) * 100;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
                    <ShoppingCart className="h-5 w-5" />
                    {count > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px] animate-in zoom-in">
                            {count}
                        </Badge>
                    )}
                    <span className="sr-only">Carrinho</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-lg p-0">
                <SheetHeader className="p-6">
                    <SheetTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <ShoppingBag className="h-6 w-6" />
                            Seu Carrinho
                        </div>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-5 w-5 text-muted-foreground" />
                            </Button>
                        </SheetClose>
                    </SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6 animate-pulse">
                            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Seu carrinho está vazio</h3>
                        <p className="text-muted-foreground mb-6 max-w-xs">
                            Parece que você ainda não adicionou nenhum produto. Explore nossas ofertas!
                        </p>
                        <SheetClose asChild>
                            <Button className="w-full h-11 rounded-full font-semibold">
                                Começar a Comprar
                            </Button>
                        </SheetClose>
                    </div>
                ) : (
                    <>
                        {/* Free Shipping Progress */}
                        <div className="px-6 pb-4 border-b">
                            {total < freeShippingThreshold ? (
                                <>
                                    <p className="text-sm text-center mb-2">
                                        Faltam <strong>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(freeShippingThreshold - total)}</strong> para <span className="text-primary font-semibold">Frete Grátis!</span>
                                    </p>
                                    <Progress value={progressValue} className="h-2" />
                                </>
                            ) : (
                                <p className="text-sm text-center font-semibold text-primary animate-bounce">
                                    🎉 Parabéns! Você ganhou Frete Grátis!
                                </p>
                            )}
                        </div>
                        
                        <ScrollArea className="flex-1">
                            <div className="space-y-6 p-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 animate-in slide-in-from-right-4 duration-300 items-start">
                                        <div className="relative h-24 w-24 rounded-lg overflow-hidden border shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-base line-clamp-2 mb-2">{item.title}</h4>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-full"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <span className="text-base w-6 text-center font-bold">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-full"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>

                                                <p className="text-base font-bold text-foreground">
                                                    {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price * item.quantity)}
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-50"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <SheetFooter className="flex-col sm:flex-col gap-4 border-t p-6 bg-muted/50">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-base">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total)}</span>
                                </div>
                                <div className="flex items-center justify-between text-base">
                                    <span className="text-muted-foreground">Frete</span>
                                    <span className="text-green-600 font-semibold">Grátis</span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex items-center justify-between font-bold text-xl">
                                    <span>Total</span>
                                    <span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total)}</span>
                                </div>
                            </div>
                            <Button className="w-full h-12 text-lg font-semibold shadow-lg shadow-primary/20 rounded-full" size="lg">
                                Finalizar Compra
                            </Button>
                        </SheetFooter>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
