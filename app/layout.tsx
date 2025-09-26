import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Navbar from './components/navbar/page';
import Footer from './components/footer/page';
import './globals.css';

export const metadata: Metadata = {
  title: 'Annie Tran',
  description: 'Annie Tran - Product Designer - AtthStudio',
  keywords: ['Annie Tran', 'Product Designer', 'Portfolio', 'AtthStudio'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar />
          <main className="main-layout">{children}</main>
          <SpeedInsights />
          <Footer />
        </body>
      </html>
      <Analytics />
    </>
  );
}
