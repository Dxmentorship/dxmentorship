import Tick from "../components/Tick";
import data from "../data.json";
import Head from "next/head";
export default function Curriculumn() {
  const { weeks } = data;

  // weeks.map((week, index) => console.log(week.events));

  return (
    <section className="text-gray-600 body-font font-nunito">
      <Head>
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
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="lg:w-2/3 mx-auto sm:text-4xl text-5xl title-font mb-4 font-extrabold text-gray-900 font-nunito text-transparent  bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
            Here&apos;s the Curriculumn we&apos;ll cover within the duration of
            the program
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
    // <section className="text-gray-600 body-font font-nunito">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="text-center mb-20">
    //       <h1 className="sm:text-3xl text-2xl font-heading text-center title-font text-gray-900 mb-4">
    //         Here&apos;s the Curriculumn we&apos;ll cover in the duration of the
    //         program
    //       </h1>
    //       <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
    //         In no particular order, we&apos;ll cover the topics below, go over
    //         their practical applications, and occassionally bring experts in
    //         these areas to teach and share their knowledge and experiences.
    //       </p>
    //     </div>

    //     {weeks.map((week, index) => (
    //       <div key={index} className="flex flex-wrap -m-4">
    //         <div className="lg:w-1/3 p-4">
    //           <div className="flex flex-col h-full">
    //             <div className="flex-grow">
    //               <h2 className="text-gray-900 text-lg font-heading title-font">
    //                 {week.title}
    //               </h2>
    //               <p className="text-gray-500">{week.description}</p>
    //             </div>
    //             <div className="flex-grow mt-auto">
    //               <div className="flex flex-wrap">
    // {week.events.descriptions.map(
    //   (event, index) =>
    //     event && (
    //       <div className="flex-grow">
    //         <Tick />
    //         <p className="text-gray-500">{event.description}</p>
    //       </div>
    //     )
    // )}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // ---------------------------------------------------------------------
  );
}
