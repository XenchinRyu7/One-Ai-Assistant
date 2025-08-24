import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getStaticParams as i18nGetStaticParams,
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Metadata } from 'next';
import { generatePageMetadata, metadataConfigs } from "@/lib/metadata";
import type { Locale } from "@/i18n/settings";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("aboutPage");

  const title = t("title");
  const description = t("welcome");
  
  return generatePageMetadata({
    title,
    description,
    keywords: metadataConfigs.about.keywords,
    path: '/about',
    imagePath: metadataConfigs.about.imagePath,
    imageAlt: metadataConfigs.about.imageAlt,
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("aboutPage");

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t("title")}
          </CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="space-y-8 text-lg text-foreground/80">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4">
              <Image
                src="/images/illustrations/about_illustration.png"
                alt={t("teamImageAlt")}
                width={500}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="team collaboration"
              />
            </div>
            <div className="md:w-3/4 space-y-4">
              <p>{t("welcome")}</p>
              <p>{t("founded")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold font-headline text-foreground">
              {t("ourVision")}
            </h2>
            <p>{t("visionText")}</p>
            <h2 className="text-2xl font-semibold font-headline text-foreground">
              {t("ourValues")}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>{t("innovationTitle")}</strong> {t("innovationText")}
              </li>
              <li>
                <strong>{t("customerCentricityTitle")}</strong>{" "}
                {t("customerCentricityText")}
              </li>
              <li>
                <strong>{t("integrityTitle")}</strong> {t("integrityText")}
              </li>
              <li>
                <strong>{t("simplicityTitle")}</strong> {t("simplicityText")}
              </li>
            </ul>
          </div>
          <p className="text-center pt-4">{t("thankYou")}</p>
          
          <div className="flex justify-center pt-6">
            <Link href={`/${locale}/our-teams`}>
              <Button className="flex items-center gap-2" size="lg">
                <Users className="h-5 w-5" />
                {t("meetFoundersButton")}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
