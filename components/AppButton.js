export default function AppButton(props) {
  // pass title and onClick as props
  return (
    <>
      <button
        onClick={props.onClick}
        className="font-nunito inline-flex text-white bg-dxt-accents-3 border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 hover:text-black"
      >
        {props.title}
      </button>
    </>
  );
}
