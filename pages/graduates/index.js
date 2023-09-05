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
              <div key={graduate.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="h-64 w-full object-cover bg-gray-200" src={graduate.properties["Imgur Link to Picture"].rich_text[0]?.plain_text || 'https://www.notion.so/images/page-cover/met_arnold_bocklin_1880.jpg'} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{graduate.properties.Name.title[0].plain_text}</div>
                    <p className="text-gray-700 text-base">
                      { graduate.properties["Bio"].rich_text.map((line) => { 
                        return <>{line.plain_text} <br /></>
                       }) }
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <a href={graduate.public_url} target="_blank" rel="noreferrer">
                      <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                        View full profile
                      </span>
                    </a>
                    {
                      graduate.properties['Blog'].rich_text[0]?.plain_text &&
                      <a href={graduate.properties['Blog'].rich_text[0]?.plain_text} target="_blank" rel="noreferrer">
                        <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                          Blog
                        </span>
                      </a>
                    }
                    {
                      graduate.properties['Github'].rich_text[0]?.plain_text &&
                      <a href={graduate.properties['Github'].rich_text[0]?.plain_text} target="_blank" rel="noreferrer">
                        <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                          GitHub
                        </span>
                      </a>
                    }
                    {
                      graduate.properties['Twitter'].rich_text[0]?.plain_text &&
                      <a href={graduate.properties['Twitter'].rich_text[0]?.plain_text} target="_blank" rel="noreferrer">
                        <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                          Twitter
                        </span>
                      </a>
                    }
                    {
                      graduate.properties['LinkedIn'].rich_text[0]?.plain_text &&
                      <a href={graduate.properties['LinkedIn'].rich_text[0]?.plain_text} target="_blank" rel="noreferrer">
                        <span className="inline-block font-sans bg-gray-200 hover:bg-black hover:text-white rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                          LinkedIn
                        </span>
                      </a>
                    }
                  </div>
                </div>
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
