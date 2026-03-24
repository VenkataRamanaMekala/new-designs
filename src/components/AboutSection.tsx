import { useEffect, useRef, useState } from "react";
import machineImg from "@/assets/embroidery-machine.jpg";
import cuttingImg from "@/assets/blouse-cutting.jpg";

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images grid */}
          <div className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={machineImg} alt="Embroidery Machine" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl mt-8">
                <img src={cuttingImg} alt="Blouse Cutting" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-accent rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-primary/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h2 className="section-heading text-left">About Us</h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Lara Embroidery Designs</strong>, established in 2024, is dedicated to delivering elegant embroidery and professional stitching services.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Owned and managed by <strong className="text-foreground">Lalitha</strong>, we focus on creating customized designs that reflect beauty, tradition, and modern style.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              We use professional embroidery machines for intricate patterns and offer expert blouse cutting & stitching services for all types of dresses at affordable prices.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our goal is to provide high-quality craftsmanship and ensure customer satisfaction with every piece we create.
            </p>
            <div className="flex gap-8">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "1000+", label: "Designs Created" },
                { value: "2024", label: "Established" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150 + 600}ms` }}
                >
                  <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
