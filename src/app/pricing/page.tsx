
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    frequency: "/month",
    description: "Perfect for small businesses and startups looking to automate basic customer queries.",
    features: [
      "Up to 1,000 interactions/month",
      "Basic RAG capabilities",
      "Standard knowledge base integration",
      "Email support"
    ],
    cta: "Choose Starter",
    href: "/signup?plan=starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    frequency: "/month",
    description: "Ideal for growing businesses needing more power and customization.",
    features: [
      "Up to 5,000 interactions/month",
      "Advanced RAG capabilities",
      "Multiple knowledge base integrations",
      "Priority email support",
      "Basic analytics"
    ],
    cta: "Choose Professional",
    href: "/signup?plan=professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    description: "Tailored solutions for large organizations with specific requirements.",
    features: [
      "Unlimited interactions",
      "Premium RAG & LLM fine-tuning",
      "Custom integrations (CRM, etc.)",
      "Dedicated account manager",
      "Advanced analytics & reporting",
      "SLA & 24/7 premium support"
    ],
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Flexible Pricing for Every Need</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Choose the plan that best fits your business goals and scale as you grow. All plans include our core AI chatbot features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map(plan => (
          <Card key={plan.name} className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ${plan.popular ? 'border-2 border-primary ring-2 ring-primary/20' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full shadow-md">POPULAR</span>
              </div>
            )}
            <CardHeader className="pt-8">
              <CardTitle className="font-headline text-2xl text-center">{plan.name}</CardTitle>
              <div className="text-center mt-2">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.frequency && <span className="text-lg text-foreground/70">{plan.frequency}</span>}
              </div>
              <CardDescription className="text-center min-h-[3em] mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90'} text-accent-foreground`} size="lg">
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold font-headline text-foreground">Need a Custom Solution?</h2>
        <p className="mt-2 text-lg text-foreground/70">
          We can tailor a plan specifically for your enterprise needs. Get in touch with our sales team for a personalized quote.
        </p>
        <Button asChild variant="outline" size="lg" className="mt-6">
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  );
}
