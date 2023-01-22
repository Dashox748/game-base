import Image from "next/image";
import classes from "./headingPost.module.css";
import Link from "next/link";

const HeadingPost = ({ post }: any) => {
  console.log(post);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Link href="/news/12">
        <Image
          src={post.data.bannerImage}
          fill
          alt="bannerImage"
          className={classes.post_image}
          quality="100"
        />
        <h3 className={classes.post_heading}>{post.data.title}</h3>
      </Link>
    </div>
  );
};
export default HeadingPost;
