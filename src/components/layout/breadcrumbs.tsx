
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

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="my-3">
      <ol className="flex items-center justify-center space-x-1.5 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-semibold text-primary">{item.label}</span>
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
