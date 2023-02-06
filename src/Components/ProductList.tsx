import { stat } from "fs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productType } from "../ProductModel/productModel";
import { product_actions } from "../Redux/productReducer";
import { Global_state_type } from "../Redux/Store";
import styles from "../Styles/ProductList.module.css"

export const ProductList = () => {
    const products = useSelector((state : Global_state_type) => state.prdouctReducer.products)
    const dispatch = useDispatch()

    const onChange = (el : productType) => {
        dispatch(product_actions.addToSelected(el))
    }
    return (
        <section className={styles.priductListPAge}>
            <input className={styles.search} placeholder="Search items"></input>
              <section className={styles.productListContainer}>
           
           {products.map((el : productType) => {
               return (
                   <div className={styles.element}>
                   <span>{el.name}</span>
                   <input className={styles.checkBox} type="checkbox" onChange={() =>{
                       onChange(el)
                   }}></input>
                   <br />
                   
                   </div>
               )
           })}
       </section>
        </section>
      
    )
}