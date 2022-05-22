import React from "react";
import { airports } from '../../interfaces/airports';
import style from './options.module.scss';

const Branch = () => {
  const airportsData = require('../../data/airlines.json');
  return (
    <ul className={style.optionsContainer}>
      {
        airportsData.map((airport: airports) => (
          <li className={style.optionsContainer__option}>{airport.name}</li>
        ))
      }
    </ul>
  );
}

export default Branch;