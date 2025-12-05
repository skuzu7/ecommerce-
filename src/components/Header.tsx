"use client";

import Link from "next/link";
import { Menu, Search, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartSheet } from "@/components/CartSheet";
import { useCart } from "@/context/cart-context";
import { useTranslations } from 'next-intl';

export function Header() {
    const { count } = useCart();
    const t = useTranslations('Header');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-18 items-center justify-between py-3">
                {/* Mobile Menu */}
                <div className="flex items-center md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2 hover:bg-primary/10">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                            <div className="flex items-center gap-2 mb-8 mt-4">
                                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-xl font-bold">Loja Premium</span>
                            </div>
                            <nav className="flex flex-col gap-4">
                                <Link href="/produtos" className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50">
                                    {t('products')}
                                </Link>
                                <Link href="/sobre" className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50">
                                    {t('about')}
                                </Link>
                                <Link href="/faq" className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50">
                                    {t('faq')}
                                </Link>
                                <Link href="/contato" className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50">
                                    {t('contact')}
                                </Link>
                            </nav>
                            <div className="mt-8">
                                <Button className="w-full" size="lg">
                                    <User className="mr-2 h-4 w-4" />
                                    Entrar / Cadastrar
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                        <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight hidden sm:block">
                        Loja <span className="gradient-text">Premium</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
                    <Link href="/produtos" className="relative py-2 transition-colors hover:text-primary group">
                        {t('products')}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/sobre" className="relative py-2 transition-colors hover:text-primary group">
                        {t('about')}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/faq" className="relative py-2 transition-colors hover:text-primary group">
                        {t('faq')}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/contato" className="relative py-2 transition-colors hover:text-primary group">
                        {t('contact')}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Search Bar */}
                    <div className="hidden md:flex relative items-center">
                        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Buscar produtos..."
                            className="w-[200px] lg:w-[280px] pl-9 h-10 rounded-full border-border/50 bg-muted/50 focus:bg-background transition-colors"
                        />
                    </div>

                    {/* Mobile Search */}
                    <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Buscar</span>
                    </Button>

                    {/* User Account */}
                    <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-primary/10">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Minha Conta</span>
                    </Button>

                    {/* Cart */}
                    <CartSheet />
                </div>
            </div>
        </header>
    );
}
