import { Poppins } from 'next/font/google';
import Navigationbar from '../NavigationBar';
import Footer from '../Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  weight: ['400', '500', '900'],
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`${poppins.className} bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] text-text-primary min-h-screen flex flex-col`}
    >
      <SpeedInsights />
      <Navigationbar />
      <main className="flex-grow max-w-5xl mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
