import Image from "next/image";
import ImageLoader from "../utils/imageLoader";
import Head from "next/head";
export default function Resources() {
  // const { myLoader } = ImageLoader();
  // const myLoader = ({ src, width, quality }) => {
  //   return `https://res.cloudinary.com/${src}?w=${width}&q=${quality || 75}`;
  // };
  const resources = [
    {
      title: "What is Developer Advocacy",
      description: "The curriculum for the DXTraining program",
      link: "https://www.freecodecamp.org/news/what-the-heck-is-a-developer-advocate-87ab4faccfc4",
      day: "18th",
      month: "January",
    },
    {
      title: "Who is a Developer Experience Advocate?",
      description: "The curriculum for the DXTraining program",
      link: "#",
      day: "12th",
      month: "April",
    },
    {
      title: "What is Developer Advocacy",
      description: "The curriculum for the DXTraining program",
      link: "https://developerrelations.com/what-is-developer-relations",
      day: "20th",
      month: "June",
    },
    {
      title: "The case for more advocates in Startups",
      description: "The curriculum for the DXTraining program",
      link: "/curriculum",
      day: "22nd",
      month: "July",
    },
    {
      title: "The journey to becoming a Developer Advocate",
      description: "The curriculum for the DXTraining program",
      link: "/curriculum",
      day: "24th",
      month: "Oct",
    },
  ];
  return (
    <section className="relative py-20 2xl:py-40 bg-dxt-bg-primary overflow-hidden">
      <Head>
        <title>Resources</title>
        <meta property="og:title" content="DevRel Resources" />
        <meta
          property="og:description"
          content="Resources to help you level-up your developer advocacy skills and experience"
        />
        <meta
          property="og:url"
          content="https://www.devex.training/resources"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kennyy/image/upload/v1662135847/resources_dmsd7l.webp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container px-4 mx-auto">
        <div className="mb-14 text-center">
          <h2 className="mt-8 text-5xl font-bold font-heading text-white font-nunito">
            Resource centre
          </h2>
        </div>
        <div className="flex flex-wrap -m-6">
          {resources.map((resource, index) => {
            return (
              <div key={index} className="relative w-full lg:w-1/3 p-6">
                <div className="relative z-10 bg-dxt-accents-1 rounded-lg">
                  <div className="relative mb-8 h-52">
                    <Image
                      alt="resource"
                      loader={ImageLoader}
                      width={940}
                      height={450}
                      className="w-full h-full rounded-lg object-cover object-top"
                      src="/kennyy/image/upload/v1659266188/reso_sffkfk.jpg"
                    />

                    <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                      <p className="text-xl font-bold">{resource.day}</p>
                      <p className="text-xs uppercase text-gray-300">
                        {resource.month}
                      </p>
                    </div>
                  </div>
                  <div className="px-14 pb-10">
                    <a
                      className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                      href={resource.link}
                    >
                      {resource.title}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-14 lg:mt-24 text-center">
          <a
            className="inline-block py-5 px-12 mr-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200"
            href="#"
          >
            See all
          </a>
        </div> */}
      </div>
    </section>
  );
}
