import Tick from "../components/Tick";
import data from "../data.json";
import Head from "next/head";
import SEO from "../components/SEO";
export default function Curriculumn() {
  const { weeks } = data;

  console.log(SEO);

  return (
    <>
      <SEO
        url={`https://deploy-preview-6--dx-training.netlify.app/curriculum`}
        openGraphType="website"
        schemaType="article"
        title="Curriculum for DevRel Mentorship for developer advocates"
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1662410155/mentor_seo.jpg"
      />
      {/* <Head>
        <title>Our Curriculum</title>
        <meta property="og:title" content="Check out our curriculumn" />
        <meta
          property="og:description"
          content="All the things we'll cover in this cohort"
        />
        <meta
          property="og:url"
          content="https://www.devex.training/curriculum"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kennyy/image/upload/v1662134983/Curriculum_ykhxsv.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <section className="text-gray-600 body-font font-nunito">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="lg:w-2/3 mx-auto sm:text-4xl text-5xl title-font mb-4 font-extrabold text-gray-900 font-nunito text-transparent  bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Here&apos;s the Curriculumn we&apos;ll cover within the duration
              of the program
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxedtext-gray-900 text-2xl font-source-sans-pro text-black">
              In no particular order, we&apos;ll cover the topics below, go over
              their practical applications, and occassionally bring experts in
              these areas to teach and share their knowledge and experiences.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {weeks.map((week, index) => (
              <div key={index} className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <h2 className="text-xl font-bold mb-8  text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 ">
                  {week.description}
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left   -mb-1 space-y-2.5">
                  {week.events.descriptions.map(
                    (event, index) =>
                      event && (
                        <a key={index}>
                          <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <Tick />
                          </span>
                          {event.title}
                        </a>
                      )
                  )}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
