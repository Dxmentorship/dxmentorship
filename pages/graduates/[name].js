import styles from "../../styles/Home.module.css";
import SEO from "../../components/SEO";
import { Client } from '@notionhq/client';

export default function Page(props) {
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
        <h1 className="text-6xl mb-20">{props.graduate.properties.Name?.title[0]?.plain_text}</h1>
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
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
        name: graduate.properties.Name.title[0].plain_text.split(' ').join('-'),
      },
    };
  });

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const data = await notion.databases.query({
    database_id: process.env.DB_ID,
  });

  const graduate = data.results.find((graduate) => {
    return graduate.properties.Name.title[0].plain_text.split(' ').join('-') === params.name;
  });

  return {
    props: {
      graduate,
    },
  };
};
