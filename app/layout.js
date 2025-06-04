import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chadmont LLC - Global Commodity Trading',
  description: 'Chadmont LLC bridges the gap between commodity suppliers and buyers on the global market with flexibility, innovation, and safety.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}