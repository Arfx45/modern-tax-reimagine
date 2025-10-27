import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Animated shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Over 10 Years of Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Smart Tax Solutions for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Financial Future
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert tax and accounting services designed to maximize your savings and minimize stress. 
              Professional guidance you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-muted transition-smooth">
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">CPA Certified</div>
                  <div className="text-sm text-muted-foreground">Professional Team</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">1000+ Clients</div>
                  <div className="text-sm text-muted-foreground">Trusted Nationwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="relative lg:ml-12 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-8 rounded-2xl glass-effect shadow-elegant hover:shadow-lg transition-smooth">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  $2.5M+
                </div>
                <div className="text-muted-foreground">Saved for clients annually</div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card shadow-elegant hover:shadow-lg transition-smooth hover:-translate-y-1">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card shadow-elegant hover:shadow-lg transition-smooth hover:-translate-y-1">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 