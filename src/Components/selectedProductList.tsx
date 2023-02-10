import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Global_state_type } from "../Redux/Store"
import nothung from "../Assets/nothing.png"
import { productType } from "../ProductModel/productModel";
import { NavLink, useNavigate } from "react-router-dom"
import styles from "../Styles/SelectedProductList.module.css"
import { product_actions, selectedType } from "../Redux/productReducer"
import useLocalStorage from "use-local-storage"
import { TelegramAPI } from "../BotAPI/AxiosConfig";
import { strictEqual } from "assert";


export const Selected = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        let item = localStorage.getItem("products")
        if(item){
            dispatch(product_actions.setDelected(JSON.parse(item)))
        }

    },[])
    const products = useSelector((state : Global_state_type) => state.prdouctReducer.selected)
    const readyProducts = useSelector((state : Global_state_type ) => state.prdouctReducer.ready)
    let onClickHandler = (el : productType) => {
        dispatch(product_actions.addToReady(el))
    }
   
    const endShift = () => {
        dispatch(product_actions.clear())
        dispatch(product_actions.clearSelected())
        localStorage.clear()
        navigate("/done")
        TelegramAPI.sendMessage()
    }

    if(products.length > 0){
    return (
        <section className={styles.selectedProductsContainer}>
            <section className={styles.status}>
                <span className={styles.readyOf}>{readyProducts.length + " / " + products.length}</span>
                <span className={styles.percent}>{(100 / products.length) *  Number(readyProducts.length.toFixed(2)) + "%"}</span>
            </section>
          
            {products.map((el : productType) => {
               
                
               return(
                   <div className={styles.elemnt}>
                   <NavLink to={"/product/id=" + el.id}>
                       <span>{el.name.includes("_") ? el.name.split("_")[0] + " " + el.name.split("_")[1] : el.name}</span>
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
          

         
             <button className={styles.endShift} onClick={endShift}  >Завершить смену</button>
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