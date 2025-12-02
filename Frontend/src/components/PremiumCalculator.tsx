import { useState } from "react";
import { Calculator as CalcIcon, IndianRupee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PremiumCalculator = () => {
  const [age, setAge] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [term, setTerm] = useState("");
  const [planType, setPlanType] = useState("");
  const [premium, setPremium] = useState<number | null>(null);

  const calculatePremium = () => {
    if (!age || !sumAssured || !term || !planType) return;

    const ageNum = parseInt(age);
    const sumNum = parseInt(sumAssured);
    const termNum = parseInt(term);

    // Simple premium calculation formula (for demonstration)
    let basePremium = (sumNum / 1000) * termNum * 0.5;
    
    // Age factor
    if (ageNum > 40) basePremium *= 1.3;
    else if (ageNum > 30) basePremium *= 1.15;
    
    // Plan type factor
    if (planType === "endowment") basePremium *= 1.4;
    else if (planType === "moneyback") basePremium *= 1.3;
    else if (planType === "term") basePremium *= 0.7;

    setPremium(Math.round(basePremium / termNum));
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
            <CalcIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Premium <span className="text-primary">Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant estimate of your insurance premium. This is an indicative calculator
            for basic understanding.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-elegant bg-card border-border">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="age" className="text-foreground">Your Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-2 bg-background"
                  min="18"
                  max="65"
                />
              </div>

              <div>
                <Label htmlFor="sum" className="text-foreground">Sum Assured (₹)</Label>
                <Input
                  id="sum"
                  type="number"
                  placeholder="e.g., 1000000"
                  value={sumAssured}
                  onChange={(e) => setSumAssured(e.target.value)}
                  className="mt-2 bg-background"
                  min="100000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="term" className="text-foreground">Policy Term (Years)</Label>
                <Input
                  id="term"
                  type="number"
                  placeholder="e.g., 20"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="mt-2 bg-background"
                  min="5"
                  max="40"
                />
              </div>

              <div>
                <Label htmlFor="plan" className="text-foreground">Plan Type</Label>
                <Select value={planType} onValueChange={setPlanType}>
                  <SelectTrigger className="mt-2 bg-background">
                    <SelectValue placeholder="Select plan type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="term">Term Insurance</SelectItem>
                    <SelectItem value="endowment">Endowment Plan</SelectItem>
                    <SelectItem value="moneyback">Money Back Plan</SelectItem>
                    <SelectItem value="ulip">ULIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={calculatePremium}
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
            >
              <CalcIcon className="w-5 h-5 mr-2" />
              Calculate Premium
            </Button>

            {premium !== null && (
              <div className="mt-8 p-6 bg-accent rounded-xl border-2 border-primary/20 animate-fade-in">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Estimated Annual Premium</p>
                  <div className="flex items-center justify-center gap-2">
                    <IndianRupee className="w-8 h-8 text-primary" />
                    <span className="text-4xl font-bold text-primary">
                      {premium.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * This is an indicative amount. Actual premium may vary based on medical
                    examination and other factors. Contact me for accurate quotation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want a detailed quotation tailored to your needs?
          </p>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Get Personalized Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumCalculator;
