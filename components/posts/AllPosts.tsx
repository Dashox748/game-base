import classes from "./allPosts.module.css";
import Image from "next/image";
import Link from "next/link";
function AllPosts({ post }: any) {
  return (
    <div className={classes.post_container}>
      <Link href={`/news/${post.id}`}>
        <Image
          src={post.data.bannerImage}
          alt={"banner image"}
          width={200}
          height={110}
          className={classes.post_image}
        />
      </Link>
      <div className={classes.post_container_description}>
        <Link href={`/news/${post.id}`}>
          <h2 className={classes.post_title}>{post.data.title}</h2>
        </Link>
        <p>{post.data.brief}</p>
      </div>
    </div>
  );
}

export default AllPosts;
