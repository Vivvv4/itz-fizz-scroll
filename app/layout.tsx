import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itz Fizz — Make a little noise",
  description: "A bold, bright fizzy drink landing page with scroll-driven motion.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}