import ApplyButton from "./ApplyButton"
import AppLogo from "./AppLogo"
export default function Header() {
    return (
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <AppLogo />
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer font-source-sans-pro">
            <a class="mr-5 hover:text-gray-900">Curriculumn</a>
            <a class="mr-5 hover:text-gray-900">FAQs</a>
            <a class="mr-5 hover:text-gray-900">Expectations</a>
            {/* <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Apply Now
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
          <ApplyButton />
        </div>
      </header>
    )
  }
  