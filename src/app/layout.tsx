// src/app/layout.tsx
import './globals.css';
import Header from '../components/Header'
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  icons: {
    icon: '/avatar.png',         // favicon for all platforms
    apple: '/avatar.png',        // Apple devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20 section-spacing">{children}</main>
        <Footer />
      </body>
    </html>
  );
}