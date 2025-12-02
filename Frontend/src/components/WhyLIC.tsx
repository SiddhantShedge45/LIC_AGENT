import { Shield, TrendingUp, Users, Award, CheckCircle, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyLIC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Government Owned",
      description: "Backed by the Government of India, ensuring 100% security and trust.",
    },
    {
      icon: TrendingUp,
      title: "Best Returns",
      description: "Competitive bonus rates and guaranteed returns on maturity.",
    },
    {
      icon: Users,
      title: "35+ Crore Policyholders",
      description: "India's most trusted insurer serving millions of families.",
    },
    {
      icon: Award,
      title: "95%+ Claim Settlement",
      description: "Industry-leading claim settlement ratio for peace of mind.",
    },
    {
      icon: Building,
      title: "2000+ Branches",
      description: "Extensive network across India for easy access and service.",
    },
    {
      icon: CheckCircle,
      title: "65+ Years Legacy",
      description: "Established in 1956, protecting generations of Indians.",
    },
  ];

  return (
    <section id="why-lic" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">LIC?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Life Insurance Corporation of India - The most trusted name in insurance,
            protecting Indian families for over 6 decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">LIC - The Market Leader</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">₹40+ Lakh Cr</div>
                <p className="text-primary-foreground/90">Assets Under Management</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">250+</div>
                <p className="text-primary-foreground/90">Insurance Plans</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">13 Lakh+</div>
                <p className="text-primary-foreground/90">Agents Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLIC;
