import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";
import classes from "./page.module.css";
import Image from "next/image";

const getNewsFromId = async (newsId: string) => {
  const querySnapshot = await getDocs(collection(db, "articles"));
  const news = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: {
        ...doc.data(),
      },
    };
  });
  return news.find((doc) => doc.id === newsId);
};

type PageProps = {
  params: {
    newsId: string;
  };
};

async function NewsAdvancedInfo({ params: { newsId } }: PageProps) {
  const news = await getNewsFromId(newsId);
  // console.log(news);
  console.log(
    news?.data.body.split("\\n").map((item: any) => console.log(item))
  );
  return (
    <div className={classes.advancedInfo_news_container}>
      <div className={classes.advancedInfo_news_title}>
        <h1>{news?.data.title}</h1>
        <p>{news?.data.brief}</p>
      </div>
      <div className={classes.temporary}>
        <div className={classes.advancedInfo_news_image_container}>
          <Image
            src={news?.data.bannerImage}
            fill
            alt={"banner image"}
            quality={100}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "6px",
          }}
        >
          <h3 style={{ color: "gray" }}>By: Dashox</h3>
          <h3 style={{ color: "gray" }}>Published: 12 jannuary 2023</h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          textAlign: "center",
          fontSize: "20px",
          color: "lightgray",
          padding: "0 10rem",
        }}
      >
        {news?.data.body.split("\\n").map((item: any, index: number) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}
export default NewsAdvancedInfo;
