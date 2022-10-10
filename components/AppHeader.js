import AppButton from "./AppButton";
import AppLogo from "./AppLogo";
import Link from "next/link";
export default function Header() {
  function register() {
    window.location.href = "https://forms.gle/Lg2qTm42EMCQAkAN8";
  }
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <AppLogo />
        </a>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer font-source-sans-pro">
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
  </div>
</header>
  );
}

