import AppButton from "../components/AppButton";
import ImageLoader from "../utils/imageLoader";
import Head from "next/head";
import Image from "next/image";
import SEO from "../components/SEO";

export default function Community(props) {
  function joinDiscord() {
    window.location.href = "https://discord.gg/dUQyb2mk4s";
  }
  return (
    <>
      <SEO
        url={`${props.url}/community`}
        openGraphType="website"
        schemaType="article"
        title="DX Mentorship Community"
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1659295000/community_rnohik.jpg"
      />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              height={700}
              width={900}
              loader={ImageLoader}
              priority={true}
              src="/kennyy/image/upload/v1659295000/community_rnohik.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900 font-nunito bg-gradient-to-r from-green-700 to-blue-600 text-transparent bg-clip-text">
              Wanna join us
              <br className="md:hidden lg:inline-block" />
              {/* <span className="text-3xl font-normal"></span> */}
              on Discord?
            </h1>
            <p className="mb-8 leading-relaxed font-source-sans-pro font-bold text-2xl">
              We have a thriving community of both established and entry-level
              developer advocates. There, we share opportunities, learn, and
              support each other through our individual and collective DevRel
              challenges.{" "}
            </p>
            <AppButton title="Join Us" onClick={joinDiscord} />
          </div>
        </div>
      </section>
    </>
  );
}
export const getServerSideProps = (context) => {
  return {
    props: {
      url: context?.req?.headers?.host,
    },
  };
};
