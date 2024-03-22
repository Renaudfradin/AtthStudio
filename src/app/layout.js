import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "ATTH Studio",
  description: "Portfolio Annie Tran ATTH Studio",
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
