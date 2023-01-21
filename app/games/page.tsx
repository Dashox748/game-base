// access_token: 'yrdniavh81hqy3s53eyb0h5riuiwis',
//     expires_in: 5104167,
//     token_type: 'bearer'

import GameListWithType from "@/app/games/[type]/page";

export default async function MostPopular() {
  const params = { type: "section1" };
  const searchParams = { filter: "popular" };
  return (
    <div>
      {/* @ts-ignore */}
      <GameListWithType params={params} searchParams={searchParams} />
    </div>
  );
}
