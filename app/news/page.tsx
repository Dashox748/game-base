import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";
import classes from "./page.module.css";
import HeadingPost from "@/components/posts/HeadingPost";
import AllPosts from "@/components/posts/AllPosts";

export const revalidate = 0;

const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));
  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: {
        ...doc.data(),
      },
    };
  });
};

export default async function NewsList() {
  const posts = await getPosts();
  return (
    <div className={classes.news_container}>
      <div className={classes.grid_news}>
        {posts.slice(0, 4).map((post, index: number) => (
          <div key={index} style={{ width: "100%", height: "475px" }}>
            <HeadingPost post={post} />
          </div>
        ))}
      </div>
      <div className={classes.flex_news}>
        {posts.slice(4).map((post, index: number) => (
          <div key={index} className={classes.news}>
            <AllPosts post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
