import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import style from './App.module.css';
import { Navbar } from './Components/Navbar';
import { Products } from './ProductModel/productModel';
import { product_actions } from './Redux/productReducer';
import { Router } from './Router/Router';

function App() {
  const dipsatch = useDispatch()
  useEffect(() => {
    dipsatch(product_actions.setProducts(Products))
  })
  return (
    <div className={style.App}>

      <HashRouter>
        <Router>

        </Router>
        <Navbar></Navbar>
      </HashRouter>
   
    </div>
  );
}

export default App;
