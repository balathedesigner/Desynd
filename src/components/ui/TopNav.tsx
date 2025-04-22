'use client';

import React from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface TopNavProps {
  items?: NavItem[];
}

export function TopNav({ items = [] }: TopNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const defaultItems: NavItem[] = [
    { label: 'Features', href: '/features' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
  ];

  const navItems = items.length > 0 ? items : defaultItems;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-black">
                Desynd
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="/login">
              <Button variant="ghost" size="default">
                Sign in
              </Button>
            </a>
            <a href="/signup">
              <Button variant="default" size="default">
                Sign up
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-1">
              <a
                href="/login"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Sign in
              </a>
              <a
                href="/signup"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 