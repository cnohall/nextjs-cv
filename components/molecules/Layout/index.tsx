import { Poppins } from 'next/font/google';
import Navigationbar from '../NavigationBar';
import Footer from '../Footer';
import styles from '../../../styles/Home.module.css';

const poppins = Poppins({
  weight: ['400', '500', '900'],
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  return (
    <div className={poppins.className}>
      <Navigationbar />
      <main className={styles.fullHeight}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
