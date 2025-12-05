import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: '%s | Loja Premium',
    default: 'Loja Premium | As Melhores Ofertas Internacionais',
  },
  description: "Sua loja de produtos importados favoritos. Trazemos as maiores tendências do mundo diretamente para sua casa com segurança e garantia.",
  keywords: ["dropshipping", "compras online", "produtos importados", "ofertas", "gadgets"],
  openGraph: {
    title: "Loja Premium | As Melhores Ofertas Internacionais",
    description: "Encontre produtos exclusivos e inovadores que são tendência no exterior.",
    url: "https://sua-loja.com", // TODO: Substituir pela URL real
    siteName: "Loja Premium",
    images: [
      {
        url: 'https://sua-loja.com/og-image.png', // TODO: Substituir por uma imagem de Open Graph
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR', // Será dinâmico com base no locale
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Loja Premium | As Melhores Ofertas Internacionais",
    description: "Encontre produtos exclusivos e inovadores que são tendência no exterior.",
    images: ['https://sua-loja.com/og-image.png'], // TODO: Substituir por uma imagem de Twitter Card
  },
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest', // TODO: Criar um arquivo de manifesto
};


import { CartProvider } from "@/context/cart-context";
import { Toaster } from "sonner";
import { SalesPopup } from "@/components/SalesPopup";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  // Atualiza o locale do OpenGraph dinamicamente
  if (metadata.openGraph) {
    metadata.openGraph.locale = locale === 'en' ? 'en_US' : 'pt_BR';
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <SalesPopup />
            <Toaster position="top-center" richColors />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
