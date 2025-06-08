import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getStaticParams as i18nGetStaticParams,
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Locale } from "@/i18n/settings";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("privacyPolicyPage");

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t("title")}
          </CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-sm text-center text-muted-foreground">
            {t("lastUpdated", { date: new Date().toLocaleDateString(locale) })}
          </p>

          <h2>{t("sections.introduction")}</h2>
          <p>{t("introductionContent")}</p>

          <h2>{t("sections.informationWeCollect")}</h2>
          <p>{t("informationWeCollectIntro")}</p>
          <ul>
            <li>
              <strong>{t("personalDataTitle")}</strong>{" "}
              {t("personalDataContent")}
            </li>
            <li>
              <strong>{t("derivativeDataTitle")}</strong>{" "}
              {t("derivativeDataContent")}
            </li>
            <li>
              <strong>{t("chatbotInteractionsTitle")}</strong>{" "}
              {t("chatbotInteractionsContent")}
            </li>
          </ul>

          <h2>{t("sections.useOfYourInformation")}</h2>
          <p>{t("useOfYourInformationIntro")}</p>
          <ul>
            <li>{t("useCases.0")}</li>
            <li>{t("useCases.1")}</li>
            <li>{t("useCases.2")}</li>
            <li>{t("useCases.3")}</li>
            <li>{t("useCases.4")}</li>
            <li>{t("useCases.5")}</li>
            <li>{t("useCases.6")}</li>
          </ul>

          <h2>{t("sections.disclosureOfYourInformation")}</h2>
          <p>{t("disclosureOfYourInformationIntro")}</p>
          <ul>
            <li>
              <strong>{t("byLawTitle")}</strong> {t("byLawContent")}
            </li>
            <li>
              <strong>{t("thirdPartyProvidersTitle")}</strong>{" "}
              {t("thirdPartyProvidersContent")}
            </li>
          </ul>

          <h2>{t("sections.securityOfYourInformation")}</h2>
          <p>{t("securityOfYourInformationContent")}</p>

          <h2>{t("sections.policyForChildren")}</h2>
          <p>{t("policyForChildrenContent")}</p>

          <h2>{t("sections.changesToThisPolicy")}</h2>
          <p>{t("changesToThisPolicyContent")}</p>

          <h2>{t("sections.contactUs")}</h2>
          <p>
            {t("contactUsIntro")}
            <br />
            {t("contactEmailLabel")}{" "}
            <a
              href={`mailto:${t("contactEmailValue")}`}
              className="text-primary hover:underline"
            >
              {t("contactEmailValue")}
            </a>
            <br />
            {t("contactAddressLabel")} {t("contactAddressValue")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
