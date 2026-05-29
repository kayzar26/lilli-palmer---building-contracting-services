import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 select-none">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight size={10} className="text-gray-300 mx-1 shrink-0" />}
            {isLast || !item.url ? (
              <span className="text-[#BBA899] truncate max-w-[150px] md:max-w-xs">{item.label}</span>
            ) : (
              <Link href={item.url} className="hover:text-black transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
