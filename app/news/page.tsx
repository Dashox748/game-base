import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import HeadingPost from "@/components/posts/HeadingPost";

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

async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <div className={classes.grid_news}>
        {posts.map((post, index: number) => (
          <div key={index} style={{ width: "300px", height: "475px" }}>
            <HeadingPost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
