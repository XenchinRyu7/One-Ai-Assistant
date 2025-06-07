

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';

export default async function OurClientsPage() {
  const t = await getScopedI18n('ourClientsPage');
  const clientLogos = t('clientLogos');
  const testimonials = t('testimonials');

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t('title')}
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('description')}
          </CardDescription>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold font-headline text-foreground text-center mb-8">{t('valuedClientsSectionTitle')}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client: {name: string, logo: string, dataAiHint: string}) => (
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
            <h2 className="text-2xl font-semibold font-headline text-foreground text-center mb-8">{t('successStoriesSectionTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial: {quote: string, name: string, company: string, avatar: string, dataAiHint: string}) => (
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
            {t('joinUsText')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}

