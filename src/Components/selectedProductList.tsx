import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Global_state_type } from "../Redux/Store";
import nothung from "../Assets/nothing.png"
import { productType } from "../ProductModel/productModel";
import { NavLink } from "react-router-dom";

export const Selected = () => {
    const dispatch = useDispatch()
    const products = useSelector((state : Global_state_type) => state.prdouctReducer.selected)
    if(products.length > 0){
    return (
        <section>
            {products.map((el : productType) => {
                return(
                    <>
                    <NavLink to={"/product/id=" + el.id}>
                        <span>{el.name}</span>
                    </NavLink>
                    
                    </>
                )
            })}
        </section>
    )}else{
        return(
            <section>
                <h1>No elements</h1>
                <img src={nothung}></img>
            </section>
        )
    }
}