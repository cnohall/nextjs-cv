import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Writing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Nohall's Writing`}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Posts written by Chris Nohall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='my-3'>Writing</h1>
    </div>
  )
}
