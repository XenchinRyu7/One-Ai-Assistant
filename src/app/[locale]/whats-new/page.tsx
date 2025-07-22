import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getStaticParams as i18nGetStaticParams,
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Locale } from "@/i18n/settings";
import { Sparkles, Rocket, Calendar } from "lucide-react";

export default async function WhatsNewPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("whatsNewPage");

  const features: string[] = [
    t("launchFeatures.0"),
    t("launchFeatures.1"),
    t("launchFeatures.2"),
    t("launchFeatures.3"),
    t("launchFeatures.4"),
  ];

  const upcomingFeatures: string[] = [
    t("upcomingFeatures.0"),
    t("upcomingFeatures.1"),
    t("upcomingFeatures.2"),
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t("title")}
          </CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {t("launchDate")}
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/illustrations/launch_celebration.png"
              alt={t("imageAlt")}
              width={600}
              height={350}
              className="rounded-lg shadow-md"
              data-ai-hint="launch celebration"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Launch Features */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Rocket className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-semibold font-headline text-foreground text-xl">
                  {t("launchAnnouncementTitle")}
                </h3>
              </div>
              <ul className="space-y-3">
                {features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Features */}
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/30 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-accent mr-2" />
                <h3 className="font-semibold font-headline text-foreground text-xl">
                  {t("upcomingFeaturesTitle")}
                </h3>
              </div>
              <ul className="space-y-3">
                {upcomingFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center bg-muted/50 p-6 rounded-lg">
            <p className="text-lg text-foreground/80 mb-4">{t("thankYou")}</p>
            <p className="text-foreground/70 mb-6">{t("getStartedCTA")}</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/pricing">Get Started Today</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
