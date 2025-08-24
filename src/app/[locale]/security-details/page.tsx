import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShieldCheck, Lock, DatabaseZap, ServerCog } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getStaticParams as i18nGetStaticParams,
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Metadata } from 'next';
import { generatePageMetadata, metadataConfigs } from "@/lib/metadata";
import type { Locale } from "@/i18n/settings";

const icons = [
  <ShieldCheck key="sc-enc" className="h-8 w-8 text-primary" />,
  <Lock key="l-auth" className="h-8 w-8 text-primary" />,
  <DatabaseZap key="dz-infra" className="h-8 w-8 text-primary" />,
  <ServerCog key="scg-audit" className="h-8 w-8 text-primary" />,
  <ShieldCheck key="sc-min" className="h-8 w-8 text-primary" />,
  <Lock key="l-incident" className="h-8 w-8 text-primary" />,
];

interface SecurityFeature {
  title: string;
  description: string;
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("securityDetailsPage");

  const title = t("title");
  const description = t("description");
  
  return generatePageMetadata({
    title,
    description,
    keywords: metadataConfigs.securityDetails.keywords,
    path: '/security-details',
    imagePath: metadataConfigs.securityDetails.imagePath,
    imageAlt: metadataConfigs.securityDetails.imageAlt,
    locale,
  });
}

export default async function SecurityDetailsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("securityDetailsPage");

  // Ambil array fitur keamanan dari dictionary
  const securityFeatures: SecurityFeature[] = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
    {
      title: t("features.3.title"),
      description: t("features.3.description"),
    },
    {
      title: t("features.4.title"),
      description: t("features.4.description"),
    },
    {
      title: t("features.5.title"),
      description: t("features.5.description"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {securityFeatures.map((feature: SecurityFeature, index: number) => (
          <Card
            key={feature.title}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-start gap-4">
              {icons[index % icons.length]}
              <div className="flex-1">
                <CardTitle className="font-headline text-xl">
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/70">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-xl bg-secondary/30">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/500x400.png"
                alt={t("continuousImprovement.imageAlt")}
                width={500}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="data center security"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-4">
                {t("continuousImprovement.title")}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {t("continuousImprovement.paragraph1")}
              </p>
              <p className="text-lg text-foreground/80">
                {/* Ganti Trans dengan interpolasi manual */}
                {(() => {
                  const text = t("continuousImprovement.paragraph2");
                  // Misal string: "Hubungi tim kami melalui <1>formulir kontak</1> untuk info lebih lanjut."
                  const parts = text.split(/<1>|<\/1>/g);
                  return (
                    <>
                      {parts[0]}
                      <a
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        formulir kontak
                      </a>
                      {parts[2]}
                    </>
                  );
                })()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
