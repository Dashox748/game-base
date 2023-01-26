import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "@/firebase";

const addPostToFirebase = async () => {
  await addDoc(collection(db, "articles"), {
    bannerImage:
      "https://sm.ign.com/t/ign_pl/screenshot/default/steamworld-build-2023-01-23-23-010-768x432_9egs.1280.jpg",
    body: "Mamy dobre wieści dla fanów uniwersum SteamWorld, do którego należą takie gry jak SteamWorld Heist, SteamWorld Dig czy SteamWorld Quest. Przedsawiciele firmy Thunderful Games i studia The Station zapwiedzeli nową produkcję należącą do tego cyklu. \n Jeszcze w 2023 roku na PlayStation 5, Xbox Series, PlayStation 4, Xbox One, Switch i PC (Steam) trafi gra o tytule SteamWorld Build. Na Steam znajdziemy już nawet wersję demo.",
    category: "category",
    brief: "Demo jest już dostępne  ",
    postedOn: serverTimestamp(),
    postLength: 5,
    title:
      "SteamWorld Build: Popularny cykl gier powraca tym razem z city-builderem",
    author: "Dashox",
  });
};

function Page() {
  // addPostToFirebase();
  console.log("dodalem")
  return <div></div>;
}

export default Page;
