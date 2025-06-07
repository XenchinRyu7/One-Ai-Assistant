
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
// import { getStaticParams as i18nGetStaticParams } from '@/i18n/server'; // No longer needed

export default function SignUpPage() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for sign-up logic
    toast({
      title: "Sign Up Attempted",
      description: "Sign-up functionality is not yet implemented.",
      variant: "default",
    });
  };
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="shadow-xl w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-headline text-primary">Create Account</CardTitle>
          <CardDescription>Join One AI Assistant today!</CardDescription>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" type="text" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a strong password" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/signin" passHref
              className="font-medium text-primary hover:underline">
                Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

// export async function generateStaticParams() { // Removed
// return i18nGetStaticParams();
// }
