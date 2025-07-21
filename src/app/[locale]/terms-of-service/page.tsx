import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getStaticParams as i18nGetStaticParams,
  getScopedI18n,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Locale } from "@/i18n/settings";

export default async function TermsOfServicePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("termsOfServicePage");

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

          <h2>{t("sections.agreementToTerms")}</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”) and
            One AI Assistant ("we," "us," or "our"), concerning your access to
            and use of the [YourWebsite.com] website as well as any other media
            form, media channel, mobile website or mobile application related,
            linked, or otherwise connected thereto (collectively, the “Site” and
            our "Services"). You agree that by accessing the Site and/or
            Services, you have read, understood, and agree to be bound by all of
            these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS
            OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND
            SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <h2>{t("sections.intellectualPropertyRights")}</h2>
          <p>
            Unless otherwise indicated, the Site and the Services are our
            proprietary property and all source code, databases, functionality,
            software, website designs, audio, video, text, photographs, and
            graphics on the Site (collectively, the “Content”) and the
            trademarks, service marks, and logos contained therein (the “Marks”)
            are owned or controlled by us or licensed to us, and are protected by
            copyright and trademark laws and various other intellectual property
            rights and unfair competition laws of the United States, foreign
            jurisdictions, and international conventions.
          </p>

          <h2>{t("sections.userRepresentations")}</h2>
          <p>By using the Site or Services, you represent and warrant that:</p>
          <ol className="list-decimal list-inside">
            <li>
              all registration information you submit will be true, accurate,
              current, and complete;
            </li>
            <li>
              you will maintain the accuracy of such information and promptly
              update such registration information as necessary;
            </li>
            <li>
              you have the legal capacity and you agree to comply with these
              Terms of Service;
            </li>
            <li>you are not under the age of 13;</li>
            <li>
              you will not access the Site or Services through automated or
              non-human means, whether through a bot, script or otherwise;
            </li>
            <li>
              you will not use the Site or Services for any illegal or
              unauthorized purpose;
            </li>
            <li>
              your use of the Site or Services will not violate any applicable
              law or regulation.
            </li>
          </ol>

          <h2>{t("sections.prohibitedActivities")}</h2>
          <p>
            You may not access or use the Site or Services for any purpose other
            than that for which we make the Site and Services available. The Site
            and Services may not be used in connection with any commercial
            endeavors except those that are specifically endorsed or approved by
            us.
          </p>

          <h2>{t("sections.serviceAvailability")}</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the
            Site or Services at any time or for any reason at our sole
            discretion without notice. We also reserve the right to modify or
            discontinue all or part of the Services without notice at any time.
            We will not be liable to you or any third party for any modification,
            price change, suspension, or discontinuance of the Site or Services.
          </p>

          <h2>{t("sections.governingLaw")}</h2>
          <p>
            These Terms shall be governed by and defined following the laws of
            your jurisdiction. One AI Assistant and yourself irrevocably consent
            that the courts of your jurisdiction shall have exclusive jurisdiction
            to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2>{t("sections.disclaimer")}</h2>
          <p>
            The Site and Services are provided on an as-is and as-available
            basis. You agree that your use of the Site and/or Services will be at
            your sole risk. To the fullest extent permitted by law, we disclaim
            all warranties, express or implied, in connection with the Site and
            Services and your use thereof.
          </p>

          <h2>{t("sections.limitationOfLiability")}</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable
            to you or any third party for any direct, indirect, consequential,
            exemplary, incidental, special, or punitive damages, including lost
            profit, lost revenue, loss of data, or other damages arising from
            your use of the Site or Services, even if we have been advised of the
            possibility of such damages.
          </p>

          <h2>{t("sections.contactUs")}</h2>
          <p>
            If you have questions or comments about these Terms of Service, you
            may contact us:
            <br />
            {t("contactEmailLabel")}{" "}
            <a
              href="mailto:oneaiassistantindonesia@gmail.com"
              className="text-primary hover:underline"
            >
              oneaiassistantindonesia@gmail.com
            </a>
            <br />
            {t("contactAddressLabel")} 123 Main St, Anytown, USA
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
