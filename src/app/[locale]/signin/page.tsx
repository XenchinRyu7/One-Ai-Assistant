

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { useScopedI18n } from '@/i18n/client';

export default function SignInPage() {
  const t = useScopedI18n('signInPage');
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: t('toastAttemptTitle'),
      description: t('toastAttemptDescription'),
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="shadow-xl w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-headline text-primary">{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">{t('emailLabel')}</Label>
              <Input id="email" type="email" placeholder={t('emailPlaceholder')} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('passwordLabel')}</Label>
              <Input id="password" type="password" placeholder={t('passwordPlaceholder')} required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
              {t('signInButton')}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <Link href="/forgot-password" passHref
            className="text-sm text-primary hover:underline">
              {t('forgotPasswordLink')}
          </Link>
          <p className="text-sm text-muted-foreground">
            {t('noAccount')}{" "}
            <Link href="/signup" passHref
              className="font-medium text-primary hover:underline">
                {t('signUpLink')}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
