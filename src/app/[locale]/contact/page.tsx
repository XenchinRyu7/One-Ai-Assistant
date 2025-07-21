"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import React from 'react';
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { useScopedI18n } from '@/i18n/client';

export default function ContactPage() {
  const t = useScopedI18n('contactPage');
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: t('toastSuccessTitle'),
      description: t('toastSuccessDescription'),
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{t('title')}</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t('formCardTitle')}</CardTitle>
            <CardDescription>{t('formCardDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('firstNameLabel')}</Label>
                  <Input id="firstName" placeholder={t('firstNamePlaceholder')} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('lastNameLabel')}</Label>
                  <Input id="lastName" placeholder={t('lastNamePlaceholder')} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('emailLabel')}</Label>
                <Input id="email" type="email" placeholder={t('emailPlaceholder')} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t('subjectLabel')}</Label>
                <Input id="subject" placeholder={t('subjectPlaceholder')} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t('messageLabel')}</Label>
                <Textarea id="message" placeholder={t('messagePlaceholder')} rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                {t('sendMessageButton')}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{t('contactInfoCardTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('emailInfo')}</h3>
                  <a href="mailto:oneaiassistantindonesia@gmail.com" className="hover:text-primary">oneaiassistantindonesia@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('phoneInfo')}</h3>
                  <a href="tel:+1234567890" className="hover:text-primary">083869947022</a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{t('addressInfo')}</h3>
                  <p>{t('addressValue')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{t('operatingHoursCardTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-foreground/80">
              <p>{t('weekdaysHours')}</p>
              <p>{t('weekendHours')}</p>
              <p>{t('aiAssistantAvailability')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
