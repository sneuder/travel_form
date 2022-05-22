import React from "react";
import { CgMenu } from "react-icons/cg";
import style from "./burgerbutton.module.scss";
const Menu = () => {
  return (
    <div className={style.buttonContainer}>
      <CgMenu className={style.buttonContainer__icon}/>
    </div>
  )
}

export default Menu;