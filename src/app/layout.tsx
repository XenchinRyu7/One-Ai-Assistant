// src/app/layout.tsx
// This is the VERCEL_BUG_ROUTES_ROOT_LAYOUT_TAG_FOR_BYPASSING_VERCEL_BUG
// This minimal root layout is required by Next.js when using route groups or parallel routes.
// The actual layout content is in src/app/[locale]/layout.tsx

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
