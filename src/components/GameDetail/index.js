import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Title from 'src/trophy-ui/Title';
import Subtitle from 'src/trophy-ui/Subtitle';
import Trophy from 'src/trophy-ui/Trophy';

import img from 'src/assets/games/death-stranding.png'

import './style.scss';

const GameDetail = () => {
    const style = {
        color: '#4e4368',
    }
    return (
        <AnimatePresence>
            <motion.div
                className='gamedetail'
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: -10 }}
                transition={{ duration: .2 }}
            >
                <Title title='Death Stranding' style={style} />
                <div className='gamedetail-content'>
                    <div className='gamedetail-content-top'>
                        <img className='gamedetail-content-top-img' src={img} />

                    </div>
                    <div className='gamedetail-content-bottom'>
                        <Subtitle title="Trophies" />
                        <div className='gamedetail-content-bottom-trophylist'>
                            <Trophy />
                            <Trophy />
                            <Trophy />
                            <Trophy />
                            <Trophy />
                            <Trophy />
                            <Trophy />
                            <Trophy />
                            <Trophy />
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </AnimatePresence>
    );
}

export default GameDetail;