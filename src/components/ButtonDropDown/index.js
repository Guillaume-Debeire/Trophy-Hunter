import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DarkModeButton from 'src/components/DarkModeButton';

import './style.scss';

const variants = {
    open: { y: -50 },
    closed: { y: -765 },
}

const transition = {
    type: "spring",
    stiffness: 200,
    damping: 50,
};

const ButtonDropDown = () => {
    const [isOpen, setIsOpen] = useState(true);

        return (
        <motion.div animate={isOpen ? "open" : "closed"} variants={variants} transition={transition} initial={false}>
            <div className='drop'>
                <DarkModeButton />
                <button type='button' className='drop-button' onClick={() => setIsOpen(isOpen => !isOpen)}>{isOpen? '^' : 'v'}</button>
            </div>
        </motion.div>
    )
}
export default ButtonDropDown;