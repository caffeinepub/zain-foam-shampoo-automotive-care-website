import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Droplet,
    title: 'Mix Shampoo with Water',
    description: 'Dilute the foam shampoo with water according to the recommended ratio for optimal results.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Apply Foam',
    description: 'Apply the rich foam using a sponge or foam cannon for complete coverage and deep cleaning.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Rinse & Enjoy Shine',
    description: 'Rinse thoroughly with clean water and admire the brilliant shine and protection.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/assets/generated/car-foam-wash.dim_800x600.jpg"
          alt="Car foam wash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            How It <span className="text-gradient-purple-cyan">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps to achieve professional-grade results at home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden group"
            >
              {/* Step Number Background */}
              <div className="absolute top-0 right-0 text-9xl font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
                {step.number}
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-purple-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">STEP {step.number}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
