import { useEffect, useRef, useState } from "react";
import galleryImg from "@/assets/gallery-collection.jpg";
import bridalImg from "@/assets/bridal-wear.jpg";
import sareeImg from "@/assets/saree-design.jpg";
import kidsImg from "@/assets/kids-wear.jpg";
import partyImg from "@/assets/party-wear.jpg";
import machineImg from "@/assets/embroidery-machine.jpg";
import cuttingImg from "@/assets/blouse-cutting.jpg";

const galleryItems = [
  { img: machineImg, label: "Embroidery Machine at Work" },
  { img: cuttingImg, label: "Blouse Cutting Process" },
  { img: galleryImg, label: "Designer Blouses" },
  { img: sareeImg, label: "Embroidered Sarees" },
  { img: partyImg, label: "Party Wear Dresses" },
  { img: bridalImg, label: "Bridal Collections" },
  { img: kidsImg, label: "Kids Wear" },
];

const GallerySection = () => {
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
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="section-heading">Our Gallery</h2>
          <div className="gold-divider mb-4" />
          <p className="section-subheading">Explore our latest designs, machines, and creative work</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-xl hover-lift transition-all duration-700 ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 h-80" : "h-72"
              } ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 via-maroon-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <span className="font-display text-lg text-primary-foreground font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.label}
                </span>
              </div>
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
