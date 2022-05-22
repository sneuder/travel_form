import React from "react";

import Branch from "../../shared/branch/Branch";
import Options from "./Options";
import BurgerButton from "./BurgerButton";

import style from "./index.module.scss";

const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <Branch />
      <div className={style.optionsContainer}>
        <Options/>
      </div>
      <BurgerButton/>
    </nav>
  )
}

export default Nav;