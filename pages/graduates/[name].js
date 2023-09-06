import styles from "../../styles/Home.module.css";
import SEO from "../../components/SEO";
import { Client } from "@notionhq/client";

export default function Page(props) {
  const { graduate } = props;
  console.log(graduate);

  return (
    <div className={styles.container}>
      <SEO
        url={`${props.url}`}
        openGraphType="website"
        schemaType="article"
        title="DevRel Mentorship for developer advocates"
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg"
      />

      <main className="container mx-auto w-full flex px-5 py-24 flex-col items-center">
        <h2 className="text-4xl mb-4">
          {graduate.properties.Name?.title[0]?.plain_text}
        </h2>
        <h3 className="text-xl mb-20">
          {graduate.properties["Cohort"].select.name}
        </h3>
        <div className="flex flex-col justify-center items-center typography max-w-[76ch]">
          <img
            className="w-64 h-64 object-cover bg-gray-200 rounded-full mb-10"
            src={
              graduate.properties["Imgur Link to Picture"].rich_text[0]
                ?.plain_text ||
              "https://www.notion.so/images/page-cover/met_arnold_bocklin_1880.jpg"
            }
          />
          <p className="text-xl">
            {graduate.properties["Bio"].rich_text.map((line) => {
              return (
                <>
                  {line.plain_text} <br />
                </>
              );
            })}
          </p>
          <div className="px-6 mt-8 pb-2">
            {graduate.properties["Website"].rich_text[0]?.plain_text && (
              <a
                href={graduate.properties["Website"].rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  Website
                </span>
              </a>
            )}
            {graduate.properties["Blog"].rich_text[0]?.plain_text && (
              <a
                href={graduate.properties["Blog"].rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  Blog
                </span>
              </a>
            )}
            {graduate.properties["Email "].email && (
              <a
                href={`mailto:${graduate.properties["Email "].email}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  Email
                </span>
              </a>
            )}
            {graduate.properties["Github"].rich_text[0]?.plain_text && (
              <a
                href={graduate.properties["Github"].rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  GitHub
                </span>
              </a>
            )}
            {graduate.properties["Twitter"].rich_text[0]?.plain_text && (
              <a
                href={graduate.properties["Twitter"].rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  Twitter
                </span>
              </a>
            )}
            {graduate.properties["LinkedIn"].rich_text[0]?.plain_text && (
              <a
                href={graduate.properties["LinkedIn"].rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  LinkedIn
                </span>
              </a>
            )}
            {graduate.properties["Youtube"].rich_text[0]?.plain_text && (
              <a
                href={graduate.properties["Youtube"].rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                  Youtube
                </span>
              </a>
            )}
          </div>
          <div className="mt-20 w-full">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Work Experience
              </h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Technical Background
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {graduate.properties["Technical Background"].select.name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Years of Experience
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {graduate.properties["Years of Experience"].number}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Hard Skills
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {graduate.properties["Hard Skills"].multi_select.map(
                      (skill) => {
                        return (
                          <span key={skill} className={`inline-block font-sans bg-orange-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2`}>
                            {skill.name}
                          </span>
                        );
                      }
                    )}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Core Strength
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {graduate.properties["Your Core Strength"].select.name}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-20 w-full">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Employment Preferences
              </h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Currently seeking a DevRel position?
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {
                      graduate.properties["Currently Seeking a DevRel Position"]
                        .select.name
                    }
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Location preference
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {
                      graduate.properties["Location Preference"].multi_select[0]
                        .name
                    }
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-20 w-full">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Personal Details
              </h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Hobbies
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {
                      graduate.properties["Hobbies"].rich_text[0].plain_text
                    }
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const data = await notion.databases.query({
    database_id: process.env.DB_ID,
  });

  const paths = data.results.map((graduate) => {
    return {
      params: {
        name: graduate.properties.Name.title[0].plain_text.split(" ").join("-"),
      },
    };
  });

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const data = await notion.databases.query({
    database_id: process.env.DB_ID,
  });

  const graduate = data.results.find((graduate) => {
    return (
      graduate.properties.Name.title[0].plain_text.split(" ").join("-") ===
      params.name
    );
  });

  return {
    props: {
      graduate,
    },
  };
};
