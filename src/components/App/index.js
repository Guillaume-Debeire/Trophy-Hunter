// == Import npm
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Connexion from 'src/components/Connexion';
import Home from 'src/components/Home';
import Trophies from 'src/components/Trophies'
import Options from 'src/components/Options'
import ModalSettings from 'src/components/ModalSettings';
import SettingsButton from '../../trophy-ui/Buttons/SettingsButton';
import { SettingOutlined } from '@ant-design/icons'
import './style.scss';
import { motion, AnimatePresence } from 'framer-motion';

// == Composant
const App = () => {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Connexion />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/trophies" element={<Trophies />} />
        <Route exact path="/options" element={<Options />} />
      </Routes>
      <AnimatePresence>
        {openSettings && 
          <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            exit={{ x: 2000 }}
          >
            <ModalSettings />
          </motion.div>
        }
      </AnimatePresence>
      
      <button className='settings' onClick={() => setOpenSettings(openSettings => !openSettings)}>
        <SettingOutlined className='settings-icon' />
      </button>
      {/* <SettingsButton onClick={() => setOpenSettings(openSettings => !openSettings)} /> */}
      <Nav />
    </div>
  );
}

// == Export
export default App;
