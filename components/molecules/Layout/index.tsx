import { Poppins } from 'next/font/google';
import Navigationbar from '../NavigationBar';
import Footer from '../Footer';

const poppins = Poppins({
  weight: ['400', '500', '900'],
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  return (
    <div className={poppins.className}>
      <Navigationbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
