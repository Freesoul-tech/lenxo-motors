import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mechanic.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional auto repair mechanic at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Area 25, Mayani Street, Lilongwe
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            EXPERT AUTO
            <br />
            <span className="text-gradient">REPAIR</span> YOU
            <br />
            CAN TRUST
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional vehicle repairs and maintenance services in Lilongwe. 
            Quality workmanship, fair prices, and honest service since day one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            <Button variant="heroOutline" size="xl">
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Cars Repaired</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
