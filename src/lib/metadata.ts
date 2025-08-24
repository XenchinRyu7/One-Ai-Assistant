import type { Metadata } from 'next';
import type { Locale } from '@/i18n/settings';

interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  imagePath?: string;
  imageAlt?: string;
  locale: Locale;
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  imagePath = '/images/illustrations/home.png',
  imageAlt = 'One AI Assistant',
  locale,
}: MetadataConfig): Metadata {
  const fullPath = `https://oneaiassistant.id${path}`;
  
  return {
    title: title, // Will use template from layout: '%s | One AI Assistant'
    description: description,
    keywords: [
      ...keywords,
      'One AI Assistant',
      'AI chatbot',
      'artificial intelligence',
      'customer support',
      'automation'
    ],
    authors: [{ name: 'One AI Assistant Team' }],
    creator: 'One AI Assistant',
    publisher: 'One AI Assistant',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://oneaiassistant.id'),
    alternates: {
      canonical: path,
      languages: {
        'en': `/en${path}`,
        'id': `/id${path}`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: fullPath,
      siteName: 'One AI Assistant',
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 600,
          alt: imageAlt,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imagePath],
      creator: '@oneaiassistant',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Predefined metadata configurations for common pages
export const metadataConfigs = {
  home: {
    keywords: [
      'AI chatbot with RAG',
      'knowledge base AI assistant',
      'Retrieval-Augmented Generation chatbot',
      'intelligent AI responses',
      'contextual AI chatbot',
      'smart customer support',
      'AI-powered knowledge base',
      'advanced chatbot technology',
      'RAG system implementation',
      'intelligent automation'
    ],
    imagePath: '/images/illustrations/home.png',
    imageAlt: 'One AI Assistant - Advanced AI Chatbot with RAG System',
  },
  about: {
    keywords: [
      'about us',
      'company',
      'team',
      'vision',
      'values',
      'innovation',
      'customer centricity',
      'integrity',
      'simplicity',
      'AI assistant company'
    ],
    imagePath: '/images/illustrations/about_illustration.png',
    imageAlt: 'One AI Assistant Team',
  },
  pricing: {
    keywords: [
      'One AI Assistant pricing',
      'AI chatbot pricing',
      'chatbot plans',
      'subscription plans',
      'starter plan',
      'professional plan',
      'enterprise plan',
      'monthly billing',
      'annual billing',
      'cost effective chatbot'
    ],
    imagePath: '/images/illustrations/basic_plan.jpg',
    imageAlt: 'One AI Assistant Pricing Plans',
  },
  contact: {
    keywords: [
      'contact us',
      'support',
      'help',
      'inquiry',
      'customer service',
      'get in touch',
      'contact form'
    ],
    imagePath: '/images/illustrations/home.png',
    imageAlt: 'Contact One AI Assistant',
  },
  services: {
    keywords: [
      'services',
      'AI solutions',
      'chatbot services',
      'automation services',
      'customer support solutions',
      'business solutions'
    ],
    imagePath: '/images/illustrations/home.png',
    imageAlt: 'One AI Assistant Services',
  },
  faq: {
    keywords: [
      'FAQ',
      'frequently asked questions',
      'help',
      'support',
      'common questions',
      'troubleshooting'
    ],
    imagePath: '/images/illustrations/home.png',
    imageAlt: 'One AI Assistant FAQ',
  },
  ourTeams: {
    keywords: [
      'Saeful Rohman',
      'Dadan Abdillah',
      'founders',
      'team',
      'leadership',
      'company team',
      'about team',
      'team members',
      'founders profile'
    ],
    imagePath: '/images/teams/teams.jpg',
    imageAlt: 'One AI Assistant Team Members - Saeful Rohman & Dadan Abdillah',
  },
  ourClients: {
    keywords: [
      'clients',
      'customers',
      'case studies',
      'success stories',
      'client testimonials',
      'business clients',
      'customer success'
    ],
    imagePath: '/images/illustrations/home.png',
    imageAlt: 'One AI Assistant Clients',
  },
  getStarted: {
    keywords: [
      'get started',
      'free trial',
      'demo',
      'sign up',
      'onboarding',
      'start using',
      'trial period'
    ],
    imagePath: '/images/illustrations/basic_plan.jpg',
    imageAlt: 'Get Started with One AI Assistant',
  },
  privacyPolicy: {
    keywords: [
      'privacy policy',
      'data protection',
      'privacy',
      'data privacy',
      'personal data',
      'GDPR',
      'privacy terms'
    ],
    imagePath: '/images/illustrations/security_illustration.png',
    imageAlt: 'Privacy Policy',
  },
  termsOfService: {
    keywords: [
      'terms of service',
      'terms and conditions',
      'legal terms',
      'service agreement',
      'user agreement',
      'terms of use'
    ],
    imagePath: '/images/illustrations/security_illustration.png',
    imageAlt: 'Terms of Service',
  },
  securityDetails: {
    keywords: [
      'security',
      'data security',
      'cybersecurity',
      'privacy protection',
      'secure chatbot',
      'data protection',
      'security features'
    ],
    imagePath: '/images/illustrations/security_illustration.png',
    imageAlt: 'Security Details',
  },
  whatsNew: {
    keywords: [
      'whats new',
      'new features',
      'updates',
      'latest features',
      'product updates',
      'changelog',
      'new releases'
    ],
    imagePath: '/images/illustrations/launch_celebration.png',
    imageAlt: 'What\'s New - Latest Features',
  },
  notFoundExample: {
    keywords: [
      '404',
      'page not found',
      'error page',
      'not found',
      'broken link'
    ],
    imagePath: '/images/illustrations/home.png',
    imageAlt: '404 Page Not Found',
  },
};
