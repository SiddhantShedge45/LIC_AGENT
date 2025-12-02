import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dnyandeo Tukaram Shedge</h3>
            <p className="text-primary-foreground/80 mb-2">Licensed LIC Agent</p>
            <p className="text-sm text-primary-foreground/70">
              Your trusted partner in financial planning and insurance solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:dnyandeo.shedge@lic.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>dnyandeo.shedge@lic.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Important Links</h4>
            <div className="space-y-2">
              <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                LIC Official Website
              </a>
              <a href="https://licindia.in/customer-portal" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Customer Portal
              </a>
              <a href="https://licindia.in/branch-locator" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Branch Locator
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Dnyandeo Tukaram Shedge - LIC Agent. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Protecting families, Building futures | Licensed by LIC India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
