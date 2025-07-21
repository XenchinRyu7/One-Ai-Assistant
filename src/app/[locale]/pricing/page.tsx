"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { useScopedI18n, useCurrentLocale } from "@/i18n/client";
// Removed: import { getStaticParams as i18nGetStaticParams } from '@/i18n/server';

const initialPricingPlansData = [
  {
    id: "starter",
    nameKey: "starterPlanName", // For i18n
    descriptionKey: "starterPlanDescription", // For i18n
    prices: {
      USD: { monthly: "$19", annually: "$180" }, // $15/month if annual (20% discount)
      IDR: { monthly: "Rp 300.000", annually: "Rp 2.880.000" }, // Rp 240.000/bulan if annual
    },
    frequencies: {
      USD: { monthly: "/month", annually: "/year" },
      IDR: { monthly: "/bulan", annually: "/tahun" },
    },
    featuresKeys: [
      // For i18n
      "starterFeature1",
      "starterFeature2",
      "starterFeature3",
      "starterFeature4",
    ],
    ctaKey: "chooseStarter", // For i18n
    href: "/signup?plan=starter",
    popular: false,
    annualDiscountKey: "save20Percent", // For i18n
  },
  {
    id: "professional",
    nameKey: "professionalPlanName",
    descriptionKey: "professionalPlanDescription",
    prices: {
      USD: { monthly: "$49", annually: "$468" }, // $39/month if annual (20% discount)
      IDR: { monthly: "Rp 750.000", annually: "Rp 7.200.000" }, // Rp 600.000/bulan if annual
    },
    frequencies: {
      USD: { monthly: "/month", annually: "/year" },
      IDR: { monthly: "/bulan", annually: "/tahun" },
    },
    featuresKeys: [
      "proFeature1",
      "proFeature2",
      "proFeature3",
      "proFeature4",
      "proFeature5",
    ],
    ctaKey: "chooseProfessional",
    href: "/signup?plan=professional",
    popular: true,
    annualDiscountKey: "save20Percent",
  },
  {
    id: "enterprise",
    nameKey: "enterprisePlanName",
    descriptionKey: "enterprisePlanDescription",
    prices: {
      // Enterprise price is custom, so it doesn't change with currency/cycle
      USD: { monthly: "Custom", annually: "Custom" },
      IDR: { monthly: "Kustom", annually: "Kustom" },
    },
    frequencies: {
      USD: { monthly: "", annually: "" }, // No frequency for custom
      IDR: { monthly: "", annually: "" },
    },
    featuresKeys: [
      "enterpriseFeature1",
      "enterpriseFeature2",
      "enterpriseFeature3",
      "enterpriseFeature4",
      "enterpriseFeature5",
      "enterpriseFeature6",
    ],
    ctaKey: "contactSales",
    href: "/contact?plan=enterprise",
    popular: false,
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );
  const [currency, setCurrency] = useState<"USD" | "IDR">("USD");

  const t = useScopedI18n("pricingPage");
  const locale = useCurrentLocale();

  const getPlanFeatureText = (planId: string, featureKey: string) => {
    // Simplified; in a real app, you might have a flat list of feature translations
    // or a more complex structure.
    const keyMap: Record<string, Record<string, string>> = {
      starter: {
        starterFeature1: t("starterFeatures.0"),
        starterFeature2: t("starterFeatures.1"),
        starterFeature3: t("starterFeatures.2"),
        starterFeature4: t("starterFeatures.3"),
      },
      professional: {
        proFeature1: t("professionalFeatures.0"),
        proFeature2: t("professionalFeatures.1"),
        proFeature3: t("professionalFeatures.2"),
        proFeature4: t("professionalFeatures.3"),
        proFeature5: t("professionalFeatures.4"),
      },
      enterprise: {
        enterpriseFeature1: t("enterpriseFeatures.0"),
        enterpriseFeature2: t("enterpriseFeatures.1"),
        enterpriseFeature3: t("enterpriseFeatures.2"),
        enterpriseFeature4: t("enterpriseFeatures.3"),
        enterpriseFeature5: t("enterpriseFeatures.4"),
        enterpriseFeature6: t("enterpriseFeatures.5"),
      },
    };
    return keyMap[planId]?.[featureKey] || featureKey;
  };

  const pricingPlans = initialPricingPlansData.map((plan) => ({
    ...plan,
    name: t(plan.nameKey as any),
    description: t(plan.descriptionKey as any),
    features: plan.featuresKeys.map((key) => getPlanFeatureText(plan.id, key)),
    cta: t(plan.ctaKey as any),
    annualDiscount: plan.annualDiscountKey
      ? t(plan.annualDiscountKey as any)
      : undefined,
  }));

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <Breadcrumbs />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <div className="inline-flex bg-muted p-1 rounded-full">
          <Button
            variant={billingCycle === "monthly" ? "default" : "ghost"}
            size="sm"
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ease-in-out
              ${
                billingCycle === "monthly"
                  ? "bg-foreground text-background shadow-md hover:bg-foreground/90"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            onClick={() => setBillingCycle("monthly")}
          >
            {t("monthly")}
          </Button>
          <Button
            variant={billingCycle === "annually" ? "default" : "ghost"}
            size="sm"
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ease-in-out
              ${
                billingCycle === "annually"
                  ? "bg-foreground text-background shadow-md hover:bg-foreground/90"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            onClick={() => setBillingCycle("annually")}
          >
            {t("annually")}
          </Button>
        </div>

        <Select
          value={currency}
          onValueChange={(value: "USD" | "IDR") => setCurrency(value)}
        >
          <SelectTrigger className="w-auto min-w-[100px] rounded-full border-border bg-muted px-4 py-2 text-sm font-semibold focus:ring-primary">
            <SelectValue placeholder={t("selectCurrency")} />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="USD" className="cursor-pointer">
              {t("usd")}
            </SelectItem>
            <SelectItem value="IDR" className="cursor-pointer">
              {t("idr")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
              plan.popular
                ? "border-2 border-primary ring-2 ring-primary/20"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full shadow-md uppercase">
                  {t("popular")}
                </span>
              </div>
            )}
            <CardHeader className="pt-8">
              <CardTitle className="font-headline text-2xl text-center">
                {plan.name}
              </CardTitle>
              <div className="text-center mt-2">
                <span className="text-4xl font-bold text-foreground">
                  {plan.prices[currency][billingCycle]}
                </span>
                {plan.id !== "enterprise" && (
                  <span className="text-lg text-foreground/70">
                    {plan.frequencies[currency][billingCycle]}
                  </span>
                )}
              </div>
              <CardDescription className="text-center min-h-[3em] mt-2">
                {plan.description}
                {billingCycle === "annually" &&
                  plan.annualDiscount &&
                  plan.id !== "enterprise" && (
                    <span className="block text-sm font-medium text-green-600 dark:text-green-400 mt-1">
                      {plan.annualDiscount}
                    </span>
                  )}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                }`}
                size="lg"
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold font-headline text-foreground">
          {t("customSolutionTitle")}
        </h2>
        <p className="mt-2 text-lg text-foreground/70">
          {t("customSolutionSubtitle")}
        </p>
        <Button asChild variant="outline" size="lg" className="mt-6">
          <Link href="/contact">{t("contactSales")}</Link>
        </Button>
      </div>
    </div>
  );
}

// Removed:
// export async function generateStaticParams() {
// return i18nGetStaticParams();
// }
