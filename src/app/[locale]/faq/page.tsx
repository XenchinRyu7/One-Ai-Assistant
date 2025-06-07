
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';
// Removed: import { setStaticParamsLocale } from 'next-international/server';
import type { Locale } from '@/i18n/settings';

interface FAQItem {
  question: string;
  answer: string;
}

export default async function FAQPage({ params: { locale } }: { params: { locale: Locale } }) {
  // Removed: setStaticParamsLocale(locale);
  const t = await getScopedI18n('faqPage');
  const faqItemsData = t('items');
  const faqItems: FAQItem[] = Array.isArray(faqItemsData) ? faqItemsData : [];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t('title')}
          </CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item: FAQItem, index: number) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
