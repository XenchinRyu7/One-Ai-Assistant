
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Lock, DatabaseZap, ServerCog } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams } from '@/i18n/server';

const securityFeatures = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Data Encryption",
    description: "All data, both in transit (using TLS/SSL) and at rest (using AES-256 or stronger), is encrypted to ensure confidentiality and integrity."
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Access Controls & Authentication",
    description: "Robust authentication mechanisms and role-based access controls (RBAC) are implemented to ensure only authorized personnel can access sensitive data and system configurations."
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: "Secure Infrastructure",
    description: "Our services are hosted on leading cloud providers (e.g., AWS, Google Cloud) that comply with stringent global security standards like ISO 27001, SOC 2, and HIPAA."
  },
  {
    icon: <ServerCog className="h-8 w-8 text-primary" />,
    title: "Regular Security Audits & Penetration Testing",
    description: "We conduct regular internal and third-party security audits and penetration tests to identify and remediate potential vulnerabilities."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Data Minimization & Retention Policies",
    description: "We collect only the data necessary to provide our services and have clear policies for data retention and secure deletion."
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Incident Response Plan",
    description: "A comprehensive incident response plan is in place to promptly address and mitigate any potential security breaches or incidents."
  }
];

export default function SecurityDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Commitment to Security</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
          At One AI Assistant, the security and privacy of your data are paramount. We are dedicated to implementing and maintaining robust security measures to protect your information and ensure the trustworthiness of our platform.
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {securityFeatures.map(feature => (
          <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start gap-4">
              {feature.icon}
              <div className="flex-1">
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/70">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="shadow-xl bg-secondary/30">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                 <Image 
                    src="https://placehold.co/500x400.png" 
                    alt="Secure data center"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md"
                    data-ai-hint="data center security"
                  />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-4">Continuous Improvement</h2>
                <p className="text-lg text-foreground/80 mb-6">
                    The security landscape is constantly evolving, and so are our efforts. We are committed to continuously monitoring, evaluating, and enhancing our security practices to protect against emerging threats and ensure compliance with industry best practices and regulatory requirements.
                </p>
                <p className="text-lg text-foreground/80">
                    If you have any security-related questions or concerns, please do not hesitate to <a href="/contact" className="text-primary hover:underline">contact our security team</a>.
                </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
