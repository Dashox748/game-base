import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "@/firebase";

const addPostToFirebase = async () => {
  await addDoc(collection(db, "articles"), {
    bannerImage:
      "https://sm.ign.com/t/ign_pl/screenshot/default/star-wars-jedi-survivor-2022-12-08-22-006_tjah.800.jpg",
    body: "body",
    category: "category",
    brief: "brief",
    postedOn: serverTimestamp(),
    postLength: 5,
    title: "10 najciekawszych nowych gier z 1 połowy 2023 roku",
    author: "author",
  });
};

function Page() {
  addPostToFirebase();
  return <div></div>;
}

export default Page;
