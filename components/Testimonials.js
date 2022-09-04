import Image from "next/image";
import ImageLoader from "../utils/imageLoader";
export default function Testimonials() {
  const data = [
    {
      name: "Harpreet",
      title: "Developer Relations Manager at Deci AI",
      quote:
        "I like the structure of the program and the topics covered. It provides an all around perspective of what it takes to be a great DevRel professional.",
      image: "/kennyy/image/upload/v1659294659/harpreet_vvpr4h.jpg",
    },
    {
      name: "Teri",
      title: "Dev Advocate",
      quote:
        "I think it is an excellent way to connect with individuals across different areas of specialization and learn practices you are unaware of in DevRel. ",
      image: "/kennyy/image/upload/v1659294659/teri_ukpn22.jpg",
    },
    {
      name: "Gloria Asuquo",
      title: "Dev Advocate",
      quote:
        "It was quite the best way to start my journey as a developer advocate. I gained knowledge, relationships and experience. ",
      image: "/kennyy/image/upload/v1659294659/gloria_eeuj08.jpg",
    },
    // {
    //   name: "Damilola Ezekiel",
    //   title: "Developer Advocate",
    //   quote:
    //     "I'd totally recommend this program for  anyone looking to get into the DevRel space. I learnt a lot during this program and I was able to work on projects that I would not have attempted. I also had the opportunity to connect with amazing people and my awesome mentor.",
    //   image: "/kennyy/image/upload/v1662130373/dami_tgicgp.jpg",
    // },
  ];
  return (
    <div className="container px-6 mx-auto ">
      <section className="mb-8 text-gray-800 text-center">
        <h2 className="text-5xl sm:mt-8 font-bold font-heading font-nunito mb-20 text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
          Hear from our past mentees
        </h2>

        <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          {data.map((person, index) => {
            return (
              <div key={index} className="mb-12 mt-8 md:mb-0">
                <div className="flex justify-center mb-6">
                  <Image
                    className="w-30 h-40 mx-auto rounded-full object-cover"
                    src={person.image}
                    alt={person.name}
                    loader={ImageLoader}
                    priority={true}
                    height={200}
                    width={200}
                  />
                </div>
                <h5 className="text-2xl font-bold mb-4 font-nunito">
                  {person.name}
                </h5>
                <h6 className="font-nunito text-2xl text-blue-accent font-bold mb-4">
                  {person.title}
                </h6>
                <p className="mb-4 text-2xl font-source-sans-pro">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  {person.quote}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
