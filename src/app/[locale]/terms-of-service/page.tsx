
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';
// Removed: import { setStaticParamsLocale } from 'next-international/server';
import type { Locale } from '@/i18n/settings';

export default async function TermsOfServicePage({ params: { locale } }: { params: { locale: Locale } }) {
  // Removed: setStaticParamsLocale(locale);
  const t = await getScopedI18n('termsOfServicePage');

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">{t('title')}</CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-sm text-center text-muted-foreground">{t('lastUpdated', { date: new Date().toLocaleDateString(locale) })}</p>

          <h2>{t('sections.agreementToTerms')}</h2>
          <p>{t('agreementToTermsContent')}</p>

          <h2>{t('sections.intellectualPropertyRights')}</h2>
          <p>{t('intellectualPropertyRightsContent')}</p>

          <h2>{t('sections.userRepresentations')}</h2>
          <p>{t('userRepresentationsIntro')}</p>
          <ol className="list-decimal list-inside">
            <li>{t('userRepresentationsPoints.0')}</li>
            <li>{t('userRepresentationsPoints.1')}</li>
            <li>{t('userRepresentationsPoints.2')}</li>
            <li>{t('userRepresentationsPoints.3')}</li>
            <li>{t('userRepresentationsPoints.4')}</li>
            <li>{t('userRepresentationsPoints.5')}</li>
            <li>{t('userRepresentationsPoints.6')}</li>
          </ol>
          
          <h2>{t('sections.prohibitedActivities')}</h2>
          <p>{t('prohibitedActivitiesContent')}</p>
          
          <h2>{t('sections.serviceAvailability')}</h2>
          <p>{t('serviceAvailabilityContent')}</p>

          <h2>{t('sections.governingLaw')}</h2>
          <p>{t('governingLawContent')}</p>

          <h2>{t('sections.disclaimer')}</h2>
          <p>{t('disclaimerContent')}</p>

          <h2>{t('sections.limitationOfLiability')}</h2>
          <p>{t('limitationOfLiabilityContent')}</p>

          <h2>{t('sections.contactUs')}</h2>
          <p>
            {t('contactUsIntro')}
            <br />
            {t('contactEmailLabel')} <a href={`mailto:${t('contactEmailValue')}`} className="text-primary hover:underline">{t('contactEmailValue')}</a>
            <br />
            {t('contactAddressLabel')} {t('contactAddressValue')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
