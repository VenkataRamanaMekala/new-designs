import { useEffect, useRef, useState } from "react";
import { Play, Scissors, Eye, Video } from "lucide-react";
import machineImg from "@/assets/embroidery-machine.jpg";
import cuttingImg from "@/assets/blouse-cutting.jpg";
import dressImg from "@/assets/dress-collection.jpg";

const videos = [
  { icon: Video, title: "Embroidery Machine Process", desc: "Watch our big embroidery machine create stunning patterns with precision", img: machineImg },
  { icon: Scissors, title: "Blouse Cutting Tutorials", desc: "Learn expert blouse cutting techniques step by step", img: cuttingImg },
  { icon: Play, title: "Stitching Process Videos", desc: "See the complete stitching journey from fabric to finished outfit", img: dressImg },
  { icon: Eye, title: "Final Outfit Showcase", desc: "Beautiful outfits showcased after wearing – see the final result", img: dressImg },
];

const VideosSection = () => {
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
    <section id="videos" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto text-center" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="section-heading">Videos</h2>
          <div className="gold-divider mb-4" />
          <p className="section-subheading">Watch our work in action – quality, precision, and finishing</p>
        </div>

        {/* Featured video - Embroidery Machine */}
        <div className={`mt-12 mb-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "200ms" }}>
          <div className="relative group rounded-2xl overflow-hidden max-w-4xl mx-auto hover-lift">
            <img src={machineImg} alt="Embroidery Machine" className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-maroon-deep/50 flex items-center justify-center group-hover:bg-maroon-deep/40 transition-colors duration-500">
              <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-maroon-deep/90 to-transparent">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground text-left">
                Our Big Embroidery Machine in Action
              </h3>
              <p className="font-body text-primary-foreground/70 text-sm text-left mt-1">
                Watch the precision and artistry behind every stitch
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, i) => (
            <div
              key={v.title}
              className={`glass-card overflow-hidden hover-lift group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120 + 400}ms` }}
            >
              <div className="relative overflow-hidden h-40">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-maroon-deep/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-accent-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="font-body text-muted-foreground text-xs">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
