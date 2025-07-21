---
mode: agent
---
### 1. Paket Subscription Baru (Sesuai subscripiton.md)

#### Paket Basic (Rp 300.000/bulan)
- 26 juta token per bulan
- ±26.000 request per bulan
- Max 1.500 token per request
- Max 500 output token
- 60 request per menit
- 1 API Key
- Upload 3 file, max 5MB per file
- Harga tahunan: Rp 3.420.000 (diskon 5%)

#### Paket Professional (Rp 900.000/bulan)
- 78 juta token per bulan
- ±78.000 request per bulan
- Max 2.000 token per request
- Max 800 output token
- 120 request per menit
- 3 API Key (rotating diizinkan)
- Upload 30 file, max 10MB per file
- Harga tahunan: Rp 9.720.000 (diskon 10%)

#### Paket Enterprise (Custom)
- 200 juta - 1 miliar token per bulan
- 200.000-1.000.000 request per bulan
- Token per request bebas (4.000-8.000 token)
- 200-500 request per menit
- API Key unlimited + token-rotating
- Upload file unlimited, max 50MB per file
- Harga custom (hubungi admin)

// Shared plan configurations for both client and admin
// This ensures consistency between subscription creation and payment processing

export interface PlanLimits {
  maxRequestsPerMinute: number;
  maxTokensPerRequest: number;
  maxOutputTokens: number;
}

export interface PlanConfig {
  name: string;
  displayName: string;
  price: number; // IDR monthly price
  priceYearly: number; // IDR yearly price
  priceUSD: number; // USD monthly price
  priceYearlyUSD: number; // USD yearly price
  features: string[];
  requestsLimit: number;
  tokenLimit: number;
  maxApiKeys: number;
  maxFileUploadSize: string;
  maxFileUploadCount: number;
  maxTeamMembers: number;
  supportLevel: 'basic' | 'professional' | 'enterprise';
  additionalLimits: PlanLimits;
}

export const PLAN_CONFIGS: Record<string, PlanConfig> = {
  basic: {
    name: "Basic",
    displayName: "Basic Plan",
    price: 300000, // Rp 300.000 per bulan
    priceYearly: 3420000, // Rp 3.420.000 per tahun (diskon 5%)
    priceUSD: 20, // $20 per bulan
    priceYearlyUSD: 228, // $228 per tahun (diskon 5%)
    features: [
      "26M tokens per month",
      "Max 1,500 tokens per request",
      "Max 500 output tokens",
      "60 requests per minute",
      "1 API Key",
      "Upload 3 files, max 5MB each"
    ],
    requestsLimit: 26000, // ±26.000 request/bulan
    tokenLimit: 26000000, // 26 juta token
    maxApiKeys: 1,
    maxFileUploadSize: "5MB",
    maxFileUploadCount: 3,
    maxTeamMembers: 1,
    supportLevel: "basic",
    additionalLimits: {
      maxRequestsPerMinute: 60,
      maxTokensPerRequest: 1500,
      maxOutputTokens: 500,
    },
  },
  professional: {
    name: "Professional",
    displayName: "Professional Plan",
    price: 900000, // Rp 900.000 per bulan
    priceYearly: 9720000, // Rp 9.720.000 per tahun (diskon 10%)
    priceUSD: 60, // $60 per bulan
    priceYearlyUSD: 648, // $648 per tahun (diskon 10%)
    features: [
      "78M tokens per month",
      "Max 2,000 tokens per request",
      "Max 800 output tokens",
      "120 requests per minute",
      "3 API Keys (rotating allowed)",
      "Upload 30 files, max 10MB each"
    ],
    requestsLimit: 78000, // ±78.000 request/bulan
    tokenLimit: 78000000, // 78 juta token
    maxApiKeys: 3,
    maxFileUploadSize: "10MB",
    maxFileUploadCount: 10,
    maxTeamMembers: 1,
    supportLevel: "professional",
    additionalLimits: {
      maxRequestsPerMinute: 120,
      maxTokensPerRequest: 2000,
      maxOutputTokens: 800,
    },
  },
  enterprise: {
    name: "Enterprise",
    displayName: "Enterprise Plan",
    price: 0, // Custom pricing
    priceYearly: 0, // Custom pricing
    priceUSD: 0, // Custom pricing
    priceYearlyUSD: 0, // Custom pricing
    features: [
      "200M - 1B tokens per month",
      "Free tokens per request (4,000-8,000 tokens)",
      "200,000-1,000,000 requests per month",
      "200-500 requests per minute",
      "Unlimited API Keys + token-rotating",
      "Unlimited file upload, max 50MB per file"
    ],
    requestsLimit: 1000000, // Max 1 juta request/bulan
    tokenLimit: 1000000000, // 1 miliar token
    maxApiKeys: 999, // Unlimited (represented as high number)
    maxFileUploadSize: "50MB",
    maxFileUploadCount: 999, // Unlimited
    maxTeamMembers: 50,
    supportLevel: "enterprise",
    additionalLimits: {
      maxRequestsPerMinute: 500,
      maxTokensPerRequest: 8000,
      maxOutputTokens: 8000, // Tidak dibatasi
    },
  },
};

// Helper function to get plan config
export function getPlanConfig(planName: string): PlanConfig | null {
  return PLAN_CONFIGS[planName.toLowerCase()] || null;
}

// Helper function to get plan price based on billing cycle and currency
export function getPlanPrice(
  planName: string, 
  billingCycle: 'monthly' | 'yearly',
  currency: 'USD' | 'IDR' = 'USD'
): number {
  const config = getPlanConfig(planName);
  if (!config) return 0;

  if (currency === 'USD') {
    return billingCycle === 'yearly' ? config.priceYearlyUSD : config.priceUSD;
  } else {
    return billingCycle === 'yearly' ? config.priceYearly : config.price;
  }
}

// Helper function to validate plan name
export function isValidPlanName(planName: string): boolean {
  return planName.toLowerCase() in PLAN_CONFIGS;
}

// Get all available plan names
export function getAvailablePlanNames(): string[] {
  return Object.keys(PLAN_CONFIGS);
}
