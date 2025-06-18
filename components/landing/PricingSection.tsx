import { PricingCard } from "../shared/PricingCard"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: "$0",
      interval: "/month",
      features: [
        "5 practice sessions",
        "Basic feedback",
        "General questions"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      description: "Best for serious job seekers",
      price: "$29",
      interval: "/month",
      features: [
        "Unlimited practice sessions",
        "Create custom interviews",
        "Advanced AI feedback",
        "Industry-specific questions",
        "Performance analytics"
      ],
      buttonText: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      price: "$99",
      interval: "/month",
      features: [
        "Everything in Pro",
        "Team management",
        "Custom branding",
        "Priority support"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-300">Choose the plan that fits your interview preparation needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
