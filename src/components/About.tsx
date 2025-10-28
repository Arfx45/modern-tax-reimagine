import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const features = [
  "Over 10 years of professional experience",
  "CPA certified tax professionals",
  "Personalized service tailored to your needs",
  "Year-round support and consultation",
];

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              About Imperial Tax
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Your Trusted Partner in{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Financial Success
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Imperial Tax & Accounting Services is a professional accounting firm dedicated to providing 
              exceptional service to individuals and businesses across Canada. With constant changes in 
              accounting practices and tax regulations, our experienced team stays ahead to deliver the 
              best solutions for your financial needs.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-8 rounded-2xl glass-effect shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine expertise with personalized service to deliver exceptional results. 
                Our commitment to excellence and client satisfaction sets us apart.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-card hover:shadow-md transition-smooth"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto mb-3 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention Rate</div>
              </div>
              <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="text-3xl font-bold text-secondary mb-2">$2.5M+</div>
                <div className="text-sm text-muted-foreground">Client Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
