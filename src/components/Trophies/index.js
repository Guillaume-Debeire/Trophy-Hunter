import React from 'react';
import Container from 'src/trophy-ui/Container';
import Title from 'src/trophy-ui/Title';

import { AnimatePresence, motion } from 'framer-motion';

import './style.scss';

const Trophies = () => {
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
                <Title title='Trophies' style={style} />
            </motion.div>
        </AnimatePresence>
    )
}

export default Trophies;