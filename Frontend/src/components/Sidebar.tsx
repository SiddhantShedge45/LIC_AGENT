import { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  Phone,
  FileText,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "why-lic", label: "Why LIC", icon: FileText },
    { id: "calculator", label: "Premium Calculator", icon: Calculator },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      {!isDesktop && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed top-4 left-4 z-50 bg-primary text-primary-foreground p-2 rounded-lg shadow-elegant"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-card border-r border-border shadow-elegant z-40 transition-transform duration-300 w-72 ${
          isDesktop
            ? "translate-x-0"
            : isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Profile Header */}
          <div className="text-center mb-6 pb-4 border-b border-border">
            <div className="w-32 h-32 mx-auto mb-4  rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img
                src={profilePhoto}
                alt="Dnyandeo Tukaram Shedge"
                className="w-full h-full object-cover object-[50%_40%]"
              />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Dnyandeo Tukaram Shedge
            </h2>
            <p className="text-sm text-muted-foreground font-medium">
              LIC Agent
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Your Trusted Insurance Partner
            </p>
          </div>

          {/* Navigation - Scrollable Section */}
          <nav className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent hover:text-primary transition-all duration-300 group"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Contact */}
          <div className="pt-4 mt-4 border-t border-border space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9527626301</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {!isDesktop && isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
