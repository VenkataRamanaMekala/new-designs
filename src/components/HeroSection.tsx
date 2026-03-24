import heroImg from "@/assets/hero-embroidery.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Elegant embroidery design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon-deep/60 to-background/95" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-elegant text-gold-light text-lg md:text-xl tracking-[0.3em] uppercase mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Welcome to
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up opacity-0 leading-tight" style={{ animationDelay: "0.4s" }}>
          R.M Embroidery <span className="text-gold">Designs</span>
        </h1>
        <div className="gold-divider mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }} />
        <p className="font-elegant text-xl md:text-2xl text-primary-foreground/90 italic mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s" }}>
          "Elegant Embroidery & Perfect Stitching for Every Occasion."
        </p>
        <p className="font-body text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "1s" }}>
          Your one-stop destination for beautiful embroidery and expert stitching services. We create stylish, customized outfits for all occasions.
        </p>
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1.2s" }}>
          <a
            href="#services"
            className="inline-block bg-accent text-accent-foreground font-body font-bold px-8 py-3 rounded-full uppercase tracking-wider text-sm hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
