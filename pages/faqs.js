export default function FAQs() {
  const questions = [
    {
      id: 1,
      question: "What is DXTraining?",
      answer:
        "DXTraining is a program designed to charge you into devrel in 3 months. The mentorship is run by Kenny - Mentor at DXTraining.",
    },
    {
      id: 2,
      question: "How do I enroll?",
      answer:
        "You can enroll by clicking the Apply button on the header of this site. Please fill out the form to the best of your ability and I'll contact you after review.",
    },
    {
      id: 3,
      question: "How do I pay?",
      answer:
        "DXTraining is a free program. The only payment required is your time and dedication.",
    },
  ];
  return (
    <section className="py-20 2xl:py-40 bg-blue-50 font-nunito">
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mt-8 text-7xl font-bold font-heading">FAQ&apos;s</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul>
            {questions.map((question, index) => (
              <li
                key={index}
                className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl"
              >
                <button className="flex w-full text-left">
                  <div className="w-auto mr-8">
                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                      {question.id}
                    </span>
                  </div>
                  <div className="w-full mt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{question.question}</h3>
                    </div>
                    {/* {showAnswer && ( */}
                    <details className="mt-6 border-l-2 border-gray-50 pl-10">
                      <summary>See answer</summary>
                      <p className="mb-5 text-xl">{question.answer}</p>
                      {/* <p className="mb-2 text-lg">
                        <span className="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                        <span>Distribution of letters</span>
                      </p>
                      pan>Content here</span>
                      </p> */}
                    </details>
                    {/* )} */}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
