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
                  <Link href="/games/popular"> Popular</Link>
                </li>
                <li>
                  <Link href="/games/metacritic">Best Rated</Link>
                </li>
                <li>
                  <Link href="/games/released">Most Recent</Link>
                </li>
                <li>
                  <Link href="/games">Upcoming</Link>
                </li>
              </ul>
            </div>
            <h3 className={classes.dropdown__button}>Section 1</h3>
          </div>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <li>Action</li>
                <li>Strategy</li>
                <li>RPG</li>
                <li>Shooter</li>
              </ul>
            </div>
            <h3 className={classes.dropdown__button}>Section 2</h3>
          </div>
          <div className={classes.header__menu}>
            <div className={classes.dropdown__overlay}>
              <div style={{ opacity: "0" }}>x</div>
              <ul className={classes.category__list}>
                <li>PC</li>
                <li>Playstation</li>
                <li>Xbox</li>
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
