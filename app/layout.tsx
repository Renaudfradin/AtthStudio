import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Navbar from './components/navbar/page';
import Footer from './components/footer/page';
import './globals.css';

export const metadata: Metadata = {
  title: 'Annie Tran',
  description: 'Annie Tran - Product Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Navbar />
          {children}
          <SpeedInsights />
          <Footer />
        </body>
      </html>
      <Analytics />
    </>
  );
}
