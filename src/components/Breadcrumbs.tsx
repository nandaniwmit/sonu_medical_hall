import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 sm:px-0 font-mono">
      <ol className="flex items-center space-x-1.5 text-xs text-gray-400">
        <li>
          <Link to="/" className="hover:text-blue-400 flex items-center gap-1 transition">
            <Home className="w-3 h-3 text-gray-500" />
            <span className="text-gray-400">SYS_ROOT</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-1.5">
            <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
            {item.path ? (
              <Link to={item.path} className="hover:text-blue-400 transition text-gray-400">
                {item.label}
              </Link>
            ) : (
              <span className="font-bold text-gray-200" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
