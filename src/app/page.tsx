
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Brain, Puzzle, Clock, Palette, Zap, Settings2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-primary mb-4" />,
    title: 'Intelligent RAG System',
    description: 'Leverages advanced Retrieval Augmented Generation for context-aware, accurate responses from your knowledge base.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-primary mb-4" />,
    title: 'Seamless Integration',
    description: 'Easily embed our chatbot into your existing website with minimal effort using a simple script.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary mb-4" />,
    title: '24/7 Automated Support',
    description: 'Provide round-the-clock assistance to your users, enhancing satisfaction and engagement anytime.',
  },
  {
    icon: <Palette className="h-10 w-10 text-primary mb-4" />,
    title: 'Highly Customizable',
    description: "Tailor the chatbot's appearance, behavior, and responses to perfectly match your brand's voice and style.",
  },
];

const howItWorksSteps = [
  {
    id: 1,
    title: 'Connect Your Data',
    description: 'Securely upload your documents, FAQs, or website content to build the chatbot\'s knowledge base.',
    icon: <Zap className="h-8 w-8 text-accent" />,
  },
  {
    id: 2,
    title: 'Customize Your Bot',
    description: 'Adjust settings, appearance, and pre-defined prompts to align with your brand and user needs.',
    icon: <Settings2 className="h-8 w-8 text-accent" />,
  },
  {
    id: 3,
    title: 'Embed & Launch',
    description: 'Add a simple code snippet to your website and start engaging customers instantly.',
    icon: <MessageSquare className="h-8 w-8 text-accent" />,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground font-headline">
            Empower Your Website with <span className="text-primary">One AI Assistant</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
            Seamlessly integrate our intelligent chatbot to provide instant, accurate answers using your own data, and elevate your customer support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Link href="/get-started">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-md transform hover:scale-105 transition-transform duration-200">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <Image
              src="https://placehold.co/1200x600.png"
              alt="AI Chatbot Interface Showcase"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="AI chatbot interface"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
              The Future of Customer Interaction, Today.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              Discover how One AI Assistant transforms your customer engagement with powerful, easy-to-use features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
              Simple Steps to Smarter Support
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              Get your AI assistant up and running in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="flex-shrink-0 mb-4 p-3 bg-accent/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-headline">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="How it works diagram"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              data-ai-hint="workflow diagram"
            />
          </div>
        </div>
      </section>

      {/* Security/Trust Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Data Security"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="data security"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline mb-6">
                Your Data, Secured and Private
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                We prioritize the security and privacy of your data. Our platform is built with industry-standard security practices to ensure your information is protected.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>End-to-End Encryption:</strong> All data in transit and at rest is encrypted.</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Access Controls:</strong> Granular control over who can access and manage your chatbot and data.</span>
                </li>
                 <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Compliance Ready:</strong> Designed to help you meet relevant data privacy regulations.</span>
                </li>
              </ul>
              <Button asChild variant="link" className="mt-6 text-primary px-0">
                <Link href="/security-details">Learn more about our security <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-primary-foreground/90">
            Join businesses leveraging One AI Assistant to provide exceptional support, 
            increase engagement, and reduce operational costs.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Link href="/get-started">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
