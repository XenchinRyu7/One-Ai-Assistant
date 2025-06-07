// This file can be removed or act as a redirect if all traffic is forced to /[locale]
// For now, middleware should handle redirecting to the default locale.
// Or, make this a component that redirects.
// For simplicity with `next-international` and `rewrite` strategy,
// this might not be hit if the middleware correctly rewrites `/` to `/[defaultLocale]`.
// If `urlMappingStrategy: 'redirect'` is used, this page would be hit before redirect.

// Keeping it minimal for now. If you encounter issues with the root path,
// this page might need to explicitly redirect or be structured differently
// based on the chosen URL mapping strategy.

export default function RootPage() {
  // This page should ideally not be rendered if middleware is set up correctly
  // to redirect or rewrite to /[locale]
  return null;
}
