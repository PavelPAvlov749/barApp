import React from 'react';
import { HashRouter } from 'react-router-dom';

import style from './App.module.css';
import { Navbar } from './Components/Navbar';
import { Router } from './Router/Router';

function App() {
  return (
    <div className={style.App}>
             <h1>APPPP</h1>
      <HashRouter>
        <Router>
  
        </Router>
        <Navbar></Navbar>
      </HashRouter>
   
    </div>
  );
}

export default App;
