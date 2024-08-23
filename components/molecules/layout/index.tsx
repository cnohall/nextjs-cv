import Navigationbar from '../NavigationBar';
import Footer from '../Footer';
import styles from '../../../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navigationbar />
      <main className={styles.fullHeight}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
