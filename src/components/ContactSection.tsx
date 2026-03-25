import { useState } from "react";
import { Phone, MapPin, User, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast({
        title: "All fields are required",
        description: "Please fill in your name, phone number, and address.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "✅ Submitted Successfully!",
      description:
        "Your details have been submitted successfully. We will contact you soon!",
    });
    setForm({ name: "", phone: "", address: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Us</h2>
          <div className="gold-divider mb-4" />
          <p className="section-subheading">We would love to hear from you!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Send us a message
            </h3>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-1 block">
                Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-1 block">
                Phone Number *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-1 block">
                Address *
              </label>
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                placeholder="Enter your address"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-bold py-3 rounded-lg uppercase tracking-wider text-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <Send size={16} /> Submit
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="glass-card p-8 space-y-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Contact Details
              </h3>
              <div className="flex items-start gap-4">
                <User className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">
                    Owner
                  </p>
                  <p className="font-body font-bold text-foreground">
                    Lalitha M{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+918096317908"
                    className="font-body font-bold text-foreground hover:text-primary transition-colors"
                  >
                    +91 79934 31587
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">
                    Location
                  </p>
                  <p className="font-body font-bold text-foreground">
                    Krosur, Palnadu District – 522410
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="glass-card overflow-hidden">
              <iframe
                title="Lara Embroidery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30656.0!2d79.9!3d16.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a8c3f5d6e1b1d%3A0x0!2sKrosur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
