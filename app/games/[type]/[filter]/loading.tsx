import classes from "./page.module.css";
function Loading() {
  return (
    <div className={classes.loading_div}>
      <div className={classes.loader}></div>
    </div>
  );
}

export default Loading;
