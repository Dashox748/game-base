`use client`;
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";

const MediumContext = createContext(null);

const MediumProvider = ({ children }: any) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.docs.map((doc) => console.log(doc));
    };
  }, []);

  return (
    // <MediumContext.Provider value={{ posts, users }}>
    { children }
    // </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
