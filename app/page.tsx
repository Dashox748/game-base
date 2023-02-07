import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default async function Home() {
    return (
        <main>
            <div className={classes.banner__image_holder}>
                <Image
                    src="/hogwarts_legacy2.jpg"
                    fill
                    alt="game banner"
                    style={{ objectFit: "cover", opacity: "70%" }}
                />
                <div className={classes.banner__image_title}>
                    <span>Hogwarts Legacy </span>
                    <span>is finnaly Here</span>
                    <Link className={classes.check_button} href={"/game/906547"}>
                        Check it Out
                    </Link>
                </div>
            </div>
            <div className={classes.homepage__main_text}>
                {/*<span> All About </span>*/}
                {/*<span style={{ color: "#5163e6" }}> Games </span>*/}
                {/*<span> In One </span>*/}
                {/*<span style={{ color: "#ff67d1" }}> Spot </span>*/}
            </div>
            <div
                style={{ display: "flex", gap: "3rem", width: "80%", margin: "0 auto" }}
            >
                <div style={{ width: "60%", position: "relative", height: "400px" }}>
                    <Image src={"/games_banner.webp"} alt={"games"} fill />
                    <Link
                        href={"/games/section1/popular"}
                        className={classes.homepage__button_games}
                    >
                        Games
                    </Link>
                </div>
                <div style={{ width: "40%", position: "relative", height: "400px" }}>
                    <Image
                        src={"/news_banner.jpg"}
                        alt={"games"}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <Link href={"/news"} className={classes.homepage__button_news}>
                        News
                    </Link>
                </div>
            </div>
        </main>
    );
}
