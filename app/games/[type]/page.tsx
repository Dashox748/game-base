import axios from "axios";
import Image from "next/image";
import notFoundPhoto from "@/temporaryPhotos/notFoundPhoto.png";
import classes from "./page.module.css";

const getGameList = async (type: string, searchParams: string) => {
  console.log(searchParams);
  const res = await axios({
    url: `https://api.rawg.io/api/games?key=${process.env.API_KEY}&ordering=-${type}`,
    // url: `https://api.rawg.io/api/games?key=${
    //   process.env.API_KEY
    // }&page_size=40${type === "section1" ? `&ordering=-${searchParams}` : ""}${
    //   type === "section2" ? `&genres=${searchParams}` : ""
    // }${type === "section3" ? `&platforms=${searchParams}` : ""}
    // `.trim(),
    // url: `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`,
    method: "GET",
    headers: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(res);
  return await res;
};

type pageProps = {
  params: { type: string };
  searchParams: { filter: string };
};

export default async function GameListWithType({
  params: { type },
  searchParams: { filter },
}: pageProps) {
  const gameList = await getGameList(type, filter);
  return (
    <div>
      <div className={classes.gameList_grid}>
        {gameList?.results?.map((item: any, index: number) => {
          return (
            <div key={index} className={classes.game_grid}>
              <Image
                src={
                  item.background_image ? item.background_image : notFoundPhoto
                }
                alt={`${item.name} thumb`}
                placeholder="blur"
                blurDataURL={"/blur.jpg"}
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
              <div className={classes.gameTitle_grid}>
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
