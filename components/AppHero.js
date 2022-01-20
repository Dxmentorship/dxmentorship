import ApplyButton from "./ApplyButton"

export default function Hero() {
    return (
        <section class="text-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900 font-nunito">Online training program designed to charge you into DevRel in 3 months
      </h1>
      <p class="mb-8 leading-relaxed font-source-sans-pro font-bold text-2xl">Get equipped with knowledge and information that
       will propel you into a fulfilling Developer Advocacy career. We'll be working with industry experts and real world scenarios 
       to prepare you for the job you've always wanted! </p>
      <div class="flex justify-center">
          <ApplyButton />
        {/* <button class="inline-flex text-white bg-dxt-accents-1 border-0 py-2 px-6 focus:outline-none hover:bg-dxt-accents-2 rounded text-lg">Apply Now</button> */}
       </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/images/learn.jpeg"/>
    </div>
  </div>
</section>
    )
}