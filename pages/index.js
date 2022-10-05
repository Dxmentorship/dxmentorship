import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/AppHero";
import DXTProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <SEO
        url={`${props.url}`}
        openGraphType="website"
        schemaType="article"
        title="DevRel Mentorship for developer advocates"
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg"
      />

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
