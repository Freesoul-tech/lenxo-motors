import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Area 25, Mayani Street", "Lilongwe, Malawi"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+265 990 679 000", "+265 888 965 590"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 2:00 PM"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["lenxomotors0303@gmail.com"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              VISIT US OR
              <br />
              <span className="text-gradient">CALL TODAY</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have a question or need to schedule a repair? We're here to help. 
              Stop by our shop or give us a call – we'd love to hear from you.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-card">
            <h3 className="font-display text-2xl text-foreground mb-6">
              SEND US A MESSAGE
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Describe your issue or inquiry..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
