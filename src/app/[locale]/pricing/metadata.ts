import type { Metadata } from 'next';
import {
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import { generatePageMetadata, metadataConfigs } from "@/lib/metadata";
import type { Locale } from "@/i18n/settings";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("pricingPage");

  const title = t("title");
  const description = t("subtitle");
  
  return generatePageMetadata({
    title,
    description,
    keywords: metadataConfigs.pricing.keywords,
    path: '/pricing',
    imagePath: metadataConfigs.pricing.imagePath,
    imageAlt: metadataConfigs.pricing.imageAlt,
    locale,
  });
}
