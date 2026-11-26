import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nopeus — Software Engineering & Digital Products',
  description:
    'Full-stack web platforms, custom software engineering, and digital product development by Nopeus DOO.',
  metadataBase: new URL('https://nopeus.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nopeus — Software Engineering & Digital Products',
    description:
      'Full-stack web platforms, custom software engineering, and digital product development.',
    url: 'https://nopeus.me',
    siteName: 'Nopeus',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800">
        {children}
      </body>
    </html>
  );
}
