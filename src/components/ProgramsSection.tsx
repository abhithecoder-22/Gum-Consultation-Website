import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

interface ProgramsSectionProps {
  onBookConsultation: () => void;
}

const programs = [
  {
    title: "Restore & Rebuild – Postpartum Recovery",
    description: "Core healing focused program for postpartum recovery with nutrition guidance and mindfulness sessions.",
    features: [
      "Core healing (DR focused)",
      "Nutrition guidance",
      "Mindfulness sessions",
      "Weekly coaching"
    ],
    groupPrice: "₹9,999",
    personalPrice: "₹24,999"
  },
  {
    title: "Hormone Reset Blueprint (PCOS/PCOD)",
    description: "Hormonal balance program combining fat loss, strength training, and stress management.",
    features: [
      "Hormonal balance",
      "Fat loss + strength",
      "Stress management",
      "Personalized nutrition"
    ],
    groupPrice: "₹8,999",
    personalPrice: "₹22,000"
  },
  {
    title: "StrongHer 40+ (Menopause Program)",
    description: "Strength training and wellness program for menopausal women focusing on bone health and vitality.",
    features: [
      "Strength training",
      "Bone & joint health",
      "Lifestyle coaching",
      "Energy optimization"
    ],
    groupPrice: "₹9,999",
    personalPrice: "₹25,000"
  },
  {
    title: "FitLife Transformation System",
    description: "Comprehensive fat loss and muscle gain program with habit coaching and nutrition planning.",
    features: [
      "Fat loss + muscle gain",
      "Habit coaching",
      "Nutrition plan",
      "Progress tracking"
    ],
    groupPrice: "₹7,999",
    personalPrice: "₹18,000"
  }
];

const ProgramsSection = ({ onBookConsultation }: ProgramsSectionProps) => {
  return (
    <section id="programs" className="py-32">
      <div className="container px-4">
        <ScrollReveal>
          <p className="section-label">Programs</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6">
            TRANSFORMATION <span className="gradient-text">PROGRAMS (12 WEEKS)</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Specialized 12-week programs designed for women's health and fitness at every stage of life.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} delay={index * 0.1}>
              <div className="glass-card p-6 h-full flex flex-col">
                <h3 className="font-display text-2xl mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Group:</span>
                    <span className="font-semibold">{program.groupPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1-on-1:</span>
                    <span className="font-semibold">{program.personalPrice}</span>
                  </div>
                </div>
                <button
                  onClick={onBookConsultation}
                  className="glow-button w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
                >
                  Join Now
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;