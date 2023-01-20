import classes from "./page.module.css";
import Link from "next/link";
function Header() {
  return (
    <div className={classes.header__container}>
      <div className={classes.header__navbar}>
        <h1>Game Base</h1>
        <Link href="/mostpopular">Most Popular</Link>
        <Link href="/">Best Rated</Link>
        <Link href="/">Most Recent</Link>
        <Link href="/">Upcoming</Link>
      </div>
      <div className={classes.header__searchbar}>
        <input placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
