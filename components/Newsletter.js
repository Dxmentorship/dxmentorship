import Image from "next/image";
import ImageLoader from "../utils/imageLoader";
import { useState } from "react";
import axios from "axios";
export default function Newsletter() {
  // post form submission to api/subscribe
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post("/api/subscribe", {
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setError(error.response.data.message);
        console.log(error);
      });
  };
  return (
    <section className="pt-20 2xl:pt-40 p2-40 2xl:pb-80 overflow-hidden font-nunito">
      <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
        <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
          <Image
            alt="resource"
            loader={ImageLoader}
            priority={true}
            width={900}
            height={900}
            className="w-full h-full rounded-lg object-cover object-top"
            src="/kennyy/image/upload/v1659286662/newsletter_rc5g8w.jpg"
          />
        </div>
        <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
            Subscribe
          </h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
            Do you want to be kept in the loop? I&apos;ve got a newsletter for
            you. Drop your email below and I&apos;ll be sure to send DevRel
            resources your way
          </p>
          <form onSubmit={handleSubmit} className="flex items-stretch mt-12">
            <input
              className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="w-32 rounded-l-none  bg-dxt-accents-3 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none hover:bg-dxt-accents-1"
            >
              subscribe
            </button>{" "}
            <br />
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
}
