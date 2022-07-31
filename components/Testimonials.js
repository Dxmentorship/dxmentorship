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
        "I think it is an excellent way to connect with individuals across different areas of specialization and learn practices you are unaware of in Devrel. ",
      image: "/kennyy/image/upload/v1659294659/teri_ukpn22.jpg",
    },
    {
      name: "Gloria Asuquo",
      title: "Dev Advocate",
      quote:
        "It was quite the best way to start my journey as a developer advocate. I gained knowledge, relationships and experience. ",
      image: "/kennyy/image/upload/v1659294659/gloria_eeuj08.jpg",
    },
  ];
  return (
    <section className="relative py-4 bg-dxt-bg-primary ">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 lg:mb-10">
            {/* <span className="text-lg text-blue-400 font-bold">Testimonials</span> */}
            <h2 className="mt-12 sm:mt-8 text-5xl font-bold font-heading text-white font-nunito">
              From past mentees
            </h2>
          </div>
          <div className="relative flex flex-wrap -mx-5 mb-20">
            {data.map((person, index) => {
              return (
                <div key={index} className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                  <div className="flex -mx-4 lg:mx-0">
                    <div className="w-1/3 px-4">
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
                    <div className="w-2/3 px-4">
                      <div className="relative inline-block mb-8 p-10 bg-dxt-accents-1 rounded-lg">
                        <div
                          className="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-dxt-accents-1"
                          style={{
                            clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
                          }}
                        ></div>
                        {/* <img
                          className="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14"
                          src="zospace-assets/images/quote-circle.svg"
                          alt=""
                        /> */}
                        <p className="mb-8 text-lg text-gray-200 font-source-sans-pro">
                          {person.quote}
                        </p>
                        <h3 className="mb-1 text-2xl text-white font-bold font-nunito">
                          {" "}
                          {person.name}{" "}
                        </h3>
                        <p className="text-white font-nunito">{person.title}</p>
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
