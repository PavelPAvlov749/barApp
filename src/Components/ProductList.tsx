import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "use-local-storage";
import { productType } from "../ProductModel/productModel";
import { product_actions } from "../Redux/productReducer";
import { search_actions } from "../Redux/SearchReduxer";
import { Global_state_type } from "../Redux/Store";
import styles from "../Styles/ProductList.module.css"

export const ProductList = () => {
    const products = useSelector((state: Global_state_type) => state.prdouctReducer.products)
    const dispatch = useDispatch()
    const findedProducts = useSelector((state : Global_state_type) => state.search.result)

    const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
        let searchedString = e.currentTarget.value
        let finded : productType[] = []
        products.forEach((el : productType,index : number) => {
            if(el.name.substring(0,searchedString.length) === searchedString){
                finded.push(el)
            }
            dispatch(search_actions.setResult(finded))
            
        })
        console.log(finded)
    }
    const onChange = (el: productType) => {
        // dispatch(product_actions.addToSelected(el))
        let prevStorage = JSON.parse(localStorage.getItem("products") as string)
      
        if(prevStorage){
            prevStorage.push(el)
        localStorage.setItem("products",JSON.stringify(prevStorage))}
        else{
            localStorage.setItem("products",JSON.stringify([el]))
        }
    }
    return (
        <section className={styles.priductListPAge}>
            <input className={styles.search} placeholder="Search items" onChange={searchHandler}></input>
            <section className={styles.productListContainer}>

                {findedProducts.length > 0 ? findedProducts.map((el: productType) => {
                    return (
                        <div className={styles.element}>
                            <span>{el.name}</span>
                            <input className={styles.checkBox} type="checkbox" onChange={() => {
                                onChange(el)
                            }}></input>
                            <br />

                        </div>
                    )
                }): products.map((el: productType) => {
                    return (
                        <div className={styles.element}>
                            <span>{el.name}</span>
                            <input className={styles.checkBox} type="checkbox" onChange={() => {
                                onChange(el)
                            }}></input>
                            <br />

                        </div>
                    )})}
            </section>
        </section>

    )
}