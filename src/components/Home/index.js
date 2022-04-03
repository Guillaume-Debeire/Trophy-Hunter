import React from 'react';
import Title from 'src/trophy-ui/Title'
import MainNavigation from 'src/trophy-ui/Nav/main-navigation/MainNavigation'

import { AnimatePresence, motion } from 'framer-motion';
import { navigationItems } from 'src/data/navigation'

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
                <MainNavigation
                    navItems={navigationItems}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default Home;