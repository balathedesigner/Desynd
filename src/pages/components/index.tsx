import React from 'react';
import Link from 'next/link';
import { sidebarItems } from '@/data/sidebarItems';
import { type SidebarItem } from '@/data/sidebarItems';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Modal } from '@/components/ui/Modal';
import { Card } from '@/components/ui/Card';

const ComponentPreview = ({ item }: { item: SidebarItem }) => {
  const previews: { [key: string]: React.ReactNode } = {
    'Buttons': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-16">
          {/* Decorative background elements */}
          <div className="absolute -left-4 -top-2 w-6 h-6 bg-pink-200 rounded-full opacity-50"></div>
          <div className="absolute -right-2 bottom-0 w-4 h-4 bg-indigo-200 rounded-full opacity-50"></div>
          <div className="absolute left-0 bottom-2 w-3 h-3 bg-yellow-200 rounded-full opacity-50"></div>
          
          {/* Button body with 3D effect */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl transform perspective-1000">
            {/* Top surface with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 rounded-2xl shadow-inner"></div>
            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
              Button
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"></div>
          </div>
          {/* Button bottom/shadow */}
          <div className="absolute inset-x-0 top-10 h-12 bg-indigo-600/50 rounded-2xl -z-10 opacity-50 blur-sm"></div>
          {/* Side edge with gradient */}
          <div className="absolute inset-x-0 top-10 h-2 bg-gradient-to-r from-violet-700 to-indigo-700 rounded-b-2xl"></div>
        </div>
      </div>
    ),
    'Icons': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-24">
          {/* Decorative elements */}
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-2 w-4 h-4 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-60"></div>
          
          {/* Icon grid */}
          <div className="relative grid grid-cols-2 gap-3">
            {/* Icon 1 */}
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center transform hover:rotate-3 transition-transform">
              <div className="w-6 h-6 text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            {/* Icon 2 */}
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center transform hover:-rotate-3 transition-transform">
              <div className="w-6 h-6 text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Shine effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
        </div>
      </div>
    ),
    'Avatars': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-24">
          {/* Decorative elements */}
          <div className="absolute -right-2 -top-2 w-6 h-6 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-60"></div>
          <div className="absolute -left-1 bottom-0 w-4 h-4 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-60"></div>
          
          {/* Avatar group */}
          <div className="relative flex justify-center gap-4">
            {/* Avatar 1 */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">A</span>
                  </div>
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
            </div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/4 right-4 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Badges': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-24">
          {/* Decorative elements */}
          <div className="absolute -left-3 top-2 w-5 h-5 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 -bottom-1 w-4 h-4 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-60"></div>
          
          {/* Badge showcase */}
          <div className="relative flex flex-col gap-3 items-center">
            {/* Primary badge */}
            <div className="transform rotate-12">
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                <span className="text-white text-sm font-medium">New</span>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
            {/* Secondary badge */}
            <div className="transform -rotate-6">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg">
                <span className="text-white text-xs font-medium">Badge</span>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/3 right-4 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/4 left-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Breadcrumbs': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24">
          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 w-5 h-5 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-0 w-4 h-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60"></div>
          
          {/* Breadcrumb path */}
          <div className="relative flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-xl p-3 shadow-lg">
            <div className="flex items-center gap-2">
              {/* Home item */}
              <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500">
                <span className="text-white text-sm">Home</span>
              </div>
              {/* Separator */}
              <div className="w-4 h-px bg-gradient-to-r from-gray-300 to-gray-400"></div>
              {/* Second item */}
              <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <span className="text-white text-sm">Docs</span>
              </div>
              {/* Separator */}
              <div className="w-4 h-px bg-gradient-to-r from-gray-300 to-gray-400"></div>
              {/* Current item */}
              <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500">
                <span className="text-white text-sm">Page</span>
              </div>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/3 right-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Links': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-24">
          {/* Decorative elements */}
          <div className="absolute -right-2 top-0 w-5 h-5 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-60"></div>
          <div className="absolute -left-1 bottom-2 w-4 h-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-60"></div>
          
          {/* Links showcase */}
          <div className="relative flex flex-col gap-4 items-center justify-center">
            {/* Primary link */}
            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <span className="text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Click me
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </div>
            {/* Secondary link */}
            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Learn more →
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/4 right-4 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Pagination': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24">
          {/* Decorative elements */}
          <div className="absolute -left-2 top-2 w-5 h-5 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 -bottom-1 w-4 h-4 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-60"></div>
          
          {/* Pagination controls */}
          <div className="relative flex items-center justify-center gap-1 bg-white/50 backdrop-blur-sm rounded-xl p-3 shadow-lg">
            {/* Previous */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
              <span className="text-gray-400">←</span>
            </div>
            {/* Page 1 */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
              <span className="text-white">1</span>
            </div>
            {/* Page 2 */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
              <span className="text-gray-600">2</span>
            </div>
            {/* Next */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
              <span className="text-gray-400">→</span>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/3 right-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Stepper': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24">
          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 w-5 h-5 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-0 w-4 h-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-60"></div>
          
          {/* Stepper */}
          <div className="relative flex items-center justify-center">
            {/* Step 1 - Completed */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Connector */}
              <div className="absolute top-1/2 left-full w-8 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
            </div>
            {/* Step 2 - Current */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-medium">2</span>
              </div>
              {/* Connector */}
              <div className="absolute top-1/2 left-full w-8 h-1 bg-gradient-to-r from-blue-500 to-gray-200"></div>
            </div>
            {/* Step 3 - Upcoming */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow">
                <span className="text-gray-500 font-medium">3</span>
              </div>
            </div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/4 right-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
        </div>
      </div>
    ),
    'Table': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24 flex items-center justify-center">
          {/* Decorative elements */}
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-0 w-4 h-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60"></div>
          
          {/* Table illustration */}
          <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-3 shadow-lg w-36">
            {/* Header */}
            <div className="h-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg border-b border-gray-200 flex items-center px-2 gap-2">
              <div className="w-12 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
            </div>
            {/* Rows */}
            <div className="py-1 px-2 space-y-2">
              <div className="flex gap-2">
                <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-6 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/4 right-4 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Cards': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-32">
          {/* Background decorative elements */}
          <div className="absolute -right-3 -top-3 w-8 h-8 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-60"></div>
          <div className="absolute -left-2 bottom-0 w-6 h-6 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-60"></div>
          
          {/* Card body */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-white to-gray-50 rounded-xl transform perspective-1000 shadow-lg border border-gray-100/50">
            {/* Card content illustration */}
            <div className="absolute inset-0 p-3 flex flex-col gap-2">
              {/* Header with gradient */}
              <div className="w-12 h-2 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"></div>
              {/* Content lines with gradients */}
              <div className="w-full h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full"></div>
              <div className="w-3/4 h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full"></div>
              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 opacity-50"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-50"></div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-xl"></div>
          </div>
          {/* Card shadow with gradient */}
          <div className="absolute inset-x-4 top-26 h-28 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl -z-10 opacity-30 blur-md"></div>
          {/* Card edge with gradient */}
          <div className="absolute inset-x-0 top-26 h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-b-xl"></div>
          {/* Additional decorative elements */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-purple-200 to-violet-200 rounded-full"></div>
          {/* Sparkle effects */}
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Inputs': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24 flex items-center justify-center">
          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 w-5 h-5 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-0 w-4 h-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-60"></div>
          
          {/* Input illustration */}
          <div className="relative w-32">
            <div className="relative bg-white rounded-lg shadow-md p-2 border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>
                <div className="h-3 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
              </div>
              {/* Focus ring */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20"></div>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/3 right-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/4 left-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Form Controls': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24 flex items-center justify-center">
          {/* Decorative elements */}
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 -bottom-1 w-4 h-4 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-60"></div>
          
          {/* Controls group */}
          <div className="relative flex items-center gap-4">
            {/* Checkbox */}
            <div className="relative">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
            </div>
            {/* Radio */}
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 p-[2px] shadow-lg">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-violet-500"></div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
            </div>
            {/* Switch */}
            <div className="relative">
              <div className="w-10 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 p-[2px] shadow-lg">
                <div className="w-4 h-4 rounded-full bg-white shadow-sm transform translate-x-4"></div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
            </div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/4 right-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Select': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24 flex items-center justify-center">
          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 w-5 h-5 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-0 w-4 h-4 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-60"></div>
          
          {/* Select box */}
          <div className="relative w-32">
            <div className="relative bg-white rounded-lg shadow-md p-2 border border-gray-200">
              <div className="flex items-center justify-between gap-2">
                <div className="h-3 w-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {/* Focus ring */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20"></div>
            </div>
            {/* Dropdown preview */}
            <div className="absolute top-full left-0 right-0 mt-1">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1 transform scale-95 opacity-60">
                <div className="h-2 w-12 bg-gray-200 rounded-full mb-1"></div>
                <div className="h-2 w-14 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/3 right-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/4 left-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    ),
    'Modals': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-24 flex items-center justify-center">
          {/* Decorative elements */}
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gradient-to-br from-fuchsia-200 to-pink-200 rounded-full opacity-60"></div>
          <div className="absolute right-0 bottom-0 w-4 h-4 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-60"></div>
          
          {/* Modal illustration */}
          <div className="relative transform scale-90">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm rounded-xl"></div>
            {/* Modal */}
            <div className="relative w-32 bg-white rounded-xl shadow-xl">
              {/* Header */}
              <div className="p-2 border-b border-gray-100">
                <div className="w-16 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
              </div>
              {/* Body */}
              <div className="p-2 space-y-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
              </div>
              {/* Footer */}
              <div className="p-2 border-t border-gray-100 flex justify-end gap-2">
                <div className="w-8 h-4 rounded-md bg-gradient-to-r from-gray-200 to-gray-300"></div>
                <div className="w-8 h-4 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              </div>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          </div>
          {/* Sparkle effects */}
          <div className="absolute top-1/4 right-6 w-1 h-1 bg-white rounded-full shadow-lg"></div>
          <div className="absolute bottom-1/3 left-8 w-1 h-1 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    )
  };

  return (
    <div className="bg-blue-50/50 rounded-lg h-32 mb-4 overflow-hidden">
      {item.isComingSoon ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse w-32">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded mt-2 w-2/3 mx-auto"></div>
          </div>
        </div>
      ) : (
        previews[item.name] || (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse w-32">
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded mt-2 w-2/3 mx-auto"></div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default function ComponentsPage() {
  // Filter for component sections only
  const componentSections = sidebarItems.filter(section => 
    section.items.some((item: SidebarItem) => item.href?.startsWith('/components/'))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Component Library</h1>
      <p className="text-lg text-gray-600 mb-12">
        A modern, accessible React component library built with Tailwind CSS. Each component is designed to be flexible, customizable, and follows WAI-ARIA standards.
      </p>

      <div className="space-y-16">
        {componentSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items
                .filter((item: SidebarItem) => item.href?.startsWith('/components/'))
                .map((item: SidebarItem) => {
                  // Concise descriptions limited to 3 lines
                  const enhancedDescriptions: { [key: string]: string } = {
                    'Buttons': 'Versatile button components with multiple variants, sizes, and states. Includes support for icons, loading states, and full customization options. Built with accessibility in mind.',
                    'Icons': 'Comprehensive icon system with consistent scaling and colors. Includes essential UI icons and supports custom SVG imports. Fully customizable with theme support.',
                    'Avatars': 'Flexible avatar components for user profiles and media. Supports images, initials, and fallbacks with multiple sizes and shapes. Includes group and stack variants.',
                    'Badges': 'Informative badge components for status indicators and counters. Supports multiple variants, positions, and custom colors. Includes dot and numeric variants.',
                    'Breadcrumbs': 'Navigation component showing hierarchy with custom separators. Supports responsive behavior and dynamic item rendering. Includes microdata for SEO.',
                    'Links': 'Enhanced link components with built-in states and animations. Supports external links, custom styling, and keyboard navigation. Includes underline animations.',
                    'Pagination': 'Intuitive pagination component for data navigation. Supports various sizes, styles, and keyboard interactions. Includes ellipsis for large datasets.',
                    'Stepper': 'Multi-step progress indicator with customizable steps. Supports vertical and horizontal layouts with status indicators. Includes mobile-responsive design.',
                    'Table': 'Feature-rich table component with sorting and filtering. Supports custom cell rendering and responsive layouts. Includes accessibility features.',
                    'Cards': 'Versatile card components for content organization. Supports various layouts and interactive states. Includes hover and focus animations.',
                    'Inputs': 'Form input components with built-in validation states. Supports icons, hints, and error handling. Includes masked input options.',
                    'Form Controls': 'Comprehensive form components following WAI-ARIA practices. Includes checkboxes, radio buttons, and switches. Supports custom styling.',
                    'Select': 'Enhanced select component with search capabilities. Supports single and multi-select with custom rendering. Includes keyboard navigation.',
                    'Modals': 'Flexible modal dialog component with animations. Supports multiple sizes and custom positioning. Includes focus management.'
                  };

                  return (
                    <Link 
                      href={item.href || '#'} 
                      scroll={true} 
                      key={item.href} 
                      className={`group ${item.isComingSoon ? 'cursor-not-allowed' : ''}`}
                      onClick={(e) => item.isComingSoon && e.preventDefault()}
                    >
                      <div className={`border border-gray-200 rounded-lg overflow-hidden transition-all h-full ${
                        item.isComingSoon 
                          ? 'opacity-60' 
                          : 'hover:border-blue-500 hover:shadow-md'
                      }`}>
                        <ComponentPreview item={item} />
                        <div className="p-6 bg-white flex flex-col h-[140px]">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-lg font-medium ${
                              item.isComingSoon 
                                ? 'text-gray-600' 
                                : 'text-gray-900 group-hover:text-blue-600'
                            }`}>
                              {item.name}
                            </h3>
                            {item.isComingSoon && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Soon
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${
                            item.isComingSoon ? 'text-gray-500' : 'text-gray-600'
                          } line-clamp-3`}>
                            {enhancedDescriptions[item.name] || item.description || 'Coming soon'}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 