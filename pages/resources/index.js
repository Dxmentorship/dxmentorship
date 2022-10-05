import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import Link from "next/link";
import SEO from "../../components/SEO";
export default function Home({ posts }, props) {
  console.log(props);
  const [receivedPosts, setReceivedPosts] = useState([]);
  // const router = useRouter();
  useEffect(() => {
    if (posts.length) {
      // If we want to use post images from Sanity
      // const imgBuilder = imageUrlBuilder({
      //   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      //   dataset: process.env.NEXT_PUBLIC_DATASET,
      // });
      setReceivedPosts(
        posts.map((post) => {
          return {
            ...post,
            // mainImage: imgBuilder.image(post.mainImage),
          };
        })
      );
    } else {
      setReceivedPosts([]);
    }
  }, [posts]);
  return (
    <>
      <SEO
        url="https://www.dxmentorship.com/blog"
        openGraphType="website"
        schemaType="article"
        title="DX Mentorship Blog"
        description="Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career..."
        image="https://res.cloudinary.com/kennyy/image/upload/v1662134983/Curriculum_ykhxsv.jpg"
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {receivedPosts.length ? (
            receivedPosts.map((post, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div
                  // onClick={() => router.push(`/blog/${post.slug.current}`)}
                  className="h-full bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                >
                  <h2 className="tracking-widest text-xs title-font font-nunito text-gray-900 mb-1">
                    {moment(post.publishedAt).format("L")}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl text-gray-900 mb-3 font-nunito font-bold">
                    {post.title}
                  </h1>
                  <p className="leading-relaxed mb-3 font-source-sans-pro">
                    {post.description}
                  </p>
                  <Link href={post.link}>
                    <a className="text-lg font-nunito inline-flex items-center ">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
              <h1 className="text-9xl font-extrabold text-white tracking-widest">
                Oops
              </h1>
              <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                No Posts Yet
              </div>
            </main>
          )}
        </div>
      </div>
    </>
  );
}
export const getStaticProps = async (pageContext) => {
  const allPosts = encodeURIComponent(`*[ _type == "post"]{..., author->}`);
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${allPosts}`;
  const getPosts = await fetch(url).then((res) => res.json());

  if (!getPosts.result || !getPosts.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: getPosts.result,
      },
      revalidate: 3600,
    };
  }
};
