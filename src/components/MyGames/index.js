import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'src/trophy-ui/Container';
import Title from 'src/trophy-ui/Title';
import GameCard from '../../trophy-ui/GameCard';
import { AnimatePresence, motion } from 'framer-motion';

import gamelist from 'src/data/games';

import './style.scss';

const MyGames = () => {
  const style = {
    color: '#4e4368'
  };
  return (
    <AnimatePresence>
      <motion.div
        className="trophies"
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        exit={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}>
        <Title title="My Games" style={style} />
        <div className="game-list">
          {gamelist.map((game) => {
            return (
              <Link to={game.slug}>
                <GameCard game={game} key={game.id} />
              </Link>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MyGames;
