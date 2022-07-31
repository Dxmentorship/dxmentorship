import AppButton from "./AppButton";
import AppLogo from "./AppLogo";
export default function Header() {
  function register() {
    window.location.href = "https://uoo376jx6hb.typeform.com/to/zVymBRsP";
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="mr-5 hover:text-gray-900">
          <AppLogo />
        </a>
        <nav className="md:ml-auto font-bold text-gray-900 flex flex-wrap items-center text-base justify-center cursor-pointer font-source-sans-pro">
          <a href="/curriculumn" className="mr-5 hover:text-gray-900">
            Curriculumn
          </a>
          <a href="/faqs" className="mr-5 hover:text-gray-900">
            FAQs
          </a>

          <a href="/resources" className="mr-5 hover:text-gray-900">
            Resources
          </a>
          <a href="/community" className="mr-5 hover:text-blue-accent">
            Community
          </a>
          <AppButton title="Apply Now!" onClick={register} />
        </nav>
      </div>
    </header>
  );
}
