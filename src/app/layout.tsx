import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nopeus',
  description: 'Nopeus — Podgorica, Montenegro',
  metadataBase: new URL('https://nopeus.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nopeus',
    description: 'Podgorica, Montenegro',
    url: 'https://nopeus.me',
    siteName: 'Nopeus',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#081021',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full overflow-hidden bg-[#081021]">
      <body className="h-dvh w-full overflow-hidden bg-[#081021] text-[#f4f7fc] antialiased selection:bg-[#3b82f6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
