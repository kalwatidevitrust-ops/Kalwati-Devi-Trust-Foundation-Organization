import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Kalwati Devi Trust Foundation | Empowering Women',
  description: 'Kalwati Devi Trust Foundation supports women across India by providing skill training, resources, and opportunities to earn and grow independently.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans bg-[#0D5C4A] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
