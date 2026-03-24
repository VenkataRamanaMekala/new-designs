import { useEffect, useRef, useState } from "react";
import { Tag, Sparkles } from "lucide-react";
import dressCollectionImg from "@/assets/dress-collection.jpg";
import lehengaImg from "@/assets/lehenga-design.jpg";
import anarkaliImg from "@/assets/anarkali-suit.jpg";
import salwarImg from "@/assets/salwar-kameez.jpg";
import bridalImg from "@/assets/bridal-wear.jpg";
import partyImg from "@/assets/party-wear.jpg";

const dresses = [
  { img: dressCollectionImg, name: "Designer Dress Collection", price: "₹1,499", original: "₹2,999", tag: "50% OFF" },
  { img: lehengaImg, name: "Bridal Lehenga Choli", price: "₹2,999", original: "₹5,999", tag: "Best Seller" },
  { img: anarkaliImg, name: "Anarkali Suit", price: "₹1,299", original: "₹2,499", tag: "Trending" },
  { img: salwarImg, name: "Salwar Kameez Set", price: "₹999", original: "₹1,999", tag: "Low Price" },
  { img: bridalImg, name: "Wedding Bridal Wear", price: "₹3,499", original: "₹6,999", tag: "Premium" },
  { img: partyImg, name: "Party Wear Dress", price: "₹1,199", original: "₹2,399", tag: "Hot Deal" },
];

const DressesSection = () => {
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
    <section id="dresses" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto text-center relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-body text-sm font-semibold mb-4">
            <Sparkles size={16} /> All Dresses at Low Prices
          </div>
          <h2 className="section-heading">Our Dress Collection</h2>
          <div className="gold-divider mb-4" />
          <p className="section-subheading">
            Beautiful dresses & blouse stitching at affordable prices for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {dresses.map((dress, i) => (
            <div
              key={dress.name}
              className={`group glass-card overflow-hidden hover-lift transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dress.img}
                  alt={dress.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-body font-bold flex items-center gap-1">
                  <Tag size={12} /> {dress.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5 text-left">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{dress.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-primary">{dress.price}</span>
                  <span className="font-body text-sm text-muted-foreground line-through">{dress.original}</span>
                </div>
                <p className="font-body text-xs text-accent mt-2 font-semibold">✨ Custom stitching available</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressesSection;
