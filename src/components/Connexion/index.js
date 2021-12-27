import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './style.scss';

const Connexion = () => {

    const variants1 = {
        open: { opacity: 1, scale: 1 },
        closed: { opacity: 0, scale: 0 },
    }

    const variants2 = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    }

    const variants3 = {
        open: { scale: 1 },
        closed: { scale: 0 },
    }

    const variants4 = {
        open: { scale: 1 },
        closed: { scale: 2.5 },
    }

    const variants6 = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -100 },
    }


    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='connexion'>
            <motion.div className='connexion-box' animate={isOpen ? "closed" : "open"} variants={variants4} transition={{ duration: .5 }}>
                <form className='connexion-box-form'>
                    <motion.div className='connexion-box-form-field' animate={isOpen ? "closed" : "open"} variants={variants1} transition={{ duration: .2 }}>
                        <label for='username'className='connexion-box-form-field-label'>Username</label>
                        <input type='email' name="username"className='connexion-box-form-field-input'></input>
                    </motion.div>
                    <div className={`white-background${isOpen ? '-closed' : '-open'}`}>
                        <div className='white-background-closed-wrapper'>
                            <div className='white-background-closed-wrapper-back'>
                                <motion.div animate={isOpen ? "open" : "closed"} variants={variants6} transition={{ duration: .5 }}className='white-background-closed-wrapper-back-button' onClick={() => setIsOpen(false)} />
                            </div>
                        </div>
                    </div>
                    <motion.div className='connexion-box-form-field' animate={isOpen ? "closed" : "open"} variants={variants2} transition={{ duration: .1 }}>
                        <label for='password' className='connexion-box-form-field-label'>Password</label>
                        <input type='password' name="password" className='connexion-box-form-field-input'></input>
                        
                    </motion.div>
                    <div className="white-password" />
                    <motion.div className='connexion-box-form-submit' onClick={() => setIsOpen(true)} animate={isOpen ? "closed" : "open"} variants={variants3} transition={{ duration: .5 }}>
                        <span>Go</span>
                    </motion.div>
                </form>
            </motion.div>

        </div>
    )
}

export default Connexion;