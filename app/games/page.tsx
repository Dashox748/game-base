// access_token: 'yrdniavh81hqy3s53eyb0h5riuiwis',
//     expires_in: 5104167,
//     token_type: 'bearer'

import axios from "axios";
import Image from "next/image";
import bioshock from "@/temporaryPhotos/bioshock.jpg";
import classes from "./page.module.css";

const getGameList = async () => {
  const res = await axios({
    url: `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
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

export default async function MostPopular() {
  const gameList = await getGameList();
  console.log(gameList);
  return (
    <div>
      {/*<div className={classes.gameList_grid}>*/}
      <h1>Bedzie jakies ladny homepage</h1>
      {/*{gameList?.results?.map((item: any, index: number) => {*/}
      {/*  return (*/}
      {/*    <div key={index} className={classes.game_grid}>*/}
      {/*      <Image*/}
      {/*        src={item.background_image}*/}
      {/*        alt={`${item.name} thumb`}*/}
      {/*        blurDataURL="data:..."*/}
      {/*        placeholder="blur"*/}
      {/*        fill*/}
      {/*        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"*/}
      {/*      />*/}
      {/*      <div className={classes.gameTitle_grid}>*/}
      {/*        <h2>{item.name}</h2>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
      {/*{Array(50)*/}
      {/*  .fill("")*/}
      {/*  .map((item: any, index: number) => {*/}
      {/*    return (*/}
      {/*      <div key={index} className={classes.game_grid}>*/}
      {/*        <Image*/}
      {/*          src={bioshock}*/}
      {/*          alt={`thumb`}*/}
      {/*          blurDataURL="data:..."*/}
      {/*          placeholder="blur"*/}
      {/*          fill*/}
      {/*          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"*/}
      {/*        />*/}
      {/*        <div className={classes.gameTitle_grid}>*/}
      {/*          <h2>The Witcher 3</h2>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
}
