# One AI Assistant

A cutting-edge AI chatbot solution powered by advanced **Retrieval-Augmented Generation (RAG)** technology, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 **Advanced AI Technology**

One AI Assistant is not just another chatbot - it's an **intelligent AI assistant** that leverages:

- **🤖 RAG System (Retrieval-Augmented Generation)** - Advanced AI that retrieves relevant information from your knowledge base before generating responses
- **📚 Knowledge Base Integration** - Connects to your existing documentation, FAQs, and company knowledge
- **🧠 Contextual AI Responses** - Provides accurate, context-aware answers based on your specific data
- **⚡ Real-time Information Retrieval** - Always up-to-date responses from your latest knowledge base
- **🎯 Intelligent Automation** - Smart customer support that learns and improves over time

## Features

- 🌐 **Internationalization** - Support for multiple languages (English & Indonesian)
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 🤖 **Advanced AI-Powered** - RAG-based intelligent chatbot solutions
- 📱 **Mobile-First** - Optimized for all devices
- ⚡ **Performance** - Built with Next.js 13+ App Router
- 🔍 **SEO Optimized** - Dynamic meta tags for better search engine visibility
- 🧠 **Knowledge Base AI** - Contextual responses from your company data
- 🔄 **RAG Technology** - Retrieval-Augmented Generation for accurate answers

## Dynamic Meta Tags Implementation

This project implements dynamic meta tags for each page to improve SEO and social media sharing. Here's how it works:

### 1. Metadata Helper Utility

Located at `src/lib/metadata.ts`, this utility provides:

- **`generatePageMetadata()`** - Function to generate consistent metadata
- **`metadataConfigs`** - Predefined configurations for common pages

### 2. Implementation Examples

#### For Server Components (Recommended)

```typescript
// src/app/[locale]/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata, metadataConfigs } from "@/lib/metadata";
import { getScopedI18n } from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Locale } from "@/i18n/settings";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("hero");

  const title = t("title");
  const description = t("subtitle");
  
  return generatePageMetadata({
    title,
    description,
    keywords: metadataConfigs.home.keywords,
    path: '/',
    imagePath: metadataConfigs.home.imagePath,
    imageAlt: metadataConfigs.home.imageAlt,
    locale,
  });
}
```

#### For Client Components

Create a separate metadata file:

```typescript
// src/app/[locale]/pricing/metadata.ts
import type { Metadata } from 'next';
import { generatePageMetadata, metadataConfigs } from "@/lib/metadata";
import { getScopedI18n } from "@/i18n/server";
import { setStaticParamsLocale } from "next-international/server";
import type { Locale } from "@/i18n/settings";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("pricingPage");

  const title = t("title");
  const description = t("subtitle");
  
  return generatePageMetadata({
    title,
    description,
    keywords: metadataConfigs.pricing.keywords,
    path: '/pricing',
    imagePath: metadataConfigs.pricing.imagePath,
    imageAlt: metadataConfigs.pricing.imageAlt,
    locale,
  });
}
```

### 3. Available Metadata Configurations

The following predefined configurations are available:

- **`home`** - Homepage metadata (RAG system, knowledge base AI)
- **`about`** - About page metadata (AI technology experts)
- **`pricing`** - Pricing page metadata (advanced AI chatbot plans)
- **`contact`** - Contact page metadata (AI technology support)
- **`services`** - Services page metadata (RAG implementation, knowledge base development)
- **`faq`** - FAQ page metadata (AI technology support)
- **`ourTeams`** - Team page metadata (AI technology experts)
- **`ourClients`** - Clients page metadata (AI technology success stories)
- **`getStarted`** - Get Started page metadata (AI chatbot onboarding)
- **`privacyPolicy`** - Privacy Policy metadata (AI technology data protection)
- **`termsOfService`** - Terms of Service metadata (AI technology legal terms)
- **`securityDetails`** - Security Details metadata (advanced AI technology protection)
- **`whatsNew`** - What's New page metadata (latest AI technology features)

### 4. Custom Metadata

For custom pages, you can create your own configuration:

```typescript
return generatePageMetadata({
  title: "Custom Page Title",
  description: "Custom page description",
  keywords: ['custom', 'keywords', 'here'],
  path: '/custom-page',
  imagePath: '/images/custom-image.jpg',
  imageAlt: 'Custom page image',
  locale,
});
```

### 5. Generated Meta Tags

Each page will automatically generate:

- **Title** - Page title with site name
- **Description** - Meta description
- **Keywords** - SEO keywords (including RAG, knowledge base, AI technology terms)
- **Open Graph** - Social media sharing tags
- **Twitter Cards** - Twitter sharing tags
- **Canonical URLs** - SEO canonical links
- **Alternate Languages** - Hreflang tags for i18n
- **Robots** - Search engine crawling instructions

### 6. Benefits

- ✅ **SEO Optimized** - Better search engine visibility with AI technology keywords
- ✅ **Social Media Ready** - Rich previews on Facebook, Twitter, etc.
- ✅ **Multilingual** - Proper hreflang tags for international SEO
- ✅ **Consistent** - Standardized metadata across all pages
- ✅ **Maintainable** - Centralized configuration management
- ✅ **Type Safe** - Full TypeScript support
- ✅ **AI Technology Focused** - Emphasizes RAG system and knowledge base capabilities

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── page.tsx              # Homepage with metadata
│       ├── about/
│       │   └── page.tsx          # About page with metadata
│       ├── pricing/
│       │   ├── page.tsx          # Client component
│       │   └── metadata.ts       # Separate metadata file
│       └── ...
├── lib/
│   └── metadata.ts               # Metadata helper utility
└── ...
```

## Technologies Used

- **Next.js 13+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **next-international** - Internationalization
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library
- **🤖 RAG Technology** - Retrieval-Augmented Generation
- **📚 Knowledge Base AI** - Intelligent information retrieval
- **🧠 Advanced AI** - Contextual response generation

## AI Technology Highlights

### **RAG System (Retrieval-Augmented Generation)**
- **Intelligent Information Retrieval** - Finds relevant data from your knowledge base
- **Context-Aware Responses** - Generates answers based on retrieved information
- **Real-time Updates** - Always uses the latest information from your knowledge base
- **Accurate Answers** - Reduces hallucinations by grounding responses in actual data

### **Knowledge Base Integration**
- **Documentation Connection** - Links to your existing company documentation
- **FAQ Integration** - Incorporates your frequently asked questions
- **Product Information** - Access to your product catalogs and specifications
- **Company Policies** - Knowledge of your business rules and procedures

### **Advanced AI Capabilities**
- **Natural Language Processing** - Understands complex customer queries
- **Multi-language Support** - Works in multiple languages seamlessly
- **Learning & Improvement** - Gets smarter with each interaction
- **Scalable Architecture** - Handles growing knowledge bases efficiently

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
