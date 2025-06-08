import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Example404Page() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center">
      <Card className="shadow-xl w-full max-w-lg p-8">
        <CardHeader>
          <Image 
            src="https://placehold.co/300x200.png" 
            alt="Confused robot"
            width={300}
            height={200}
            className="mx-auto mb-6 rounded-lg"
            data-ai-hint="error confused"
          />
          <CardTitle className="text-5xl font-bold font-headline text-destructive">404</CardTitle>
          <CardDescription className="text-2xl font-semibold text-foreground/80 mt-2">
            Oops! Page Not Found.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-foreground/70">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
