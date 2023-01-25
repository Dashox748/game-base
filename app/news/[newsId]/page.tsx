import classes from "./page.module.css";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";
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

  return (
    <div className={classes.advancedInfo_news_container}>
      <div className={classes.advancedInfo_news_heading}>
        <h1>{news?.data.title}</h1>
        <p>{news?.data.brief}</p>
      </div>
      <div className={classes.advancedInfo_news_image_and_info}>
        <div className={classes.advancedInfo_news_image_container}>
          <Image
            src={news?.data.bannerImage}
            fill
            alt={"banner image"}
            quality={100}
          />
        </div>
        <div className={classes.advancedInfo_news_published}>
          <h3>By: {news?.data.author}</h3>
          <h3>
            Published:{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(news?.data.postedOn.seconds * 1000)}
          </h3>
        </div>
      </div>
      <div className={classes.advancedInfo_news_text}>
        {news?.data.body.split("\\n").map((item: any, index: number) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default NewsAdvancedInfo;
