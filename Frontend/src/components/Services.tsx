import { Heart, Briefcase, PiggyBank, Home, GraduationCap, Umbrella } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Comprehensive life coverage to protect your family's future and financial security.",
    },
    {
      icon: PiggyBank,
      title: "Pension Plans",
      description: "Secure retirement planning with guaranteed income for your golden years.",
    },
    {
      icon: Briefcase,
      title: "Investment Plans",
      description: "Build wealth with market-linked insurance investment opportunities.",
    },
    {
      icon: Home,
      title: "Endowment Plans",
      description: "Savings and protection combined to meet your life goals and milestones.",
    },
    {
      icon: GraduationCap,
      title: "Child Plans",
      description: "Ensure your child's education and future with dedicated savings plans.",
    },
    {
      icon: Umbrella,
      title: "Health Insurance",
      description: "Medical coverage to safeguard against unexpected health expenses.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive LIC solutions designed to meet all your financial protection and
            investment needs at every stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Why Choose LIC?</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Life Insurance Corporation of India is the most trusted name in insurance, with over
              65 years of protecting Indian families. With the highest claim settlement ratio and
              government backing, your financial security is guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Government Backed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">High Claim Settlement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Trusted Since 1956</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
