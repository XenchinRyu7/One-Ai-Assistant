
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const clientLogos = [
  { name: "Innovatech Corp", logo: "https://placehold.co/150x80.png?text=Innovatech", dataAiHint: "tech logo" },
  { name: "Global Solutions Ltd.", logo: "https://placehold.co/150x80.png?text=Global+Solutions", dataAiHint: "corporate logo" },
  { name: "E-Commerce Pro", logo: "https://placehold.co/150x80.png?text=EcomPro", dataAiHint: "retail logo" },
  { name: "HealthFirst Clinic", logo: "https://placehold.co/150x80.png?text=HealthFirst", dataAiHint: "medical logo" },
  { name: "EduLearn Platform", logo: "https://placehold.co/150x80.png?text=EduLearn", dataAiHint: "education logo" },
  { name: "TravelWise Agency", logo: "https://placehold.co/150x80.png?text=TravelWise", dataAiHint: "travel logo" },
];

const testimonials = [
  {
    quote: "One AI Assistant has transformed our customer support, reducing response times by 70% and significantly improving customer satisfaction.",
    name: "Sarah L., Head of Support",
    company: "Innovatech Corp",
    avatar: "https://placehold.co/80x80.png?text=SL",
    dataAiHint: "business person"
  },
  {
    quote: "The integration was seamless, and the AI's ability to understand and respond to complex queries based on our documentation is impressive.",
    name: "Mike B., CTO",
    company: "Global Solutions Ltd.",
    avatar: "https://placehold.co/80x80.png?text=MB",
    dataAiHint: "tech executive"
  }
]

export default function OurClientsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Trusted by Businesses Like Yours
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-foreground/70 max-w-2xl mx-auto">
            We're proud to partner with a diverse range of organizations, helping them enhance customer engagement and streamline support with our AI solutions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold font-headline text-foreground text-center mb-8">Our Valued Clients</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map(client => (
                <div key={client.name} className="p-4 bg-card rounded-lg shadow-sm border border-border">
                  <Image 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    width={150} 
                    height={80} 
                    className="object-contain"
                    data-ai-hint={client.dataAiHint}
                  />
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold font-headline text-foreground text-center mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="shadow-md bg-secondary/30">
                  <CardContent className="p-6">
                    <blockquote className="text-lg text-foreground/80 border-l-4 border-primary pl-4 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        width={50} 
                        height={50} 
                        className="rounded-full"
                        data-ai-hint={testimonial.dataAiHint}
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
           <p className="text-center mt-12 text-lg text-foreground/80">
            Join these and many other businesses that are leveraging One AI Assistant to achieve their customer support goals.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
