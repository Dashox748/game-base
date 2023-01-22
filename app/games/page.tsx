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
