export default function AppLogo() {
  return (
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#EB4511"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-10 h-10 text-white p-2 "
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl font-nunito">DXTraining</span>
    </div>
  );
}
