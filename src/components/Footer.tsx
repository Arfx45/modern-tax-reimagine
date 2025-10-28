import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import imperialLogo from "@/assets/imperial-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <img 
              src={imperialLogo} 
              alt="Imperial Tax & Accounting Services" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-background/70 mb-4">
              Professional tax and accounting services you can trust. 
              Helping individuals and businesses achieve financial success since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#services" className="hover:text-background transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li>Personal Tax</li>
              <li>Corporate Tax</li>
              <li>Bookkeeping</li>
              <li>Tax Planning</li>
              <li>Audit Support</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/60 text-sm">
          <p>© {currentYear} Imperial Tax & Accounting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
