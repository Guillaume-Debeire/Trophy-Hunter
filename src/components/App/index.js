// == Import npm
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Connexion from 'src/components/Connexion';
import Home from 'src/components/Home';
import Trophies from 'src/components/Trophies';
import MyGames from 'src/components/MyGames';
import GameDetail from 'src/components/GameDetail';
import ModalSettings from 'src/components/ModalSettings';
import SettingsButton from '../../trophy-ui/Buttons/SettingsButton';
import { SettingOutlined } from '@ant-design/icons';
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
        <Route exact path="/mygames" element={<MyGames />} />
        <Route exact path="/mygames/game-detail" element={<GameDetail />} />
      </Routes>
      <AnimatePresence>
        {openSettings && (
          <motion.div
            className="modal"
            initial={{ x: 630, y: 480, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            exit={{ x: 630, y: 480, opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}>
            <ModalSettings />
          </motion.div>
        )}
      </AnimatePresence>

      <button className="settings" onClick={() => setOpenSettings((openSettings) => !openSettings)}>
        <SettingOutlined className="settings-icon" />
      </button>
      {/* <SettingsButton onClick={() => setOpenSettings(openSettings => !openSettings)} /> */}
      <Nav />
    </div>
  );
};

// == Export
export default App;
