import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-black text-gradient-purple-cyan">ZAIN</span>
            <span className="text-2xl font-black text-white">FOAM</span>
          </div>

          {/* Contact */}
          <div className="text-gray-400">
            <p className="font-semibold text-white mb-1">Contact Us</p>
            <a href="tel:7778057006" className="text-accent hover:text-accent/80 transition-colors">
              7778057006
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-32 mx-auto bg-gradient-purple-cyan" />

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025. Built with{' '}
            <Heart className="inline h-4 w-4 text-destructive fill-destructive" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
