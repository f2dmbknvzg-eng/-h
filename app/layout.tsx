import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'そうしんファーム｜奥京都亀岡の貸切BBQコテージ',
  description:
    '京都・亀岡の里山に佇む貸切BBQコテージ施設。完全個別BBQスペース、プライベートコテージ、ペット歓迎ルーム、農業体験。奥京都の自然の中で、あなただけの時間を。',
  keywords: '亀岡 コテージ BBQ 貸切 ペット 奥京都 農業体験 そうしんファーム',
  openGraph: {
    title: 'そうしんファーム｜奥京都亀岡の貸切BBQコテージ',
    description:
      '京都・亀岡の里山に佇む貸切BBQコテージ施設。完全個別BBQスペース、プライベートコテージ、ペット歓迎ルーム、農業体験。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
