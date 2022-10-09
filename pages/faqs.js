import Head from "next/head";
import SEO from "../components/SEO";

export default function FAQs(props) {
  const questions = [
    {
      id: 1,
      question: "What is DX Mentorship?",
      answer:
        "DX Mentorship is a DevRel training program designed to charge you into DevRel in 3 months. The Mentorship is run by Kenny - Mentor at DX Mentorship.",
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
        "DX Mentorship is a free program. The only payment required is your time and dedication. And ofcourse, your willingness to pay it forward",
    },
    {
      id: 3,
      question: "Have more questions?",
      answer: "Email me: hello@kenny.engineer",
    },
  ];
  return (
    <>
      <SEO
        url={`${props.url}/faqs`}
        openGraphType="website"
        schemaType="article"
        title="FAQs "
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1662135511/faqs_x2wk9e.jpg"
      />
      <section className="py-20 2xl:py-40 font-nunito bg-gradient-to-b from-orange-400 to-pink-500">
        <div className="container px-4 mx-auto">
          <div className="mb-20 text-center">
            <h2 className="mt-8 text-7xl text-white font-bold font-heading">
              FAQ&apos;s
            </h2>
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
                        <h3 className="text-xl font-bold">
                          {question.question}
                        </h3>
                      </div>
                      <details className="mt-6 border-gray-50">
                        <summary>See answer</summary>
                        <p className="mt-5 mb-5 text-xl">{question.answer}</p>
                      </details>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export const getServerSideProps = (context) => {
  return {
    props: {
      url: context?.req?.headers?.host,
    },
  };
};
