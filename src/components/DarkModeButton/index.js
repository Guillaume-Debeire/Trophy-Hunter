import React, { useState } from 'react';
import { motion } from 'framer-motion'

import './style.scss';

const variants = {
    open: { x: 27 },
    closed: { x: 0 },
}

const DarkModeButton = () => {
    const [isActive, setIsActive] = useState(false);
    return (
    <div className='dm-button'>
        <div  className='dm-button-background' onClick={() => setIsActive(!isActive)}>
                <motion.button animate={isActive ? "open" : "closed"} variants={variants} transition={{
                    x: { type: "spring", stiffness: 20,  },
                    duration: .1
                }} initial={false}type='button' className='dm-button-button' />
        </div>
    </div> 
    )
}

export default DarkModeButton;