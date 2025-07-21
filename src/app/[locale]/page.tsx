// src/app/[locale]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Brain,
  Puzzle,
  Clock,
  Palette,
  Zap,
  Settings2,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  getI18n,
  getScopedI18n,
  getStaticParams as i18nGetStaticParams,
} from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
// import { Trans } from 'next-international';
import type { Locale } from "@/i18n/settings";

interface FeatureItem {
  title: string;
  description: string;
}

interface StepItem {
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  company: string;
  avatarSrc: string;
  avatarFallback: string;
  rating: number;
  dataAiHint: string;
}

interface BrandItem {
  name: string;
  logoSrc: string;
  dataAiHint: string;
}

export default async function HomePage(props: { params: { locale: Locale } }) {
  const { locale } = await props.params;
  setStaticParamsLocale(locale);
  const t = await getI18n();
  const heroT = await getScopedI18n("hero");
  const homeT = await getScopedI18n("homepage");

  const heroTitleString = heroT("title");
  const heroTitleParts = heroTitleString.split(/<1>|<\/1>/);

  const securitySectionFeature1 = homeT("securitySection.features.0");
  const securitySectionFeature1Parts =
    securitySectionFeature1.split(/<strong>|<\/strong>/);
  const securitySectionFeature2 = homeT("securitySection.features.1");
  const securitySectionFeature2Parts =
    securitySectionFeature2.split(/<strong>|<\/strong>/);
  const securitySectionFeature3 = homeT("securitySection.features.2");
  const securitySectionFeature3Parts =
    securitySectionFeature3.split(/<strong>|<\/strong>/);

  // Ambil fitur satu per satu sesuai struktur dictionary
  const featuresList: FeatureItem[] = [
    {
      title: homeT("featuresSection.features.0.title"),
      description: homeT("featuresSection.features.0.description"),
    },
    {
      title: homeT("featuresSection.features.1.title"),
      description: homeT("featuresSection.features.1.description"),
    },
    {
      title: homeT("featuresSection.features.2.title"),
      description: homeT("featuresSection.features.2.description"),
    },
    {
      title: homeT("featuresSection.features.3.title"),
      description: homeT("featuresSection.features.3.description"),
    },
  ];

  const stepsList: StepItem[] = [
    {
      title: homeT("howItWorksSection.steps.0.title"),
      description: homeT("howItWorksSection.steps.0.description"),
    },
    {
      title: homeT("howItWorksSection.steps.1.title"),
      description: homeT("howItWorksSection.steps.1.description"),
    },
    {
      title: homeT("howItWorksSection.steps.2.title"),
      description: homeT("howItWorksSection.steps.2.description"),
    },
  ];

  const testimonialsList: TestimonialItem[] = [
    {
      quote: homeT("testimonialsSection.testimonials.0.quote"),
      name: homeT("testimonialsSection.testimonials.0.name"),
      company: homeT("testimonialsSection.testimonials.0.company"),
      avatarSrc: homeT("testimonialsSection.testimonials.0.avatarSrc"),
      avatarFallback: homeT(
        "testimonialsSection.testimonials.0.avatarFallback"
      ),
      rating: Number(homeT("testimonialsSection.testimonials.0.rating")),
      dataAiHint: homeT("testimonialsSection.testimonials.0.dataAiHint"),
    },
    {
      quote: homeT("testimonialsSection.testimonials.1.quote"),
      name: homeT("testimonialsSection.testimonials.1.name"),
      company: homeT("testimonialsSection.testimonials.1.company"),
      avatarSrc: homeT("testimonialsSection.testimonials.1.avatarSrc"),
      avatarFallback: homeT(
        "testimonialsSection.testimonials.1.avatarFallback"
      ),
      rating: Number(homeT("testimonialsSection.testimonials.1.rating")),
      dataAiHint: homeT("testimonialsSection.testimonials.1.dataAiHint"),
    },
    {
      quote: homeT("testimonialsSection.testimonials.2.quote"),
      name: homeT("testimonialsSection.testimonials.2.name"),
      company: homeT("testimonialsSection.testimonials.2.company"),
      avatarSrc: homeT("testimonialsSection.testimonials.2.avatarSrc"),
      avatarFallback: homeT(
        "testimonialsSection.testimonials.2.avatarFallback"
      ),
      rating: Number(homeT("testimonialsSection.testimonials.2.rating")),
      dataAiHint: homeT("testimonialsSection.testimonials.2.dataAiHint"),
    },
  ];

  const brandsList: BrandItem[] = [
    {
      name: homeT("trustedBySection.brands.0.name"),
      logoSrc: homeT("trustedBySection.brands.0.logoSrc"),
      dataAiHint: homeT("trustedBySection.brands.0.dataAiHint"),
    },
    {
      name: homeT("trustedBySection.brands.1.name"),
      logoSrc: homeT("trustedBySection.brands.1.logoSrc"),
      dataAiHint: homeT("trustedBySection.brands.1.dataAiHint"),
    },
    {
      name: homeT("trustedBySection.brands.2.name"),
      logoSrc: homeT("trustedBySection.brands.2.logoSrc"),
      dataAiHint: homeT("trustedBySection.brands.2.dataAiHint"),
    },
    {
      name: homeT("trustedBySection.brands.3.name"),
      logoSrc: homeT("trustedBySection.brands.3.logoSrc"),
      dataAiHint: homeT("trustedBySection.brands.3.dataAiHint"),
    },
    {
      name: homeT("trustedBySection.brands.4.name"),
      logoSrc: homeT("trustedBySection.brands.4.logoSrc"),
      dataAiHint: homeT("trustedBySection.brands.4.dataAiHint"),
    },
    {
      name: homeT("trustedBySection.brands.5.name"),
      logoSrc: homeT("trustedBySection.brands.5.logoSrc"),
      dataAiHint: homeT("trustedBySection.brands.5.dataAiHint"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center jos"
          data-jos_animation="fade-down"
          data-jos_duration="0.7"
        >
          {" "}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground font-headline">
            {heroTitleParts[0]}
            {heroTitleParts[1] && (
              <span className="text-primary">{heroTitleParts[1]}</span>
            )}
            {heroTitleParts[2]}
          </h1>{" "}
          <p
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80 jos"
            data-jos_animation="fade-up"
            data-jos_delay="0.2"
          >
            {heroT("subtitle")}
          </p>{" "}
          <div
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 jos"
            data-jos_animation="zoom-in"
            data-jos_delay="0.4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/get-started">{heroT("getStarted")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">{heroT("requestDemo")}</Link>
            </Button>
          </div>{" "}
          <div
            className="mt-16 max-w-4xl mx-auto jos"
            data-jos_animation="zoom-in-up"
            data-jos_delay="0.3"
          >
            <Image
              src="/images/illustrations/home.png"
              alt={heroT("aiChatbotInterfaceAlt")}
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="AI chatbot interface"
              priority
            />
          </div>
        </div>
      </section>{" "}
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 jos"
            data-jos_animation="fade"
            data-jos_delay="0.5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
              {homeT("featuresSection.title")}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              {homeT("featuresSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresList.map((feature: FeatureItem, index: number) => (
              <Card
                key={feature.title}
                className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card jos"
                data-jos_animation="fade-up"
                data-jos_duration="0.5"
                data-jos_delay={(index * 0.1).toFixed(1)}
              >
                <CardHeader className="items-center">
                  {index === 0 && (
                    <Brain className="h-10 w-10 text-primary mb-4" />
                  )}
                  {index === 1 && (
                    <Puzzle className="h-10 w-10 text-primary mb-4" />
                  )}
                  {index === 2 && (
                    <Clock className="h-10 w-10 text-primary mb-4" />
                  )}
                  {index === 3 && (
                    <Palette className="h-10 w-10 text-primary mb-4" />
                  )}
                  <CardTitle className="font-headline text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 jos"
            data-jos_animation="fade"
            data-jos_duration="0.5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
              {homeT("howItWorksSection.title")}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              {homeT("howItWorksSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stepsList.map((step: StepItem, index: number) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg jos"
                data-jos_animation="flip-down"
                data-jos_duration="0.6"
                data-jos_delay={(index * 0.15).toFixed(2)}
              >
                <div className="flex-shrink-0 mb-4 p-3 bg-accent/10 rounded-full">
                  {index === 0 && <Zap className="h-8 w-8 text-accent" />}
                  {index === 1 && <Settings2 className="h-8 w-8 text-accent" />}
                  {index === 2 && (
                    <MessageSquare className="h-8 w-8 text-accent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-headline">
                  {step.title}
                </h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>{" "}
          <div
            className="mt-12 text-center jos"
            data-jos_animation="fade-up"
            data-jos_delay="0.3"
          >
            <Image
              src="/images/illustrations/rag_illustration.png"
              alt={homeT("howItWorksSection.diagramAlt")}
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              data-ai-hint="workflow diagram"
            />
          </div>
        </div>
      </section>{" "}
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 jos"
            data-jos_animation="fade"
            data-jos_duration="0.5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
              {homeT("testimonialsSection.title")}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
              {homeT("testimonialsSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsList.map(
              (testimonial: TestimonialItem, index: number) => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card jos"
                  data-jos_animation="zoom-in"
                  data-jos_delay={(index * 0.1).toFixed(1)}
                >
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div
                      className="flex mb-2 jos"
                      data-jos_animation="fade-up"
                      data-jos_duration="0.7"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted-foreground/50"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-foreground/80 italic mb-4 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center mt-auto">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                        <AvatarImage
                          src={testimonial.avatarSrc}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.dataAiHint}
                        />
                        <AvatarFallback>
                          {testimonial.avatarFallback}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-foreground/70">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>{" "}
      {/* Trusted By Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 jos"
            data-jos_animation="fade"
            data-jos_duration="0.5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-headline">
              {homeT("trustedBySection.title")}
            </h2>
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 jos"
            data-jos_animation="fade-up"
            data-jos_delay="0.1"
          >
            {brandsList.map((brand: BrandItem, index: number) => (
              <div
                key={brand.name}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 jos"
                data-jos_animation="zoom-in"
                data-jos_delay={(index * 0.05 + 0.2).toFixed(2)}
              >
                <Image
                  src={brand.logoSrc}
                  alt={`${brand.name} ${homeT(
                    "trustedBySection.logoAltTextSuffix"
                  )}`}
                  width={130}
                  height={50}
                  className="object-contain"
                  data-ai-hint={brand.dataAiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Security/Trust Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className="md:w-1/2 jos"
              data-jos_animation="fade-right"
              data-jos_delay="0.1"
            >
              <Image
                src="/images/illustrations/security_illustration.png"
                alt={homeT("securitySection.imageAlt")}
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="data security"
              />
            </div>
            <div
              className="md:w-1/2 jos"
              data-jos_animation="fade-left"
              data-jos_duration="0.5"
              data-jos_delay="0.5"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline mb-6">
                {homeT("securitySection.title")}
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                {homeT("securitySection.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{securitySectionFeature1Parts[1]}</strong>
                    {securitySectionFeature1Parts[2]}
                  </span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{securitySectionFeature2Parts[1]}</strong>
                    {securitySectionFeature2Parts[2]}
                  </span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{securitySectionFeature3Parts[1]}</strong>
                    {securitySectionFeature3Parts[2]}
                  </span>
                </li>
              </ul>
              <Button asChild variant="link" className="mt-6 text-primary px-0">
                <Link href="/security-details">
                  {homeT("securitySection.learnMoreLink")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight font-headline jos"
            data-jos_animation="zoom-out"
            data-jos_delay="0.1"
          >
            {homeT("ctaSection.title")}
          </h2>
          <p
            className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-primary-foreground/90 jos"
            data-jos_animation="fade-up"
            data-jos_delay="0.1"
          >
            {homeT("ctaSection.description")}
          </p>
          <div
            className="mt-10 jos"
            data-jos_animation="zoom-in"
            data-jos_delay="0.2"
          >
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/get-started">{heroT("getStarted")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
