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
                <li>
                  <Link href="/games/section1?filter=popular"> Popular</Link>
                </li>
                <li>
                  <Link href="/games/section1?filter=metacritic">
                    Best Rated
                  </Link>
                </li>
                <li>
                  <Link href="/games/section1?filter=released">
                    Most Recent
                  </Link>
                </li>
                <li>
                  <Link href="/games/section1?filter=popular">Upcoming</Link>
                </li>
              </ul>
            </div>
            <h3 className={classes.dropdown__button}>Section 1</h3>
          </div>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <li>
                  <Link href="/games/section2?filter=action">Action</Link>
                </li>
                <li>
                  <Link href="/games/section2?filter=strategy">Strategy</Link>
                </li>
                <li>
                  <Link href="/games/section2?filter=role-playing-games-rpg">
                    RPG
                  </Link>
                </li>
                <li>
                  <Link href="/games/section2?filter=shooter">Shooter</Link>
                </li>
              </ul>
            </div>
            <h3 className={classes.dropdown__button}>Section 2</h3>
          </div>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <li>
                  <Link href="/games/section3?filter=4">PC</Link>
                </li>
                <li>
                  <Link href="/games/section3?filter=187">Playstation 5</Link>
                </li>
                <li>
                  <Link href="/games/section3?filter=186">Xbox Series X</Link>
                </li>
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
