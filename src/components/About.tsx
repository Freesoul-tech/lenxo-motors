import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Certified and experienced mechanics",
  "Modern diagnostic equipment",
  "Quality genuine parts",
  "Competitive pricing",
  "Fast turnaround time",
  "Customer satisfaction guaranteed",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
              <div className="text-center p-8">
                <div className="font-display text-8xl md:text-9xl text-primary mb-4">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
  <img
    src="src\assets\OIF.jpg"
    alt="Lenxo Motors - 25 Years of Excellence"
    className="w-full h-full object-cover rounded-2xl border border-primary/20"
  />
</div>

                </div>
                <div className="text-xl text-muted-foreground">
                  Years of Excellence and exllence in Auto Repairs
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="font-display text-3xl text-primary">Thousands +</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              LILONGWE'S TRUSTED
              <br />
              <span className="text-gradient">AUTO REPAIR</span> SHOP
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Located in the heart of Area 25 on Mayani Street, Lenxo Motors has been 
              serving the Lilongwe community with professional auto repair services. 
              Our team of skilled mechanics is committed to getting you back on the 
              road safely and efficiently.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe in honest work, fair pricing, and treating every customer's 
              vehicle as if it were our own. That's why thousands of drivers trust 
              us with their cars.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call Button */}
            <Button asChild variant="hero" size="xl">
              <a href="tel:+265990679000">Call Us Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
