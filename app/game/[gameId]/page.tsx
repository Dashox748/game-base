import axios from "axios";
import classes from "./page.module.css";

const getGameInfo = async (gameId: string) => {
  return await axios({
    url: `https://api.rawg.io/api/games/${gameId}?key=${process.env.API_KEY}`,
    method: "GET",
    headers: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

type PageProps = {
  params: {
    gameId: string;
  };
};

export default async function Page({ params: { gameId } }: PageProps) {
  const gameInfo = await getGameInfo(gameId);
  return (
    <div
      style={{
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "45px" }}>{gameInfo?.name}</h1>
      <h1 style={{ margin: "3rem 0 1rem 0" }}>About</h1>
      <p style={{ fontSize: "20px", maxWidth: "600px" }}>
        {gameInfo?.description_raw}
      </p>
      <div
        className={classes.background_image}
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(34, 34, 34)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${gameInfo?.background_image})`,
        }}
      />
    </div>
  );
}
