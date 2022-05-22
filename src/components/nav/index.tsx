import React from "react";

import Branch from "../../shared/branch/Branch";
import Options from "./Options";

import style from "./index.module.scss";

const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <Branch />
      <div className={style.optionsContainer}>
        <Options/>
      </div>
    </nav>
  )
}

export default Nav;