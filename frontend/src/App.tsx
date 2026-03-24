import { Hero } from './components/Hero';
import { Product } from './components/Product';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoose } from './components/WhyChoose';
import { DealerForm } from './components/DealerForm';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Product />
      <HowItWorks />
      <WhyChoose />
      <DealerForm />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
