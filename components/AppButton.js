export default function AppButton(props) {
  // pass title and onClick as props
  return (
    <>
      <button
        onClick={props.onClick}
        className="font-nunito inline-flex text-white bg-dxt-accents-3 border-0 py-2 px-6 focus:outline-none hover:bg-dxt-accents-1 rounded text-lg"
      >
        {props.title}
      </button>
    </>
  );
}
