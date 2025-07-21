import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getStaticParams as i18nGetStaticParams,
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Locale } from "@/i18n/settings";

interface ClientLogo {
  name: string;
  logo: string;
  dataAiHint: string;
}

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatar: string;
  dataAiHint: string;
}

export default async function OurClientsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("ourClientsPage");

  // Build clientLogos array using explicit keys for type safety
  const clientLogos: ClientLogo[] = [
    {
      name: t("clientLogos.0.name"),
      logo: t("clientLogos.0.logo"),
      dataAiHint: t("clientLogos.0.dataAiHint"),
    },
    {
      name: t("clientLogos.1.name"),
      logo: t("clientLogos.1.logo"),
      dataAiHint: t("clientLogos.1.dataAiHint"),
    },
    {
      name: t("clientLogos.2.name"),
      logo: t("clientLogos.2.logo"),
      dataAiHint: t("clientLogos.2.dataAiHint"),
    },
    {
      name: t("clientLogos.3.name"),
      logo: t("clientLogos.3.logo"),
      dataAiHint: t("clientLogos.3.dataAiHint"),
    },
    {
      name: t("clientLogos.4.name"),
      logo: t("clientLogos.4.logo"),
      dataAiHint: t("clientLogos.4.dataAiHint"),
    },
    {
      name: t("clientLogos.5.name"),
      logo: t("clientLogos.5.logo"),
      dataAiHint: t("clientLogos.5.dataAiHint"),
    },
  ];

  // Build testimonials array using explicit keys for type safety
  const testimonials: Testimonial[] = [
    {
      quote: t("testimonials.0.quote"),
      name: t("testimonials.0.name"),
      company: t("testimonials.0.company"),
      avatar: t("testimonials.0.avatar"),
      dataAiHint: t("testimonials.0.dataAiHint"),
    },
    {
      quote: t("testimonials.1.quote"),
      name: t("testimonials.1.name"),
      company: t("testimonials.1.company"),
      avatar: t("testimonials.1.avatar"),
      dataAiHint: t("testimonials.1.dataAiHint"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t("title")}
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("description")}
          </CardDescription>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold font-headline text-foreground text-center mb-8">
              {t("valuedClientsSectionTitle")}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client: ClientLogo) => (
                <div
                  key={client.name}
                  className="p-4 bg-card rounded-lg shadow-sm border border-border"
                >
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
            <h2 className="text-2xl font-semibold font-headline text-foreground text-center mb-8">
              {t("successStoriesSectionTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial: Testimonial) => (
                <Card
                  key={testimonial.name}
                  className="shadow-md bg-secondary/30"
                >
                  <CardContent className="p-6">
                    <blockquote className="text-lg text-foreground/80 border-l-4 border-primary pl-4 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                        data-ai-hint={testimonial.dataAiHint}
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-foreground/70 text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center text-lg text-foreground/80">
              {t("joinUsText")}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
