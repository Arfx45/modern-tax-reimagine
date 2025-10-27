import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import imperialLogo from "@/assets/imperial-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm border-b border-border/50">
          <a href="tel:+14165056518" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
            <Phone className="w-4 h-4" />
            +1 (416) 505-6518
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            14 Wolfe Avenue, Toronto
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between h-20">
          <img 
            src={imperialLogo} 
            alt="Imperial Tax & Accounting Services" 
            className="h-12 w-auto"
          />

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-smooth">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-smooth">
              Contact
            </a>
            <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a
              href="#services"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full gradient-primary text-primary-foreground">
              Get Started
            </Button>
            <div className="pt-4 border-t border-border/50 space-y-2">
              <a href="tel:+14165056518" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +1 (416) 505-6518
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                14 Wolfe Avenue, Toronto
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
 