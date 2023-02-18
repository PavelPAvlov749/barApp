import React, { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Styles/NewProduct.module.css"



export const NewProduct = () => {
    const dispatch = useDispatch();
    let [newElement, setNewElement] = useState({})
    let newelementName = ""
    let newElementCount = 0
    const onNameInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setNewElement({ ...newElement, name: e.currentTarget.value })
    }
    const setElementname = (e: React.SyntheticEvent<HTMLInputElement>) => {
        newelementName = e.currentTarget.value
    }
    const setElementVal = (e : React.SyntheticEvent<HTMLInputElement>) => {
        newElementCount = Number(e.currentTarget.value)
    }
    const setValue = (e: React.SyntheticEvent<HTMLInputElement>) => {

    }
    let [state,setState] = useState( [
        <>
            <input type="text" placeholder="Enter the name" style={{ "display": "inline" }}></input>
            <input type="number" placeholder="" style={{ "display": "inline" ,"width" : "2rem"}}></input>
            <br />
        </>
    ])
    const inputs = [
        <>
            <input type="text" placeholder="Enter the name" style={{ "display": "inline" }}></input>
            <input type="number" placeholder="" style={{ "display": "inline" ,"width" : "2rem"}}></input>
        </>

    ]
    const addInput = (e: React.MouseEvent<HTMLElement>) => {
        setState([...state,  <>
            <input type="text" placeholder="Enter the name" style={{ "display": "inline" }}></input>
            <input type="number" placeholder="" style={{ "display": "inline" ,"width" : "2rem"}}></input>
            <br />
        </>])
        setNewElement({...newElement,[newelementName] : newElementCount})
        newelementName = ""
        newElementCount = 0
        console.log(newElement)
    }
    const pushElementIntoDB = () => {
        console.log()
    }
    return (
        <div className={styles.nreProductContainer}>
            <h1>Add new element</h1>
            <input type="text" placeholder="Enter the name" style={{ "display": "inline" }} onChange={onNameInput}></input>
            <br />
            <div className={styles.inputList}>
            {state}
            </div>
          
            <br />
            <div className={styles.buttons}>
            <button onClick={addInput}>+</button>
            
            <button onClick={pushElementIntoDB}>Add</button>
            </div>
   
        </div>
    )
}