
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams } from '@/i18n/server';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">Terms of Service</CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-sm text-center text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and One AI Assistant ("we," "us," or "our"), concerning your access to and use of the [YourWebsite.com] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site” and our "Services"). You agree that by accessing the Site and/or Services, you have read, understood, and agree to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and the Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
          </p>

          <h2>3. User Representations</h2>
          <p>
            By using the Site or Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not under the age of 13; (5) you will not access the Site or Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site or Services for any illegal or unauthorized purpose; and (7) your use of the Site or Services will not violate any applicable law or regulation.
          </p>
          
          <h2>4. Prohibited Activities</h2>
          <p>
            You may not access or use the Site or Services for any purpose other than that for which we make the Site and Services available. The Site and Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          
          <h2>5. Service Availability and Modifications</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site or Services at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or Services.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms of Service and your use of the Site and Services are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.
          </p>

          <h2>7. Disclaimer</h2>
          <p>
            THE SITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or Services or to receive further information regarding use of the Site or Services, please contact us at:
            <br />
            Email: <a href="mailto:support@oneaiassistant.com" className="text-primary hover:underline">support@oneaiassistant.com</a>
            <br />
            Address: 123 AI Avenue, Tech City, TX 75001
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
