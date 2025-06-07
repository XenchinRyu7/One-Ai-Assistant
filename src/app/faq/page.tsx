
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const faqItems = [
  {
    question: "What is One AI Assistant?",
    answer:
      "One AI Assistant is an advanced AI-powered chatbot platform that uses Retrieval Augmented Generation (RAG) to provide intelligent, context-aware responses based on your business's specific knowledge base. It's designed to enhance customer support and engagement on your website.",
  },
  {
    question: "How does the RAG system work?",
    answer:
      "Retrieval Augmented Generation (RAG) combines the power of large language models (LLMs) with information retrieval from your provided documents or data sources. When a user asks a question, the system first retrieves relevant information from your knowledge base and then uses the LLM to generate a comprehensive and accurate answer based on that retrieved context.",
  },
  {
    question: "What kind of data can I use for the knowledge base?",
    answer:
      "You can use various types of data, including PDF documents, text files, website content (via sitemap or direct URLs), FAQs, product manuals, and more. Our system is designed to process and understand a wide range of unstructured and structured data.",
  },
  {
    question: "Is it difficult to integrate One AI Assistant into my website?",
    answer:
      "No, integration is designed to be simple. We provide a small JavaScript snippet that you can easily add to your website's code. No complex coding is required, and you can typically have the chatbot running in minutes.",
  },
  {
    question: "Can I customize the chatbot's appearance and responses?",
    answer:
      "Yes, One AI Assistant is highly customizable. You can tailor its appearance (colors, logo, chat widget style) to match your brand. You can also customize its conversational style, welcome messages, and pre-defined responses for common queries.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer various levels of support depending on your plan, ranging from email support for basic plans to dedicated account managers and 24/7 premium support for enterprise clients. We also provide comprehensive documentation and an online knowledge base.",
  },
  {
    question: "How secure is my data with One AI Assistant?",
    answer:
      "Data security is a top priority for us. We employ industry-standard security measures, including data encryption in transit and at rest, secure infrastructure, and access controls to protect your information. Please refer to our Privacy Policy for more details.",
  },
  {
    question: "What are the pricing plans?",
    answer:
      "We offer flexible pricing plans to suit businesses of all sizes, from startups to large enterprises. Please visit our Pricing page for detailed information on each plan and its features.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
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
