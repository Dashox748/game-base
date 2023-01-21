// access_token: 'yrdniavh81hqy3s53eyb0h5riuiwis',
//     expires_in: 5104167,
//     token_type: 'bearer'

import axios from "axios";
import gameListWithType from "@/app/games/[type]/page";
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
  // console.log(gameList);
  return (
    <div>
      <h1>homepage</h1>
    </div>
  );
}
