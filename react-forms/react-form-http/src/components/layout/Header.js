import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from './../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
        <h1>React Swiggy</h1>
        <HeaderCartButton onClick={ props.onShowCart }></HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="Hungry Kya"></img>
    </div>
  </Fragment>;
};

export default Header;
