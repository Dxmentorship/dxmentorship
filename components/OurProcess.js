import Link from "next/link";
export default function DXTProcess() {
  const data = [
    {
      title: "Developer Experience Engineering",
      duration: "5 weeks",
      topics: [
        {
          title: "Open source contributions",
        },
        {
          title: "Demonstrative projects",
        },

        {
          title: "Code reviews",
        },
        {
          title: "Communication and feedback",
        },
        {
          title: "Internal feature development",
        },
      ],
    },
    {
      title: "Community and Education",
      duration: "4 weeks",
      topics: [
        {
          title: "Community building",
        },
        {
          title: "Conferences and events",
        },
        {
          title: "Marketing and sales",
        },
        {
          title: "Content creation",
        },
        {
          title: "Evangelism",
        },
      ],
    },
    {
      title: "Documentation and Technical writing",
      duration: "3 weeks",
      topics: [
        {
          title: "Documentation",
        },
        {
          title: "Technical writing",
        },
        {
          title: "Tones and fluency",
        },
        {
          title: "Conversion and happy paths",
        },
        {
          title: "User experience",
        },
      ],
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden font-source-sans-pro">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl title-font mb-8 text-gray-900 font-nunito text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600 font-extrabold">
            Developer Relations in Practice
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxedtext-gray-900 text-2xl">
            Different companies approach Developer Relations in different ways.
            I intend to take a general approach and train you for all possible
            strategies employed in the industry today. Combining my experience
            from different companies and the knowledge I&apos;ve gained working
            in the industry for 5 years, we can create a unique experience that
            prepares you for everything.
          </p>
        </div>
        <div className="flex flex-wrap -m-3">
          {data.map((item, index) => {
            return (
              <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h1 className="md:text-3xl lg:text-5xl text-lg text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    {item.title}
                  </h1>
                  <p>
                    I intend to take a general approach and train you for all
                    possible strategies employed in the industry today.
                    Combining my experience from different companies and the
                    knowledge I&apos;ve gained working in the industry for 5
                    years, we can create a unique experience that prepares you
                    for everything
                  </p>
                  <br />
                  {item.topics.map((topic, index) => {
                    return (
                      <p
                        key={index}
                        className="flex items-center text-gray-900 mb-2"
                      >
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-dxt-accents-3 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        {topic.title}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="font-nunito underline py-2 text-lg">
          <Link href="/curriculumn">
            <a className="text-blue-accent">See more on our Curriculumn page</a>
          </Link>
        </h3>
      </div>
    </section>
  );
}
