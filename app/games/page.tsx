import GameListWithType from "@/app/games/[type]/page";

export default async function MostPopular() {
  const params = { type: "section1" };
  return (
    <div>
      {/* @ts-ignore */}
      {/*<GameListWithType params={params} />*/}
    </div>
  );
}
