import styles from "../../styles/Home.module.css";
import SEO from "../../components/SEO";
import { Client } from '@notionhq/client';

export default function Home(props) {
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
        <h1 className="text-6xl mb-20">Graduates</h1>
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
          { props.graduates.results.map((graduate) => {
            return (
              <a href={graduate.public_url} key={graduate.id} target="_blank" rel="noreferrer" className="w-full max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="h-64 w-full object-cover bg-gray-200" src={graduate.cover.file ? graduate.cover.file.url : 'https://www.notion.so/images/page-cover/met_arnold_bocklin_1880.jpg'} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{graduate.properties.Name.title[0].plain_text}</div>
                    <p className="text-gray-700 text-base">
                      <ul>
                        <li><span>Technical background: </span><span>{graduate.properties["Technical Background"].select.name}</span></li>
                        <li><span>Years of experience: </span><span>{graduate.properties["Years of Experience"].number || 'N/A'}</span></li>
                      </ul>
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{
                      graduate.properties.Cohort.select.name
                    }</span>
                  </div>
                </a>
            )
          }) } 
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const data = await notion.databases.query({
    database_id: process.env.DB_ID,
  });

  return {
    props: {
      url: context?.req?.headers?.host,
      graduates: data,
    },
  };
};
