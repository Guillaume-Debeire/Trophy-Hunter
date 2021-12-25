// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Nav />
  </div>
);

// == Export
export default App;
