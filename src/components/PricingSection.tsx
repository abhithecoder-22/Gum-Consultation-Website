import { Check, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    type: "Monthly Plans",
    name: "30-Day Fitness Plans",
    options: [
      { name: "General Fitness Plan", originalPrice: 1499, offerPrice: 999 },
      { name: "Postpartum Safe Plan", originalPrice: 1499, offerPrice: 999 },
      { name: "PCOS Fitness Plan", originalPrice: 1499, offerPrice: 999 },
    ],
    includes: ["Workout plan", "Exercise videos", "Basic diet guide"],
  },
  {
    type: "Quarterly Plans",
    name: "90-Day Fitness Plan",
    options: [
      { name: "General Fitness", price: 3999 },
      { name: "Specialized Programs", price: 4999 },
    ],
    includes: ["Structured progression", "Monthly updates", "Video library"],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container  px-4">
        <ScrollReveal>
          <p className="section-label text-center">Training Plans</p>
          <h2 className="font-display text-4xl md:text-6xl text-center mb-4">
            FLEXIBLE <span className="gradient-text">TRAINING PLANS</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Affordable & easy to start. No long-term commitment.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {plans.map((planType, i) => (
            <div key={planType.type} className="text-center">
              <h3 className="font-display text-2xl md:text-3xl mb-4">{planType.name}</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {planType.options.map((option, j) => (
                  <ScrollReveal key={option.name} delay={(i * 3 + j) * 0.15}>
                    <div className="glass-card p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2">
                      <h4 className="font-display text-xl mb-2">{option.name}</h4>
                      <div className="mb-4">
                        {'offerPrice' in option ? (
                          <>
                            <span className="font-display text-3xl line-through text-muted-foreground">₹{option.originalPrice}</span>
                            <span className="font-display text-4xl ml-2 text-primary">₹{option.offerPrice}</span>
                          </>
                        ) : (
                          <span className="font-display text-4xl">₹{option.price}</span>
                        )}
                      </div>
                      <ul className="space-y-2 flex-1 mb-6">
                        {planType.includes.map((include) => (
                          <li key={include} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary shrink-0" />
                            {include}
                          </li>
                        ))}
                      </ul>
                      <button className="glow-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
                        View Plans <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
