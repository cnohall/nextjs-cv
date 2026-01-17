import { Poppins } from 'next/font/google';
import Navigationbar from '../NavigationBar';
import Footer from '../Footer';

const poppins = Poppins({
  weight: ['400', '500', '900'],
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  return (
    <div className={`${poppins.className} bg-[#171321] text-white min-h-screen flex flex-col`}>
      <Navigationbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
