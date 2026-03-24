import { Button } from '@/components/ui/button';
import { Phone, Users } from 'lucide-react';

export function Hero() {
  const scrollToDealer = () => {
    const dealerSection = document.getElementById('dealer-section');
    dealerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:7778057006';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.jpg"
          alt="Car wash background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="text-gradient-purple-cyan">ZAIN</span>
              <span className="text-white"> FOAM</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-purple-cyan rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Extra Foam. Extra Shine.
            <br />
            <span className="text-gradient-purple-cyan">Professional Car Wash at Home.</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Premium snow foam shampoo with 24-hour dust resistant protection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={handleCall}
              className="bg-gradient-purple-cyan hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now – 7778057006
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToDealer}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Dealer
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-accent rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
