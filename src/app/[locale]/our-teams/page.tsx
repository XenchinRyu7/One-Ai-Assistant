

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';

export default async function OurTeamsPage() {
  const t = await getScopedI18n('ourTeamsPage');
  const teamMembers = t('teamMembers');

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t('title')}
          </CardTitle>
           <p className="mt-2 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member: { name: string, role: string, avatar: string, initials: string, bio: string, dataAiHint: string }) => (
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
              alt={t('teamCollaborationImageAlt')}
              width={700}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              data-ai-hint="team meeting"
            />
            <p className="mt-6 text-lg text-foreground/80">
              {t('finalParagraph')}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}

