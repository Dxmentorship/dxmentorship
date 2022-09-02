import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/AppHero";
import DXTProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevRel Mentorship for beginners</title>
        <meta
          name="description"
          content="An online program design to charge you into devrel"
        />
        <meta property="og:url" content="https://www.devex.training/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online DevRel Mentorship Program designed to charge you ..."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career. We'll be working with industry experts and real world scenarios to prepare you for the job you've always wanted!"
        />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <DXTProcess />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}
