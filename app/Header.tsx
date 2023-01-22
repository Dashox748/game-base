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
                <Link href="/games/section1?filter=popular">
                  <li>Popular</li>
                </Link>
                <Link href="/games/section1?filter=metacritic">
                  <li>Best Rated</li>
                </Link>
                {/*<Link href="/games/section1?filter=released">*/}
                <Link
                  href={{
                    pathname: "/games/section1",
                    query: { filter: "released" },
                  }}
                >
                  <li>Most Recent</li>
                </Link>
                <Link href="/games/section1?filter=popular">
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
                <Link href="/games/section2?filter=action">
                  <li>Action</li>
                </Link>
                <Link href="/games/section2?filter=strategy">
                  <li>Strategy</li>
                </Link>
                <Link href="/games/section2?filter=role-playing-games-rpg">
                  <li>RPG</li>
                </Link>
                <Link href="/games/section2?filter=shooter">
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
                <Link href="/games/section3?filter=4">
                  <li>PC</li>
                </Link>
                <Link href="/games/section3?filter=187">
                  <li>Playstation 5</li>
                </Link>
                <Link href="/games/section3?filter=186">
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
