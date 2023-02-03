import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { productType } from "../ProductModel/productModel";
import { Global_state_type } from "../Redux/Store";

export const ProductCard = () => {
    const dispatch = useDispatch()
    const location = useLocation().pathname.split("/")[2].split("=")[1]
    const currentProduct = useSelector((state : Global_state_type) => state.prdouctReducer.products.find((el : productType) => el.id === location))
    const [showDescription,setShow] = useState(false)
    const [showComposition,setShowComposition] = useState(false)
    let [value,setValue] = useState(0)
    let calculated = JSON.stringify(currentProduct?.calculate(Number(value)))
    const calculate = (e : any) => {
        setValue(e.currentTarget.value)
    }
    return (
        <section>

            <h1>{currentProduct?.name}</h1>
            <button onClick={() => {
                if(showDescription){
                    setShow(false)
                }else{
                    setShow(true)
                    }}}>Description</button>
            {showDescription ? <p>{currentProduct?.description}</p> : null}
            <br />
            <button onClick={() => {
                if(showComposition){
                    setShowComposition(false)
                }else{
                    setShowComposition(true)
                    }}}>Composition</button>
            {showComposition ? <p>{JSON.stringify(currentProduct?.composition)}</p> : null}
            <h2>Calculate</h2>
            <input type="text" placeholder="How much we need?" onChange={calculate}></input>
            {calculated}
        </section>
    )
}