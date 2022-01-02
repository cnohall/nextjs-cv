import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Summary() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Summary</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Project Summary
        </h1>
      </main>
    </div>
  )
}
