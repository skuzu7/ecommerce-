import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Quote, Headphones, Watch, Shirt, Home as HomeIcon, Gamepad2, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { products, categories, testimonials } from "@/data/products";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

const iconMap = {
  Headphones,
  Watch,
  Shirt,
  HomeIcon,
  Gamepad2,
  Camera,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Explore por Categoria</h2>
          <p className="text-muted-foreground text-lg">Encontre exatamente o que você procura</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Headphones;
            return (
              <button
                key={category.name}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-14 w-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-base mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} produtos</p>
              </button>
            )
          })}
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Mais Vendidos</h2>
              <p className="text-muted-foreground">Os produtos favoritos dos nossos clientes</p>
            </div>
            <Button variant="outline" className="hidden sm:flex rounded-full px-6 hover:bg-primary hover:text-white transition-all">
              Ver Todos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="mt-10 text-center sm:hidden">
            <Button variant="outline" className="w-full rounded-full">
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">O Que Nossos Clientes Dizem</h2>
          <p className="text-muted-foreground text-lg">Mais de 50.000 clientes satisfeitos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container">
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-10 md:p-16 text-center text-primary-foreground overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6">
              ✨ Oferta Exclusiva
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ganhe 10% OFF na sua primeira compra
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Cadastre-se na nossa newsletter e receba ofertas exclusivas diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white/95 text-foreground h-14 rounded-full px-6 border-0 text-base"
              />
              <Button size="lg" variant="secondary" className="h-14 px-8 rounded-full font-semibold text-base shadow-lg hover:scale-105 transition-transform">
                Cadastrar <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-4">
              Não enviamos spam. Cancele a qualquer momento.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)]" />
        </div>
      </section>
    </div>
  );
}

