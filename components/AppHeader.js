import AppButton from "./AppButton";
import AppLogo from "./AppLogo";
import Link from "next/link";
export default function Header() {
  function register() {
    window.location.href = "https://forms.gle/Lg2qTm42EMCQAkAN8";
  }
  return (
    // <header className="text-gray-300 body-font">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <Link href="/" className="mr-5">
    //       <a>
    //         <AppLogo />
    //       </a>
    //     </Link>
    //     <nav className="md:ml-auto font-bold flex flex-wrap items-center cursor-pointer font-source-sans-pro space-x-4 text-black">
          // <Link href="/curriculum">
          //   <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
          //     Curriculum
          //   </a>
          // </Link>
    //       <Link href="/faqs">
    //         <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
    //           {" "}
    //           FAQs
    //         </a>
    //       </Link>
    //       <Link href="/resources" className=" hover:text-gray-900">
    //         <a>Resources</a>
    //       </Link>
    //       <Link href="/community" className=" hover:text-blue-accent">
    //         <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
    //           {" "}
    //           Community
    //         </a>
    //       </Link>
    //       <AppButton title="Apply Now!" onClick={register} />
    //     </nav>
    //   </div>
    // </header>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <AppLogo />
        </a>
    </Link>
    {/* <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <AppLogo />
      <span class="ml-3 text-xl">Tailblocks</span>
    </a> */}
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer font-source-sans-pro">
      <Link href="/curriculum">
            <a className="mr-5 hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              Curriculum
            </a>
          </Link>
                <Link href="/faqs">
            <a className="mr-5 hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              FAQs
            </a>
          </Link>
                <Link href="/resources">
            <a className="mr-5 hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              Resources
            </a>
          </Link>
                <Link href="/community">
            <a className="mr-5 hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              Community
            </a>
          </Link>
    </nav>
    <AppButton title="Apply Now!" onClick={register} />
    {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ">Apply Now
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
    {/* <button class="font-nunito text-white bg-dxt-accents-3 border-0 inline-flex items-center py-1 px-3 focus:outline-none rounded text-base bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 hover:text-black mt-4 md:mt-0 ">Apply Now
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
  );
}

