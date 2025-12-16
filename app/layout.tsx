import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './styles/globals.css';
import { Hero } from '@/components';

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
        {children}
      </body>
    </html>
  );
}
