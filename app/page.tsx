// access_token: 'yrdniavh81hqy3s53eyb0h5riuiwis',
//     expires_in: 5104167,
//     token_type: 'bearer'

import axios from "axios";
import Link from "next/link"
import Image from "next/image";
import bioshock from "../temporaryPhotos/bioshock.jpg"
import { Roboto } from '@next/font/google'
import "./page.module.css"


const getGameList =async()=>{
   const res = await axios({
    // url: "https://api.rawg.io/api/games?key=9db64c0d57994b08accbc132770287b2",
    method: 'GET',
    headers: {
    },
  })
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.error(err);
      });
  return await res
}

const roboto = Roboto({
    subsets:['latin'],
    style:"normal",
    weight:'400'
})

export default async function Home() {
  const gameList=await getGameList()
  console.log(gameList)
  return (
    <main className={roboto.className} style={{background:"#222222"}}>
      <button>Api</button>
      {/*{gameList?.results?.map((item:any,index:number)=>{*/}
      {/*  return <div key={index} style={{borderRadius:"20px",overflow:"hidden"}}>*/}
      {/*      <Image src={item.background_image} alt={`${item.name} thumb`} width={550} height={300}/>*/}
      {/*      {item.name}*/}
      {/*  </div>*/}
      {/*})}*/}
        <div >
        {Array(100).fill("").map((item:any,index:number)=>{
            return(
            <div key={index} style={{position:"relative",borderRadius:"20px",overflow:"hidden",width:"550px",height:"300px"}} >
                <Image src={bioshock} alt={"zdj"} width={550} height={300}/>
                <div style={{padding:"20px 50px",color:"white",position:"absolute",bottom:"0",left:"0",right:"0",background:"rgba(0,0,0,0.6)",letterSpacing:"3px"}}>
                    <h1 >Read Dead Redemption 2</h1>
                </div>
            </div>)
        })}
        </div>

    </main>
  )
}
