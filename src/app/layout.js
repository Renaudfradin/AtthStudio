import "./globals.css";

export const metadata = {
  title: "AT Studio",
  description: "Portfolio Annie Tran AT Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
