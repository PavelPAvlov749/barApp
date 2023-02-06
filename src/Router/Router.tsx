import React from "react";


import { Route, Routes } from "react-router-dom";
import { ProductCard } from "../Components/Calculate";
import { DonePage } from "../Components/Done";
import { ProductList } from "../Components/ProductList";
import { Selected } from "../Components/selectedProductList";

const PRODUCT_LIST = "/productList"
const SELECTED = "/selectedList"
const PRODUCT_INFO = "/product/:id"
const ADD_PRODUCT = "/add"
const DONE = "/done"

export const Router = React.memo((props : any) => {
   

    return (
        <>
            <Routes>
              <Route path={PRODUCT_LIST} element={<ProductList/>}></Route>
              <Route path={SELECTED} element={<Selected/>}></Route>
              <Route path={PRODUCT_INFO} element={<ProductCard/>}></Route>
                <Route path={DONE} element={<DonePage/>}></Route>
            </Routes>
        </>
    )
})