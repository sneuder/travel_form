import React from "react";
import Options from "../Options";
import style from './menu.module.scss'

const Menu = () => {
  return (
    <section className={style.menuBackground}>
      <div className={style.menuContainer}>
        <Options />
      </div>
    </section>
  )
}