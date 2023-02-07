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

        </main>
    );
}
