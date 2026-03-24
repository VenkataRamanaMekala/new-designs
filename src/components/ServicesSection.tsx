import { useEffect, useRef, useState } from "react";
import { Scissors, Palette, Crown, PartyPopper, Heart, Baby } from "lucide-react";

const services = [
  { icon: Palette, title: "Embroidery Designs", desc: "Intricate patterns crafted with precision and creativity using our big embroidery machine." },
  { icon: Scissors, title: "Blouse Stitching", desc: "Perfect fit and stylish blouse stitching for every occasion." },
  { icon: Crown, title: "Saree Designing", desc: "Elegant saree designs that blend tradition with modern style." },
  { icon: PartyPopper, title: "Party Wear Dresses", desc: "Stunning party wear that makes you stand out at every event." },
  { icon: Heart, title: "Bridal & Wedding Wear", desc: "Dream bridal outfits crafted with love and perfection." },
  { icon: Baby, title: "Kids Wear Stitching", desc: "Adorable and comfortable outfits for your little ones." },
];

const ServicesSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 px-4 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 border-2 border-accent/10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-60 h-60 border-2 border-primary/5 rounded-full" />
      
      <div className="container mx-auto text-center relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="section-heading">Our Services</h2>
          <div className="gold-divider mb-4" />
          <p className="section-subheading">High-quality design and stitching services for every occasion</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card p-8 hover-lift group cursor-default transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-500">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
