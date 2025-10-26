import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white relative z-10">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">IMPERIAL</span>
                <span className="text-xs text-background/70">Tax & Accounting</span>
              </div>
            </div>
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
