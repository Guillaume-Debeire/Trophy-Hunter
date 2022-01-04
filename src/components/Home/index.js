import React from 'react';
import Title from 'src/trophy-ui/Title'

import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {
    const style = {
        color: '#4e4368',
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
                <Title title='Home' style={style} />
            </motion.div>
        </AnimatePresence>
    )
}

export default Home;