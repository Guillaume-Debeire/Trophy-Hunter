import React from 'react';

import './style.scss';

// import img from 'src/assets/games/death-stranding.png';

import bronze from 'src/assets/img/trophy/bronze.png';
import silver from 'src/assets/img/trophy/silver.png';
import gold from 'src/assets/img/trophy/gold.png';
import platinum from 'src/assets/img/trophy/platinum.png';

const GameCard = ({ game }) => {
  const img = require('src/assets/games/' + game.slug + '.png');
  console.log(img);
  return (
    <div className="gamecard">
      <div className="gamecard-picture">
        <img className="gamecard-picture-img" src={img} />
      </div>
      <div className="gamecard-content">
        <div className="gamecard-content-left">
          <h2 className="gamecard-content-left-title">{game.name}</h2>
          <p className="gamecard-content-left-text">
            Time played : <span>{game.timePlayed}</span>
          </p>
        </div>
        <div className="gamecard-content-right">
          <div className="gamecard-content-right-trophies">
            <img className="gamecard-content-right-trophies-img bronze" src={bronze}></img>
            <img className="gamecard-content-right-trophies-img silver" src={silver}></img>
            <img className="gamecard-content-right-trophies-img gold" src={gold}></img>
            <img className="gamecard-content-right-trophies-img platinum" src={platinum}></img>
          </div>
          <div className="gamecard-content-right-number">
            <p className="gamecard-content-right-number-text">23</p>
            <p className="gamecard-content-right-number-text">8</p>
            <p className="gamecard-content-right-number-text">2</p>
            <p className="gamecard-content-right-number-text">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
