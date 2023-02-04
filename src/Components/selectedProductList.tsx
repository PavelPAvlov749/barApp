import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Global_state_type } from "../Redux/Store";
import nothung from "../Assets/nothing.png"
import { productType } from "../ProductModel/productModel";
import { NavLink } from "react-router-dom";
import styles from "../Styles/SelectedProductList.module.css"
import { selectedType } from "../Redux/productReducer";


export const Selected = () => {
    const dispatch = useDispatch()
    const products = useSelector((state : Global_state_type) => state.prdouctReducer.selected)
    let readyCount = products.filter((el : selectedType) => el.isReady === true).length
    if(products.length > 0){
    return (
        <section className={styles.selectedProductsContainer}>
            <section className={styles.status}>
                <span className={styles.readyOf}>{readyCount + " / " + products.length}</span>
                <span className={styles.percent}>{(100 / products.length) * readyCount + "%"}</span>
            </section>
            {products.map((el : selectedType) => {
                return(
                    <>
                    <NavLink to={"/product/id=" + el.id}>
                        <span>{el.name}</span>
                    </NavLink>
                    <input type="checkbox" />
                    
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