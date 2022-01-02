import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function GongdoTech() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Gongdo Tech`}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Info about Gongdo Tech
        </h1>
      </main>
    </div>
  )
}