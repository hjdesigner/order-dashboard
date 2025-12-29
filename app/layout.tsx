import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Hero } from '@/components';
import { Providers } from './providers';
import { FeatureFlagsBootstrap } from '../hook/useFeatureFlagsBootstrap';
import '../styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Order Dashboard',
  description:
    'Dashboard for viewing and tracking orders, with user selection and details of each delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Hero />
        <main>
          <Providers>
            <FeatureFlagsBootstrap />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
