import { Wrench, Car, Battery, Cog, Thermometer, CircleGauge } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Complete mechanical repairs for all vehicle makes and models. From minor fixes to major overhauls.",
  },
  {
    icon: Car,
    title: "Body Work",
    description: "Professional panel beating, spray painting, and dent removal to restore your vehicle's appearance.",
  },
  {
    icon: Battery,
    title: "Electrical Systems",
    description: "Diagnosis and repair of all electrical issues including starters, alternators, and wiring.",
  },
  {
    icon: Cog,
    title: "Engine Service",
    description: "Complete engine diagnostics, tune-ups, and rebuilds to keep your vehicle running smoothly.",
  },
  {
    icon: Thermometer,
    title: "AC & Cooling",
    description: "Air conditioning service, radiator repairs, and complete cooling system maintenance.",
  },
  {
    icon: CircleGauge,
    title: "Brake Service",
    description: "Brake pad replacement, disc resurfacing, and complete brake system overhauls for your safety.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to complex repairs, we have the expertise 
            and equipment to handle all your automotive needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
