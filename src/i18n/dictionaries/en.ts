
// src/i18n/dictionaries/en.ts
export default {
  navbar: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    pricing: 'Pricing',
    more: 'More',
    contact: 'Contact',
    signin: 'Sign In',
    signup: 'Sign Up',
    whatsNew: "What's New",
    ourTeams: 'Our Teams',
    ourClients: 'Our Clients',
    faqs: 'FAQs',
    language: 'Language',
    english: 'English',
    indonesian: 'Indonesian',
    themeToggle: 'Toggle theme',
  },
  hero: {
    title: 'Empower Your Website with <1>One AI Assistant</1>',
    subtitle: 'Seamlessly integrate our intelligent chatbot to provide instant, accurate answers using your own data, and elevate your customer support.',
    getStarted: 'Get Started Free',
    requestDemo: 'Request a Demo',
  },
  footer: {
    brandDescription: 'OneAiAssistant helps your business provide automated, intelligent, and personalized customer service with LLM chatbot technology that can be customized to your website needs.',
    websiteLinkText: 'www.oneaiassistant.com',
    primaryPages: 'Primary Pages',
    utilityPages: 'Utility Pages',
    forgotPassword: 'Password Reset',
    notFoundExample: '404 Not Found',
    subscribeNewsletter: 'Subscribe To Our Newsletter',
    subscribePlaceholder: 'Enter your email',
    subscribeButtonAlt: 'Subscribe to newsletter',
    subscribeHint: 'Get weekly updates on new features and promotions.',
    copyright: '© {year} One AI Assistant. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  pricingPage: {
    title: "Flexible Pricing for Every Need",
    subtitle: "Choose the plan that best fits your business goals and scale as you grow. All plans include our core AI chatbot features.",
    monthly: "Monthly",
    annually: "Annually",
    usd: "USD",
    idr: "IDR",
    selectCurrency: "Select Currency",
    popular: "Popular",
    save20Percent: "Save 20% with annual billing!",
    
    starterPlanName: "Starter",
    starterPlanDescription: "Perfect for small businesses and startups looking to automate basic customer queries.",
    starterFeatures: [
      "Up to 1,000 interactions/month",
      "Basic RAG capabilities",
      "Standard knowledge base integration",
      "Email support"
    ],
    chooseStarter: "Choose Starter",

    professionalPlanName: "Professional",
    professionalPlanDescription: "Ideal for growing businesses needing more power and customization.",
    professionalFeatures: [
      "Up to 5,000 interactions/month",
      "Advanced RAG capabilities",
      "Multiple knowledge base integrations",
      "Priority email support",
      "Basic analytics"
    ],
    chooseProfessional: "Choose Professional",

    enterprisePlanName: "Enterprise",
    enterprisePlanDescription: "Tailored solutions for large organizations with specific requirements.",
    enterpriseFeatures: [
      "Unlimited interactions",
      "Premium RAG & LLM fine-tuning",
      "Custom integrations (CRM, etc.)",
      "Dedicated account manager",
      "Advanced analytics & reporting",
      "SLA & 24/7 premium support"
    ],
    
    contactSales: "Contact Sales",
    customSolutionTitle: "Need a Custom Solution?",
    customSolutionSubtitle: "We can tailor a plan specifically for your enterprise needs. Get in touch with our sales team for a personalized quote.",
  }
} as const;
    