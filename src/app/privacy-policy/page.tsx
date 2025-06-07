
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-sm text-center text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to One AI Assistant ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [YourWebsite.com] and use our services (collectively, the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Services includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Services or when you choose to participate in various activities related to the Services, such as online chat and message boards.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Services, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Services.</li>
            <li><strong>Data From Chatbot Interactions:</strong> Content of conversations, queries, and feedback you provide when interacting with our AI chatbot. This data is used to improve our Services and the chatbot's performance.</li>
          </ul>

          <h2>3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Improve the efficiency and operation of the Services.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Services.</li>
            <li>Notify you of updates to the Services.</li>
            <li>Offer new products, services, and/or recommendations to you.</li>
            <li>Respond to customer service requests.</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
          </ul>

          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            Email: <a href="mailto:privacy@oneaiassistant.com" className="text-primary hover:underline">privacy@oneaiassistant.com</a>
            <br />
            Address: 123 AI Avenue, Tech City, TX 75001
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
