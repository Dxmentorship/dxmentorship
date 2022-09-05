import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/AppHero";
import DXTProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";

export default function Home(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <SEO
        url={`${props.url}`}
        openGraphType="website"
        schemaType="article"
        title="DevRel Mentorship for developer advocates"
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1662410155/mentor_seo.jpg"
      />
      {/* <Head>
        <title>DevRel Mentorship for beginners</title>
        <meta
          property="og:title"
          content="Online DevRel Mentorship Program for dev advocates"
        />
        <meta
          property="og:description"
          content="An online program design to charge you into devrel"
        />
        <meta property="og:url" content="https://www.devex.training" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        <Hero />
        <DXTProcess />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}

export const getServerSideProps = (context) => {
  return {
    props: {
      url: context?.req?.headers?.host,
    },
  };
};
