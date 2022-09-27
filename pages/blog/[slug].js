const BlockContent = require("@sanity/block-content-to-react");
import SyntaxHighlighter from "react-syntax-highlighter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import styles from "../../styles/Home.module.css";

function Post({ title, body, image, author }) {
  const [imageUrl, setImageUrl] = useState();
  const router = useRouter();
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_DATASET,
    });
    setImageUrl(imgBuilder.image(image));
  }, [image]);

  const serializers = {
    types: {
      code: (props) => (
        <div className="my-2">
          <SyntaxHighlighter language={props.node.language}>
            {props.node.code}
          </SyntaxHighlighter>
        </div>
      ),
    },
  };

  return (
    <>
      <div className={styles.postItem}>
        {/* <div className={styles.postNav} onClick={() => router.push("/blog")}>
          &#x2190;
        </div> */}
        {imageUrl && <img src={imageUrl} alt={title} />}
        <div>
          <h1>
            <strong>{title}</strong>
          </h1>
        </div>

        <div className={styles.postBody}>
          <BlockContent
            blocks={body}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_DATASET}
          />
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  const particularPost = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${particularPost}`;

  const postData = await fetch(url).then((res) => res.json());
  const postItem = postData.result[0];

  if (!postItem) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: postItem.title,
        image: postItem.mainImage,
        body: postItem.body,
      },
    };
  }
};
export default Post;
