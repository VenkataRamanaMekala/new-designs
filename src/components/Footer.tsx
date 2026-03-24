import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-deep py-10 px-4">
      <div className="container mx-auto text-center">
        <p className="font-display text-2xl font-bold text-primary-foreground mb-2">
          R.M <span className="text-gold">Embroidery Designs</span>
        </p>
        <p className="font-elegant text-primary-foreground/70 italic mb-6">
          Elegant Embroidery & Perfect Stitching for Every Occasion
        </p>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
        <p className="font-body text-sm text-primary-foreground/50 flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-gold" /> © 2024 R.M Embroidery Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
