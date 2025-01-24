import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 모든 페이지의의 메타데이터 정의
export const metadata: Metadata = {
  title: "Learn Next-JS",
  description: "pickle",
};

/**
 * 레이아웃의 <head> 등 메타데이터는 위에 MetaData 변수에서 설정 가능함
 * - 루트 레이아웃 컴포넌트 정의
 * - 모든 페이지에 공통적으로 적용될 레이아웃
 * - children = 해당 디렉토리의 page.tsx
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
