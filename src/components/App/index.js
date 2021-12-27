// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Connexion from 'src/components/Connexion'
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    
    <Connexion />
    <Nav />
  </div>
);

// == Export
export default App;
