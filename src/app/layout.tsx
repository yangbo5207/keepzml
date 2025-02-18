import type { Metadata } from 'next'
import Permission from '@/app/components/permission'
import { Geist, Geist_Mono } from 'next/font/google'
import NavHeader from 'app/components/nav-header'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'usehook - 前端顶级精英俱乐部',
  description: '最好的前端学习网站, react, react19, react hooks, zustand',
  keywords: 'react, react19, react hooks, zustand',
  authors: [{ name: '这波能反杀' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh' suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link href="https://framerusercontent.com/images/YRd2KCq4G2aXNg15aHvl7AtcGQ.png" rel="icon" media="(prefers-color-scheme: light)"></link>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Permission>
          <NavHeader />
          {children}
        </Permission>
      </body>
    </html>
  );
}
