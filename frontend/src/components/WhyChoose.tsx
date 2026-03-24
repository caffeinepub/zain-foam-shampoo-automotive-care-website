import { Badge } from '@/components/ui/badge';
import { Award, Zap, Shield, Star } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Professional Grade',
    description: 'Formulated with premium ingredients used by professional detailers',
  },
  {
    icon: Zap,
    title: 'Fast Acting',
    description: 'Powerful cleaning action that works in minutes',
  },
  {
    icon: Shield,
    title: 'Long-Lasting Protection',
    description: '24-hour dust resistant coating keeps your vehicle cleaner longer',
  },
  {
    icon: Star,
    title: 'Premium Results',
    description: 'Showroom-quality shine with every wash',
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 text-sm px-4 py-1">
            WHY CHOOSE US
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Why Choose <span className="text-gradient-purple-cyan">Zain</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
            Professional grade formula for premium automotive detailing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-purple-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
