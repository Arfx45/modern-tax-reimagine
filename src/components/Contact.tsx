import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Discuss Your Tax Needs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your taxes? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-xl glass-effect hover:shadow-md transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+14165056518" className="text-muted-foreground hover:text-primary transition-smooth">
                    +1 (416) 505-6518
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl glass-effect hover:shadow-md transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:swapon@imperialtax.ca" className="text-muted-foreground hover:text-secondary transition-smooth">
                    swapon@imperialtax.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl glass-effect hover:shadow-md transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    14 Wolfe Avenue<br />
                    Toronto, ON M1K 3L9
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl glass-effect hover:shadow-md transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-6 p-8 rounded-2xl glass-effect shadow-elegant">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (416) 555-0123"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your tax needs..."
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
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
 