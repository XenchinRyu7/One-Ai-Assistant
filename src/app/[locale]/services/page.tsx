
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Cog, Shield } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams } from '@/i18n/server';

const servicesList = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI Chatbot Development",
    description: "Custom AI chatbot solutions powered by RAG and LLMs, tailored to your specific business needs and knowledge base."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Seamless Integration Services",
    description: "Expert assistance in integrating our chatbot platform with your website, CRM, and other business systems."
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    title: "Chatbot Customization & Branding",
    description: "Personalize the look, feel, and conversational style of your chatbot to perfectly align with your brand identity."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Ongoing Support & Maintenance",
    description: "Dedicated support and regular updates to ensure your AI assistant performs optimally and stays up-to-date."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Services</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          We offer a comprehensive suite of services to help you deploy and manage a powerful AI assistant for your business.
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {servicesList.map(service => (
          <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              {service.icon}
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/70">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-xl bg-secondary/30">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-4">Why Choose Our Services?</h2>
                <p className="text-lg text-foreground/80 mb-6">
                    At One AI Assistant, we are committed to providing not just a product, but a complete solution. Our services are designed to ensure you get the most out of your AI chatbot, from initial setup to long-term optimization.
                </p>
                <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-center"><Zap className="h-5 w-5 text-primary mr-2" /> Expertise in AI and RAG technology.</li>
                    <li className="flex items-center"><Zap className="h-5 w-5 text-primary mr-2" /> Focus on seamless user experience.</li>
                    <li className="flex items-center"><Zap className="h-5 w-5 text-primary mr-2" /> Commitment to your business success.</li>
                </ul>
            </div>
            <div className="md:w-1/2">
                 <Image 
                    src="https://placehold.co/500x350.png" 
                    alt="Service team discussion"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-md"
                    data-ai-hint="team service"
                  />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
