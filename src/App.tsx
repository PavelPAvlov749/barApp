import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import style from './App.module.css';
import { Navbar } from './Components/Navbar';
import { Products, productType } from './ProductModel/productModel';
import { product_actions, selectedType } from './Redux/productReducer';
import { Global_state_type } from './Redux/Store';
import { Router } from './Router/Router';

function App() {
  const dipsatch = useDispatch()
  let items : any = localStorage.getItem("products")
  if(items?.length > 0){
    dipsatch(product_actions.setDelected(JSON.parse(items)))
  }

 
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
