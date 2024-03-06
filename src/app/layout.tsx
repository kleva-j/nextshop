import { Suspense } from 'react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';

import { AdminBar } from './_components/AdminBar';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { InitTheme } from './_providers/Theme/InitTheme';
import { mergeOpenGraph } from './_utilities/mergeOpenGraph';
import { Providers } from './_providers';

import './_css/app.scss';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar />

          <Suspense fallback={<div>Loading...</div>}>
            {/* @ts-expect-error */}
            <Header />
          </Suspense>
          <main className="main">{children}</main>
          <Suspense fallback={<div>Loading...</div>}>
            {/* @ts-expect-error */}
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
};
