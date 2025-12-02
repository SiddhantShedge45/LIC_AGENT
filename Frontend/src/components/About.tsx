import { Award, Users, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certified Expert",
      description: "Licensed LIC agent with proven track record",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized solutions for every individual",
    },
    {
      icon: Shield,
      title: "Trusted Advisor",
      description: "Your financial security is our priority",
    },
    {
      icon: TrendingUp,
      title: "Growth Partner",
      description: "Building wealth for your future",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Dnyandeo Tukaram Shedge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With years of experience in the insurance industry, I am committed to helping families
            and individuals secure their financial future through comprehensive LIC solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">My Commitment to You</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                As a dedicated LIC agent, I understand that every client has unique needs and goals.
                My mission is to provide you with insurance solutions that not only protect your loved
                ones but also help you build a secure financial future.
              </p>
              <p>
                I take pride in offering personalized service, taking the time to understand your
                specific requirements, and recommending policies that align with your financial
                objectives. Your trust is my greatest asset, and I am committed to being your
                reliable partner in financial planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
