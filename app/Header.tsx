import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import arrowDown from "@/temporaryPhotos/menuicon.ico";
function Header() {
  return (
    <div className={classes.header__container}>
      <div className={classes.header__navbar}>
        <Link href="/" className={classes.header__title}>
          Game Base
        </Link>
        <div style={{ display: "flex", gap: "3rem" }}>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <Link href="/games/section1/popular">
                  <li>Popular</li>
                </Link>
                <Link href="/games/section1/metacritic">
                  <li>Best Rated</li>
                </Link>
                <Link href="/games/section1/released">
                  <li>Most Recent</li>
                </Link>
                <Link href="/games/section/2023-01-22,2023-02-22">
                  <li>Upcoming</li>
                </Link>
              </ul>
            </div>
            <div className={classes.dropdown__button}>
              <h3>Browse </h3>
              <Image
                src={arrowDown}
                alt={"hoverable menu"}
                width={15}
                height={17}
              />
            </div>
          </div>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <Link href="/games/section2/action">
                  <li>Action</li>
                </Link>
                <Link href="/games/section2/strategy">
                  <li>Strategy</li>
                </Link>
                <Link href="/games/section2/role-playing-games-rpg">
                  <li>RPG</li>
                </Link>
                <Link href="/games/section2/shooter">
                  <li>Shooter</li>
                </Link>
              </ul>
            </div>
            <div className={classes.dropdown__button}>
              <h3>Genres </h3>
              <Image
                src={arrowDown}
                alt={"hoverable menu"}
                width={15}
                height={17}
              />
            </div>
          </div>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <Link href="/games/section3/4">
                  <li>PC</li>
                </Link>
                <Link href="/games/section3/187">
                  <li>Playstation 5</li>
                </Link>
                <Link href="/games/section3/186">
                  <li>Xbox Series X</li>
                </Link>
              </ul>
            </div>
            <div className={classes.dropdown__button}>
              <h3>Platforms </h3>
              <Image
                src={arrowDown}
                alt={"hoverable menu"}
                width={15}
                height={17}
              />
            </div>
          </div>
          <Link href="/news/">
            <h3 className={classes.dropdown__button}>News</h3>
          </Link>
        </div>
      </div>
      <div className={classes.header__searchbar}>
        <input placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
