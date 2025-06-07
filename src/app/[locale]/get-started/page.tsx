
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams } from '@/i18n/server';

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Let's Get Started!</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          You're one step closer to revolutionizing your customer support. Choose an option below to begin your journey with One AI Assistant.
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <Card className="shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Start a Free Trial</CardTitle>
            <CardDescription>
              Experience the full power of One AI Assistant with our no-commitment free trial. Explore all features and see the impact on your business.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image 
              src="https://placehold.co/500x300.png?text=Free+Trial+Benefits" 
              alt="Free Trial Illustration"
              width={500}
              height={300}
              className="rounded-md mb-6 object-cover mx-auto"
              data-ai-hint="trial benefits"
            />
            <ul className="space-y-2 text-foreground/70 list-disc list-inside">
              <li>Full access to Professional plan features.</li>
              <li>Integrate with your website in minutes.</li>
              <li>No credit card required to start.</li>
              <li>Dedicated support during your trial period.</li>
            </ul>
          </CardContent>
          <CardContent className="mt-auto">
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
              <Link href="/signup?trial=true">Begin Free Trial</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Request a Personalized Demo</CardTitle>
            <CardDescription>
              Schedule a live demo with our experts. We'll walk you through the platform and discuss how One AI Assistant can be tailored to your specific needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image 
              src="https://placehold.co/500x300.png?text=Personalized+Demo" 
              alt="Demo Illustration"
              width={500}
              height={300}
              className="rounded-md mb-6 object-cover mx-auto"
              data-ai-hint="demo presentation"
            />
             <ul className="space-y-2 text-foreground/70 list-disc list-inside">
              <li>See the RAG system in action with example data.</li>
              <li>Discuss your specific use cases and challenges.</li>
              <li>Get answers to all your technical questions.</li>
              <li>Explore custom integration possibilities.</li>
            </ul>
          </CardContent>
           <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full" size="lg">
              <Link href="/contact?reason=demo">Schedule a Demo</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold font-headline text-foreground">Have Questions?</h2>
        <p className="mt-2 text-lg text-foreground/70">
          Our team is here to help. Visit our <Link href="/faq" className="text-primary hover:underline">FAQ page</Link> or <Link href="/contact" className="text-primary hover:underline">contact us</Link> directly.
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
