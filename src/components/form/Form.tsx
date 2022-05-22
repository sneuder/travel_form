import React from 'react'
import style from "./form.module.scss";
import { inputs } from '../../interfaces/inputs';

const Form = () => {
  let inputsData = require('../../data/inputs.json');

  return (
    <div className={style.formContainer}>
      <div className={style.headerForm}>
        <h2 className={style.headerForm__header}>Hi. Welcome!</h2>
        <p className={style.headerForm__message}>We know you want to travel with Avianca. Please complete the following fields.</p>
      </div>
      <form>
        {
          inputsData.map((input:inputs) => (
            <div key={input.id} className={style.boxInput}>
              <label className={style.boxInput__label} htmlFor={input.type}>{input.label}</label>
              <input className={style.boxInput__input} type={input.type}/>
            </div>
          ))
        }

        <div className={style.boxInput}>
          <input className={style.boxInput__submit} type="submit"/>
        </div>
      </form>
    </div>
  );
}

export default Form;