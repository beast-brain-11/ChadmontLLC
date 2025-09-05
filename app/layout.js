import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chadmont LLC - Global Commodity Trading & Security Services',
  description: 'Chadmont LLC offers global commodity trading, including edible oils, sugar, spices, and metals, alongside specialized armed security and aviation services.',
  keywords: 'Commodity trading, global trade, armed security, aviation services, edible oils, sugar, spices, metals, logistics, Chadmont LLC',
  author: 'Chadmont LLC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}