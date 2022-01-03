import React from 'react';
import Container from 'src/trophy-ui/Container'
import Title from 'src/trophy-ui/Title'
import GameCard from '../../trophy-ui/GameCard';
import { AnimatePresence, motion } from 'framer-motion';

import './style.scss';

const MyGames = () => {
    const style = {
        color: '#500CF3',
    }
    return (
        <AnimatePresence>
            <motion.div
                className='trophies'
                initial={{ x: 10 }}
                animate={{ x: 0 }}
                exit={{ x: -10 }}
                transition={{ duration: .2 }}
            >
                <Title title='My Games' style={style} />
                <div className='game-list'>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default MyGames;