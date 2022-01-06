import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from 'src/trophy-ui/Title';
import Subtitle from 'src/trophy-ui/Subtitle';
import Trophy from 'src/trophy-ui/Trophy';
import TrophyDetail from 'src/components/TrophyDetail';
import gamelist from 'src/data/games';

import img from 'src/assets/games/death-stranding.png';

import './style.scss';

const GameDetail = () => {
  const style = {
    color: '#4e4368'
  };

  const paramGame = useParams();
  const game = gamelist.find((currGame) => {
    return currGame.slug === paramGame.game;
  });

  const [openDetail, setOpenDetail] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className="gamedetail"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: -10 }}
        transition={{ duration: 0.2 }}>
        <Title title={game.name} style={style} />
        <div className="gamedetail-content">
          <div className="gamedetail-content-top">
            <div className="gamedetail-content-top-left">
              <img className="gamedetail-content-top-left-img" src={img} />
            </div>
            <div className="gamedetail-content-top-right">
              <p className="gamedetail-content-top-right-text">Time played : {game.timePlayed}</p>
              <p className="gamedetail-content-top-right-text">Trophy earned : 48/48</p>
              <p className="gamedetail-content-top-right-text">Completion : 100%</p>
            </div>
          </div>
          <div className="gamedetail-content-bottom">
            <Subtitle title="Trophies" />
            <div className="gamedetail-content-bottom-trophylist">
              {game.trophies.map((trophy) => {
                return (
                  <button
                    className="gamedetail-content-bottom-trophylist-button"
                    onClick={() => setOpenDetail((openDetail) => !openDetail)}>
                    <Trophy trophy={trophy} key={trophy.name} />
                  </button>
                );
              })}
              <AnimatePresence>
                {openDetail && (
                  <motion.div
                    className="modal-trophy"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setOpenDetail((openDetail) => !openDetail)}>
                    <TrophyDetail />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameDetail;
