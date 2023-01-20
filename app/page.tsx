// access_token: 'yrdniavh81hqy3s53eyb0h5riuiwis',
//     expires_in: 5104167,
//     token_type: 'bearer'

import MostPopular from "@/app/mostpopular/page";

export default async function Home() {
  return (
    <main>
      {/* @ts-ignore */}
      <MostPopular />
    </main>
  );
}
