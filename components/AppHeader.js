import AppButton from "./AppButton";
import AppLogo from "./AppLogo";
import Link from "next/link";
export default function Header() {
  function register() {
    window.location.href = "https://forms.gle/Lg2qTm42EMCQAkAN8";
  }
  return (
    <header className="text-gray-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="mr-5">
          <a>
            <AppLogo />
          </a>
        </Link>
        <nav className="md:ml-auto font-bold flex flex-wrap items-center cursor-pointer font-source-sans-pro space-x-4 text-black">
          <Link href="/curriculum">
            <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              Curriculum
            </a>
          </Link>
          <Link href="/faqs">
            <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              {" "}
              FAQs
            </a>
          </Link>
          <Link href="/post" className=" hover:text-gray-900">
            <a> Blog</a>
          </Link>

          <Link href="/resources">
            <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              {" "}
              Resources
            </a>
          </Link>
          <Link href="/community" className=" hover:text-blue-accent">
            <a className="hover:text-transparent bg-clip-text bg-gradient-to-r text-gray-900 hover:from-orange-600 hover:to-blue-600">
              {" "}
              Community
            </a>
          </Link>
          <AppButton title="Apply Now!" onClick={register} />
        </nav>
      </div>
    </header>
  );
}
