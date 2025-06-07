
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Dr. Eva Rostova", role: "Lead AI Researcher", avatar: "https://placehold.co/100x100.png?text=ER", initials: "ER", bio: "PhD in AI with a focus on NLP. Eva leads our research and development efforts, pushing the boundaries of conversational AI.", dataAiHint: "scientist portrait" },
  { name: "Marcus Chen", role: "Chief Technology Officer", avatar: "https://placehold.co/100x100.png?text=MC", initials: "MC", bio: "Experienced software architect, Marcus ensures our platform is scalable, secure, and robust.", dataAiHint: "engineer leader" },
  { name: "Aisha Khan", role: "Head of Product", avatar: "https://placehold.co/100x100.png?text=AK", initials: "AK", bio: "Aisha translates complex AI capabilities into user-friendly features that solve real business problems.", dataAiHint: "product manager" },
  { name: "David Miller", role: "Senior Backend Engineer", avatar: "https://placehold.co/100x100.png?text=DM", initials: "DM", bio: "David specializes in building the core infrastructure that powers our AI assistant.", dataAiHint: "developer profile" },
];

export default function OurTeamsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Meet Our Team
          </CardTitle>
           <p className="mt-2 text-lg text-foreground/70 max-w-2xl mx-auto">
            The passionate minds behind One AI Assistant, dedicated to revolutionizing customer interaction through artificial intelligence.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="shadow-md hover:shadow-lg transition-shadow bg-card overflow-hidden">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="h-24 w-24 sm:h-28 sm:w-28 border-2 border-primary">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold font-headline text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-foreground/70 mt-2">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Image 
              src="https://placehold.co/700x400.png"
              alt="Team collaborating on a project"
              width={700}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              data-ai-hint="team meeting"
            />
            <p className="mt-6 text-lg text-foreground/80">
              We are a diverse group of innovators, engineers, and strategists united by a common goal: to build the most intelligent and helpful AI assistants.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
