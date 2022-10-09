export default function AppButton(props) {
  // pass title and onClick as props
  return (
    <>
      <button
        onClick={props.onClick}
        className="mt-4 md:mt-0 py-1 px-3 items-center font-nunito inline-flex text-white bg-dxt-accents-3 border-0 focus:outline-none rounded text-lg bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 hover:text-black"
      >
        {props.title}
      </button>
    </>
  );
}
