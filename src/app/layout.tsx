// This is the root layout component for your Next.js app.
// It applies to all routes. It's a good place to add global
// styles or context providers.

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
