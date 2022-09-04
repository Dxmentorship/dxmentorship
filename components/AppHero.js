import AppButton from "./AppButton";
import Image from "next/image";
import ImageLoader from "../utils/imageLoader";
export default function Hero() {
  function register() {
    window.location.href = "https://uoo376jx6hb.typeform.com/to/zVymBRsP";
  }
  return (
    <section className="text-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-extrabold text-gray-900 font-nunito  text-transparent  bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
            DevRel mentorship program designed to charge you into DevRel in 3
            months
          </h1>
          <p className="mb-8 leading-relaxed font-source-sans-pro font-bold text-2xl">
            Get equipped with knowledge and information that will propel you
            into a fulfilling Developer Advocacy career. We&apos;ll be working
            with industry experts and real world scenarios to prepare you for
            the job you&apos;ve always wanted!{" "}
          </p>
          <div className="flex justify-center">
            <AppButton title="Apply Now" onClick={register} />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={600}
            width={800}
            loader={ImageLoader}
            priority={true}
            src="/kennyy/image/upload/v1659295000/learn_jrodeh.jpg"
          />
        </div>
      </div>
    </section>
  );
}
