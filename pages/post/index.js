import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";

export default function Home({ posts }) {
  const [receivedPosts, setReceivedPosts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_DATASET,
      });
      setReceivedPosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imgBuilder.image(post.mainImage),
          };
        })
      );
    } else {
      setReceivedPosts([]);
    }
  }, [posts]);
  return (
    <div className={styles.blogPost}>
      <div className={styles.intro}>
        <h1>
          <strong>DXTraining Blog!</strong>
        </h1>
        <h6>Learn with guides and examples</h6>
      </div>
      <div className={styles.feed}>
        {receivedPosts.length ? (
          receivedPosts.map((post, index) => (
            <div
              key={index}
              className={styles.post}
              onClick={() => router.push(`/post/${post.slug.current}`)}
            >
              <img
                className={styles.img}
                src={post.mainImage}
                alt="post thumbnail"
              />
              <h3>
                <strong>{post.title}</strong>
              </h3>
              <div className={styles.author}>
                <h4>{post.author && post.author.name}</h4>
                <h5 onClick={() => console.log(post)}>
                  {moment(post.publishedAt).format("L")}
                </h5>
              </div>
            </div>
          ))
        ) : (
          <>No Posts</>
        )}
      </div>
    </div>
  );
}
export const getServerSideProps = async (pageContext) => {
  const allPosts = encodeURIComponent(`*[ _type == "post"]{..., author->}`);
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${allPosts}`;

  const getPosts = await fetch(url).then((res) => res.json());
  // console.log(getPosts);

  if (!getPosts.result || !getPosts.result.length) {
    return {
      posts: [],
    };
  } else {
    return {
      props: {
        posts: getPosts.result,
      },
    };
  }
};
