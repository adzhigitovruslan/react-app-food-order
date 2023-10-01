import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meal time</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={require("../../assets/meals.jpg")}
          alt="A table full of food"
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
