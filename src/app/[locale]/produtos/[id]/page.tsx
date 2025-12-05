import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, ShieldCheck, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Metadata, ResolvingMetadata } from 'next';
import { products as allProducts } from "@/data/products"; // Importando todos os produtos

type Props = {
    params: Promise<{ id: string }>
}

// Mock function to fetch a single product
async function getProduct(id: string) {
    // Em um app real, você faria um fetch para sua API:
    // const res = await fetch(`https://.../products/${id}`)
    // return res.json()
    const product = allProducts.find(p => p.id.toString() === id);
    // Para este exemplo, vamos adicionar mais detalhes ao produto encontrado
    if (product) {
        return {
            ...product,
            description: `Experimente a liberdade do som sem fio com ${product.title}. Qualidade de estúdio, cancelamento de ruído e design ergonômico.`,
            features: [
                "Cancelamento Ativo de Ruído (ANC)",
                "Bateria de longa duração",
                "Resistência à água",
                "Conexão Multiponto",
            ],
            images: [
                product.image,
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
            ],
        }
    }
    return null;
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return {
            title: "Produto não encontrado",
        }
    }

    return {
        title: `${product.title} | Loja Premium`,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.title,
                },
            ],
        },
    }
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return <div className="container py-10 text-center">Produto não encontrado.</div>;
    }

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="container py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {/* Gallery */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-lg px-3 py-1">
                            -{discount}% OFF
                        </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {product.images.map((img, i) => (
                            <div key={i} className="relative aspect-square overflow-hidden rounded-lg border bg-muted cursor-pointer hover:ring-2 ring-primary transition-all">
                                <Image
                                    src={img}
                                    alt={`View ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                            {product.title}
                        </h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                                <span className="ml-2 font-medium">{product.rating}</span>
                                <span className="text-muted-foreground ml-1">({product.reviews} avaliações)</span>
                            </div>
                            <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                                <ShieldCheck className="h-4 w-4" /> Compra Verificada
                            </div>
                        </div>

                        <div className="flex items-baseline gap-3 mb-2">
                            <span className="text-4xl font-bold text-primary">
                                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price)}
                            </span>
                            <span className="text-xl text-muted-foreground line-through">
                                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.originalPrice)}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            Em até 12x de {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price / 12)} sem juros
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                            {product.description}
                        </p>

                        <ul className="space-y-2 mb-8">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Separator className="mb-8" />

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded-md">
                                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-none">
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <div className="w-12 text-center font-medium text-lg">1</div>
                                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-none">
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                            <Button size="lg" className="flex-1 h-12 text-lg font-semibold">
                                Adicionar ao Carrinho
                            </Button>
                            <Button variant="outline" size="icon" className="h-12 w-12">
                                <Heart className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-3 p-4 border rounded-lg bg-muted/20">
                                <Truck className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">Frete Grátis</p>
                                    <p className="text-muted-foreground">Para todo o Brasil</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 border rounded-lg bg-muted/20">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">Garantia de 30 dias</p>
                                    <p className="text-muted-foreground">Devolução grátis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
