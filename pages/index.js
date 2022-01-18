import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/AppHero'
import DXTProcess from '../components/OurProcess'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DXTraining</title>
        <meta name="description" content="An online program design to charge you into devrel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <DXTProcess />
      </main>
    </div>
    
  )
}
