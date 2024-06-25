import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata = {
  title: 'ATTH Studio',
  description: 'Portfolio Annie Tran ATTH Studio',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
      <Analytics />
    </>
  );
}
