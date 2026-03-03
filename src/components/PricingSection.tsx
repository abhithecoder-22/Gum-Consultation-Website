import { Check, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Basic",
    price: 25,
    features: ["Unlimited access to the gym", "1 free group class per month", "Free access to relaxation areas"],
    featured: false,
  },
  {
    name: "Standard",
    price: 35,
    features: ["Unlimited access to the gym", "3 free group classes per month", "Free access to relaxation areas and sauna"],
    featured: true,
  },
  {
    name: "Premium",
    price: 45,
    features: ["Unlimited access to the gym", "Unlimited group classes", "2 personal training sessions per month", "Free access to relaxation areas, sauna, and pool"],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container  px-4">
        <ScrollReveal>
          <p className="section-label text-center">Subscription</p>
          <h2 className="font-display text-4xl md:text-6xl text-center mb-4">
            FLEXIBLE <span className="gradient-text">PLANS</span> FOR EVERY GOAL
          </h2>
          <p className="text-muted-foreground text-center max-w-xl  mb-12">
            Choose the plan that fits your lifestyle and fitness goals.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl ">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div
                className={`glass-card p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured ? "border-primary/50 relative" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Popular
                  </div>
                )}
                <h3 className="font-display text-3xl mb-1">{plan.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-5xl">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all glow-button ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
