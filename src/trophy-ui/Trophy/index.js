import React from 'react';

import './style.scss';

import bronze from 'src/assets/img/trophy/bronze.png';
import silver from 'src/assets/img/trophy/silver.png';
import gold from 'src/assets/img/trophy/gold.png';
import platinum from 'src/assets/img/trophy/platinum.png';

const Trophy = ({ trophy }) => (
  <div className="trophycard">
    <div className="trophycard-left">
      <img className="trophycard-left-img" src={bronze}></img>
    </div>
    <div className="trophycard-right">
      <h3 className="trophycard-right-title">{trophy.name}</h3>
      <p className="trophycard-right-description">{trophy.description}</p>
    </div>
  </div>
);

export default Trophy;
