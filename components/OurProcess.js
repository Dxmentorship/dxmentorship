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
          title: "Communications and feedback",
        },
        {
          title: "Code reviews",
        },
        {
          title: "Communications and feedback",
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
    <section class="text-gray-600 body-font overflow-hidden font-source-sans-pro">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-8 text-gray-900 font-nunito">
            Developer Relations in Practice
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxedtext-gray-900 text-2xl">
            Different companies approach Developer Relations in different ways.
            I intend to take a general approach and train you for all possible
            strategies employed in the industry today. Combining my experience
            from different companies and the knowledge I've gained working in
            the industry for 5 years, we can create a unique experience that
            prepares you for everything.
          </p>
        </div>
        <div class="flex flex-wrap -m-3">
          {data.map((item, index) => {
            return (
              <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
                <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-bold text-blue-accent">
                    {item.duration}
                  </h2>
                  <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    {item.title}
                  </h1>
                  <p>
                    I intend to take a general approach and train you for all
                    possible strategies employed in the industry today.
                    Combining my experience from different companies and the
                    knowledge I've gained working in the industry for 5 years,
                    we can create a unique experience that prepares you for
                    everything
                  </p>
                  <br />
                  {item.topics.map((topic, index) => {
                    return (
                      <p class="flex items-center text-gray-900 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-dxt-accents-3 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
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
      </div>
    </section>
  );
}
