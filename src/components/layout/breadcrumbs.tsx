
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const pathToLabel = (pathSegment: string): string => {
  if (!pathSegment) return '';
  // Special case for FAQ to ensure correct casing
  if (pathSegment.toLowerCase() === 'faq') {
    return 'FAQs';
  }
  return pathSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbItems = [{ label: 'Home', href: '/' }];
  let currentPath = '';

  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      label: pathToLabel(segment),
      href: currentPath,
    });
  });

  // Do not render breadcrumbs if there's only "Home" (e.g., for non-existent top-level paths if any)
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto max-w-screen-xl px-4 py-3 mb-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-1.5 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            )}
            {index < breadcrumbItems.length - 1 && (
              <ChevronRight className="h-4 w-4 ml-1.5 text-muted-foreground" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
