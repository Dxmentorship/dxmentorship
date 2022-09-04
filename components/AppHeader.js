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
        <Link href="/" className="mr-5 hover:text-gray-900">
          <a>
            <AppLogo />
          </a>
        </Link>
        <nav className="md:ml-auto font-bold text-gray-900 flex flex-wrap items-center text-base justify-center cursor-pointer font-source-sans-pro space-x-4">
          <Link href="/curriculum" className=" hover:text-gray-900">
            <a>Curriculumn</a>
          </Link>
          <Link href="/faqs" className=" hover:text-gray-900">
            <a> FAQs</a>
          </Link>

          <Link href="/resources" className=" hover:text-gray-900">
            <a> Resources</a>
          </Link>
          <Link href="/community" className=" hover:text-blue-accent">
            <a> Community</a>
          </Link>
          <AppButton title="Apply Now!" onClick={register} />
        </nav>
      </div>
    </header>
  );
}
