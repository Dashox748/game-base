import classes from "./page.module.css";
import Link from "next/link";
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
                <Link href="/games/section1/upcoming">
                  <li>Upcoming</li>
                </Link>
              </ul>
            </div>
            <h3 className={classes.dropdown__button}>Section 1</h3>
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
            <h3 className={classes.dropdown__button}>Section 2</h3>
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
            <h3 className={classes.dropdown__button}>Section 3</h3>
          </div>
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
