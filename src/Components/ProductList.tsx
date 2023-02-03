import { stat } from "fs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productType } from "../ProductModel/productModel";
import { product_actions } from "../Redux/productReducer";
import { Global_state_type } from "../Redux/Store";

export const ProductList = () => {
    const products = useSelector((state : Global_state_type) => state.prdouctReducer.products)
    const dispatch = useDispatch()

    const onChange = (el : productType) => {
        dispatch(product_actions.addToSelected(el))
    }
    return (
        <section>
            {products.map((el : productType) => {
                return (
                    <>
                    <span>{el.name}</span>
                    <input type="checkbox" onChange={() =>{
                        onChange(el)
                    }}></input>
                    </>
                )
            })}
        </section>
    )
}