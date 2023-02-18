import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { productType } from "../ProductModel/productModel";
import { Global_state_type } from "../Redux/Store";
import styles from "../Styles/Calculate.module.css"


export const ProductCard = () => {
    const dispatch = useDispatch()
    const location = useLocation().pathname.split("/")[2].split("=")[1]
    const currentProduct = useSelector((state : Global_state_type) => state.prdouctReducer.products.find((el : productType) => el.id === location))
    const [showDescription,setShow] = useState(false)
    const [showComposition,setShowComposition] = useState(false)
    let [value,setValue] = useState(0)
    let calculated = currentProduct?.calculate(Number(value))
    const calculate = (e : any) => {
        setValue(e.currentTarget.value)
    }
    let current = JSON.stringify(currentProduct?.composition).split(",")
    const onError = () => {
        console.log("efwef")
    }
    return (
        <section className={styles.calculateContainer}>

            <h1>{currentProduct?.name}</h1>
            <button onClick={() => {
                if(showDescription){
                    setShow(false)
                }else{
                    setShow(true)
                    }}}>Описание</button>
            {showDescription ? <p>{currentProduct?.description}</p> : null}
            <br />
            <button onClick={() => {
                if(showComposition){
                    setShowComposition(false)
                }else{
                    setShowComposition(true)
                    }}}>Coстав</button>
            {/* {showComposition ? current.map((el) => {return <><span>{el}</span><br /></>}) : null} */}
            {showComposition ? Object.keys(currentProduct?.composition as {}).map((el : string,index:number) => {
                console.log(Object.values(calculated as {})[index])
                return (
                    <>
                    <span className={styles.result}>{el.includes("_") ? el.split("_")[0] + " " + el.split("_")[1] : 
                    el + " : " + Object.values(currentProduct?.composition as {})[index]}</span>
               
                    <br />
                    </>
                )
            }) : null}
            <h2>Расчитать</h2>
            <form >
            <input type="number" onError={onError} placeholder="Сколько готовим?"  onChange={calculate}></input>
            </form>

         
            <br />
            {Object.keys(calculated as {}).map((el : string,index:number) => {
                console.log(Object.values(calculated as {})[index])
                return (
                    <>
                    
                    <span className={styles.result}>{el.includes("_") ? el.split("_")[0] + " " + el.split("_")[1] : 
                    el + " : " + Object.values(calculated as {})[index]}</span>
               
                    <br />
                    </>
                )
            })  }
        </section>
    )
}