
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function ForgotPasswordPage() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for forgot password logic
    toast({
      title: "Password Reset Requested",
      description: "If an account exists for this email, instructions to reset your password have been sent.",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="shadow-xl w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-headline text-primary">Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset your password.</CardDescription>
          <Breadcrumbs />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Remembered your password?{" "}
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
