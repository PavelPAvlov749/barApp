import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Global_state_type } from "../Redux/Store";
import nothung from "../Assets/nothing.png"
import { productType } from "../ProductModel/productModel";
import { NavLink } from "react-router-dom";
import styles from "../Styles/SelectedProductList.module.css"
import { product_actions, selectedType } from "../Redux/productReducer";
import { match } from "assert";


export const Selected = () => {
    const dispatch = useDispatch()
    const products = useSelector((state : Global_state_type) => state.prdouctReducer.selected)
    const readyProducts = useSelector((state : Global_state_type ) => state.prdouctReducer.ready)
    let onClickHandler = (el : productType) => {
        dispatch(product_actions.addToReady(el))
    }

    if(products.length > 0){
    return (
        <section className={styles.selectedProductsContainer}>
            <section className={styles.status}>
                <span className={styles.readyOf}>{readyProducts.length + " / " + products.length}</span>
                <span className={styles.percent}>{(100 / products.length) *  Number(readyProducts.length.toFixed(2)) + "%"}</span>
            </section>
            {products.map((el : selectedType) => {
                return(
                    <div className={styles.elemnt}>
                    <NavLink to={"/product/id=" + el.id}>
                        <span>{el.name}</span>
                    </NavLink>
                    <input type="checkbox" disabled={readyProducts.length === products.length} onClick={() => {
                        if(readyProducts.length <= products.length){
                            onClickHandler(el)
                        }
                        
                    }}/>
                    <br />
                   
                    </div>
                )
            })}
             <button className={styles.endShift}>Завершить смену</button>
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