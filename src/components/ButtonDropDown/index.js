import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DarkModeButton from 'src/components/DarkModeButton';

import './style.scss';

const variants = {
    open: { y: 900 },
    closed: { y: 0 },
}



const ButtonDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

        return (
        <motion.div animate={isOpen ? "open" : "closed"} variants={variants} transition={{ duration: .3 }} initial={false}>
            <div className='wrapper-drop'>
                <div className='drop'>
                    <div className='drop-body'>
                        <DarkModeButton />
                    </div>
                    
                    <div className='drop-footer'>
                        <button type='button' className='drop-footer-button' onClick={() => setIsOpen(isOpen => !isOpen)}>
                            <div className='drop-footer-button-handler' />
                        </button>
                    </div>
                    
                </div>
            </div>
        </motion.div>
    )
}
export default ButtonDropDown;