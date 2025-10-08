'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load Stats component since it's below the fold
const Stats = dynamic(() => import('../components/Stats'), {
  loading: () => (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-black/60 backdrop-blur-lg border border-gray-800 rounded-xl p-10 shadow-2xl shadow-black/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-700 rounded mb-4"></div>
              <div className="h-16 w-24 bg-gray-700 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-700 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-700 rounded mb-4"></div>
              <div className="h-16 w-24 bg-gray-700 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false // Don't server-side render for better initial load performance
});

// Keep Hero component as direct import since it's above the fold
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <Suspense fallback={<div className="py-20 animate-pulse"><div className="h-64 bg-gray-800 rounded-xl mx-6"></div></div>}>
        <Stats />
      </Suspense>
    </div>
  );
}