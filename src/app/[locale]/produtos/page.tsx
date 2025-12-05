import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Grid3X3, LayoutGrid, ChevronDown } from "lucide-react";

const products = [
    {
        id: 1,
        title: "Fone de Ouvido Bluetooth Pro",
        price: 129.90,
        originalPrice: 199.90,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        stock: 3,
        category: "Eletrônicos",
    },
    {
        id: 2,
        title: "Smartwatch Series 8 Ultra",
        price: 299.90,
        originalPrice: 499.90,
        rating: 4.9,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        stock: 8,
        category: "Relógios",
    },
    {
        id: 3,
        title: "Garrafa Térmica Inteligente",
        price: 59.90,
        originalPrice: 89.90,
        rating: 4.7,
        reviews: 215,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
        stock: 12,
        category: "Casa",
    },
    {
        id: 4,
        title: "Mochila Antifurto Impermeável",
        price: 99.90,
        originalPrice: 159.90,
        rating: 4.6,
        reviews: 56,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        stock: 4,
        category: "Moda",
    },
    {
        id: 5,
        title: "Câmera de Segurança Wi-Fi 360°",
        price: 189.90,
        originalPrice: 289.90,
        rating: 4.7,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&q=80",
        stock: 15,
        category: "Eletrônicos",
    },
    {
        id: 6,
        title: "Caixa de Som Bluetooth Portátil",
        price: 149.90,
        originalPrice: 249.90,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
        stock: 7,
        category: "Eletrônicos",
    },
    {
        id: 7,
        title: "Luminária LED de Mesa Touch",
        price: 79.90,
        originalPrice: 129.90,
        rating: 4.5,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
        stock: 20,
        category: "Casa",
    },
    {
        id: 8,
        title: "Carregador Wireless Magnético",
        price: 89.90,
        originalPrice: 149.90,
        rating: 4.6,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=500&q=80",
        stock: 25,
        category: "Eletrônicos",
    },
];

export default function ProdutosPage() {
    return (
        <div className="container py-8 md:py-12">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                    Nossos Produtos
                </h1>
                <p className="text-muted-foreground text-lg">
                    Encontre products de alta qualidade com os melhores preços do mercado
                </p>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Buscar produtos..."
                        className="pl-10 h-11 rounded-lg"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="h-11 gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filtros
                    </Button>
                    <Button variant="outline" className="h-11 gap-2">
                        Ordenar
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Products Count */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                    Exibindo <span className="font-medium text-foreground">{products.length}</span> produtos
                </p>
                <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        rating={product.rating}
                        reviews={product.reviews}
                        image={product.image}
                        stock={product.stock}
                    />
                ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="px-12 rounded-full">
                    Carregar mais produtos
                </Button>
            </div>
        </div>
    );
}
