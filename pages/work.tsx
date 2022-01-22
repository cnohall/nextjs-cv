import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Nohall's Work Experience`}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Chris Nohall's Work Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='my-3'>Work</h1>
    </div>
  )
}
