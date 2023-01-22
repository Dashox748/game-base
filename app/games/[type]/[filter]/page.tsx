import axios from "axios";
import Image from "next/image";
import notFoundPhoto from "@/temporaryPhotos/notFoundPhoto.png";
import classes from "./page.module.css";

const getGameList = async (type: string, filter: string) => {
  const costam = (whichType: string) => {
    switch (whichType) {
      case "section1": {
        return "ordering=-";
      }
      case "section2": {
        return "genres=";
      }
      case "section3": {
        return "platforms=";
      }
      case "section": {
        return "dates=";
      }
      default: {
        return "";
      }
    }
  };
  const res = await axios({
    url: `https://api.rawg.io/api/games?key=${process.env.API_KEY}&${costam(
      type
    )}${filter}&page_size=40`,
    method: "GET",
    headers: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return await res;
};

type pageProps = {
  params: { type: string; filter: string };
};

export default async function GameListWithTypes({
  params: { type, filter },
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
