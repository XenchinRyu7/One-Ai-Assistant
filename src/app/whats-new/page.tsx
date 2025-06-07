
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function WhatsNewPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            What's New
          </CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
            Stay updated with the latest developments, features, and progress of the One AI Assistant chatbot system. We're constantly innovating to bring you the best AI solutions.
          </p>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x350.png"
              alt="New Features Illustration"
              width={600}
              height={350}
              className="rounded-lg shadow-md"
              data-ai-hint="innovation technology"
            />
          </div>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <h3 className="font-semibold font-headline text-foreground">Upcoming Enhancements:</h3>
            <ul>
              <li>Advanced analytics dashboard for chatbot performance.</li>
              <li>Expanded integration options with popular CRM platforms.</li>
              <li>Enhanced multilingual support for global audiences.</li>
              <li>AI-powered proactive messaging capabilities.</li>
            </ul>
            <p className="text-center mt-8">
              Check back regularly for more updates!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
