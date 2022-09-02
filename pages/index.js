import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/AppHero";
import DXTProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
export default function Home() {
  const OGImage =
    "https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg";
  return (
    <div className={styles.container}>
      <Head>
        <title>DevRel Mentorship for beginners</title>
        <meta
          name="description"
          content="An online program design to charge you into devrel"
        />
        {/* <meta property="og:url" content="https://www.devex.training" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online DevRel Mentorship Program designed to charge you ..."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career."
        />
        <meta property="og:image" content="/images/mentor.jpg" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kenny_io" />
        <meta
          name="twitter:title"
          content="Online DevRel Mentorship Program designed to charge you ..."
        />
        <meta
          name="twitter:description"
          content="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career."
        />
        <meta name="twitter:image" content={OGImage} />
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
