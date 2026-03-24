import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Sparkles, Shield, Droplets, Palette, Car } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    text: 'Extra Snow Foaming Formula',
  },
  {
    icon: Shield,
    text: '24 Hours Dust Resistant Protection',
  },
  {
    icon: Droplets,
    text: 'pH Neutral & Paint Safe',
  },
  {
    icon: Palette,
    text: 'Safe for Glossy & Matte Paint',
  },
  {
    icon: Car,
    text: 'Suitable for Cars, Bikes & SUVs',
  },
];

const productImages = [
  {
    src: '/assets/WhatsApp Image 2025-12-30 at 10.11.21 PM.jpeg',
    alt: 'Zain Foam Shampoo - Front View',
  },
  {
    src: '/assets/WhatsApp Image 2025-12-30 at 10.11.21 PM-1.jpeg',
    alt: 'Zain Foam Shampoo - Product Details',
  },
];

export function Product() {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
            PREMIUM PRODUCT
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Zain <span className="text-gradient-purple-cyan">Foam Shampoo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional-grade automotive care for the ultimate shine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Images - Desktop: Side by Side, Mobile: Carousel */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-purple-cyan rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Desktop View - Side by Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl transform hover:scale-105 transition-transform duration-500"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Mobile View - Carousel */}
            <div className="md:hidden relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  {productImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-cover drop-shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-purple-cyan flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
