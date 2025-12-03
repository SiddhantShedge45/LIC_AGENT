import { Download, ExternalLink, FileText, Calculator, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuickLinks = () => {
  const links = [
    {
      title: "Download Proposal Form",
      description: "Get the LIC proposal form to start your policy",
      icon: Download,
      action: "Download PDF",
      file: "/FORM NO 300.pdf",   // correct public path
    },
    {
      title: "Policy Status Check",
      description: "Check your existing policy status online",
      icon: FileText,
      action: "Check Status",
    },
    {
      title: "Premium Calculator",
      description: "Calculate your insurance premium instantly",
      icon: Calculator,
      action: "Calculate",
    },
    {
      title: "Emergency Contact",
      description: "Reach us for urgent policy matters",
      icon: Phone,
      action: "Call Now",
    },
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Quick Links</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer group bg-card"
            >
              <link.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2 text-foreground">{link.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{link.description}</p>

              {/* ⬇️ ADD DOWNLOAD ONLY FOR FIRST LINK */}
              {link.file ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = link.file;
                    a.download = link.file.split("/").pop();
                    a.click();
                  }}
                >
                  {link.action}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  {link.action}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
