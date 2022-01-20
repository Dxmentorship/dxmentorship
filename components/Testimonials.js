export default function Testimonials() {
  const data = [
    {
      name: "John Doe",
      title: "CEO of DXTraining",
      quote:
        " I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      image:
        "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940",
    },
    {
      name: "John Doe",
      title: "CEO of DXTraining",
      quote:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      image:
        "https://images.pexels.com/photos/5325893/pexels-photo-5325893.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940",
    },
  ];
  return (
    <section class="relative 2xl:py-40 bg-dxt-bg-primary overflow-hidden">
      <img
        class="absolute top-0 right-0 -mr-80 -mt-80"
        src="zospace-assets/lines/circle.svg"
        alt=""
      />
      <img
        class="hidden lg:block absolute bottom-0 left-0 w-96"
        src="zospace-assets/lines/half-double-circle.svg"
        alt=""
      />
      <div class="relative container px-4 mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10 lg:mb-10">
            {/* <span class="text-lg text-blue-400 font-bold">Testimonials</span> */}
            <h2 class="mt-12 text-5xl font-bold font-heading text-white font-nunito">
              What people say
            </h2>
          </div>
          <div class="relative flex flex-wrap -mx-5 mb-20">
            {data.map((person, index) => {
              return (
                <div class="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                  <div class="flex -mx-4 lg:mx-0">
                    <div class="w-1/3 px-4">
                      <img
                        class="w-30 h-40 mx-auto rounded-full object-cover"
                        src={person.image}
                        alt=""
                      />
                    </div>
                    <div class="w-2/3 px-4">
                      <div class="relative inline-block mb-8 p-10 bg-dxt-accents-1 rounded-lg">
                        <div
                          class="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-dxt-accents-1"
                          style={{
                            clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
                          }}
                        ></div>
                        <img
                          class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14"
                          src="zospace-assets/images/quote-circle.svg"
                          alt=""
                        />
                        <p class="mb-8 text-lg text-gray-200 font-source-sans-pro">
                          {person.quote}
                        </p>
                        <h3 class="mb-1 text-2xl text-white font-bold font-nunito">
                          {" "}
                          {person.name}{" "}
                        </h3>
                        <p class="text-white font-nunito">{person.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
