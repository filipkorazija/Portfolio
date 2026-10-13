import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Snowfall from '@/components/Snowfall';
import './globals.css';
const firaCode = Fira_Code({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-fira-code' });
export const metadata: Metadata = {
  title: 'Filip Koražija — Developer & Creator',
  description: 'Filip Koražija — developer, computer scientist, and creator. Explore web platforms, community projects, and the ideas behind them.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={firaCode.variable}><Snowfall />{children}</body></html>;
}