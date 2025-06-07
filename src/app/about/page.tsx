
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">About One AI Assistant</CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="space-y-8 text-lg text-foreground/80">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Our team working"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="team collaboration"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p>
                Welcome to One AI Assistant! We are passionate about revolutionizing how businesses interact with their customers. 
                Our mission is to provide cutting-edge AI chatbot solutions that are intelligent, intuitive, and easy to integrate.
              </p>
              <p>
                Founded by a team of AI enthusiasts and software engineers, One AI Assistant was born from the desire to make advanced AI accessible to businesses of all sizes. 
                We believe that by leveraging the power of Retrieval Augmented Generation (RAG) and Large Language Models (LLMs), we can help you deliver exceptional customer experiences, 24/7.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold font-headline text-foreground">Our Vision</h2>
            <p>
              To be the leading provider of AI-powered customer support solutions, empowering businesses worldwide to build stronger customer relationships through seamless and intelligent interactions.
            </p>
            <h2 className="text-2xl font-semibold font-headline text-foreground">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Innovation:</strong> Continuously exploring and implementing the latest AI advancements.</li>
              <li><strong>Customer-Centricity:</strong> Designing solutions that truly meet the needs of our clients and their users.</li>
              <li><strong>Integrity:</strong> Operating with transparency and a strong commitment to data privacy and security.</li>
              <li><strong>Simplicity:</strong> Making complex technology easy to use and integrate.</li>
            </ul>
          </div>
          <p className="text-center pt-4">
            Thank you for considering One AI Assistant. We look forward to helping you transform your customer support!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
