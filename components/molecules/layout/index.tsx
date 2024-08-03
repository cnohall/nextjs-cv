import Navigationbar from '../navbar';
import Footer from '../footer';
import styles from '../../../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Navigationbar />
      <main className={styles.fullHeight}>{children}</main>
      <Footer />
    </>
  );
}
