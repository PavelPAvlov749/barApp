import { stat } from "fs";
import { Products, productType } from "../ProductModel/productModel";
import { InferActionType } from "./Store";


const SET_PRODUCTS = "barApp/productReducer/setProducts"
const ADD_PRODUCT = "barApp/productReducer/addProduct"
const REMOVE_PRODUCT = "barApp/productReducer/removeProduct"
const ADD_TO_SELECTED = "barApp/productReducer/addToSelected"
const SET_IS_READY = "barApp/priductReducer/setIsReady"

export type selectedType = {
    name : string,
    description : string,
    composition : {},
    calculate : (val : number) => {},
    isReady : boolean,
    id : string
}

type initial_state_type = {
    products : productType[],
    selected : selectedType[],
    newProduct : productType | null,
    
}

let initial_state : initial_state_type = {
    products : Products,
    selected : [],
    newProduct : null
}

//Acrtion types
type Action_Type = InferActionType<typeof product_actions>;

export const productReducer = (state = initial_state, action: Action_Type) => {
    switch (action.type) {
        case ADD_TO_SELECTED : {
            return {
                ...state,
                selected : state.selected.find((el : selectedType) => el.name === action.payload.name)? 
                    state.selected.filter((el: selectedType) => el.name !== action.payload.name): state.selected.concat({...action.payload,isReady : false})
            }
        }
        case SET_PRODUCTS : {
            return {...state,products : action.payload}
        }
        case REMOVE_PRODUCT : {
            return {
                ...state,
                products : state.products.filter((el : productType) => el.name !== action.payload)
            }
        }
        case ADD_PRODUCT : {
            return {
                ...state,
                products  :state.products.concat(action.payload)
            }
        }
        case SET_IS_READY : {
            return {
                ...state,
                selected : state.selected
            }
        }
        default:
            return state
    }
}

export const product_actions = {
  setProducts : (products : productType[]) => ({
    type : "barApp/productReducer/setProducts",
    payload : products
  } as const ),
  addProduct : (product : productType) => ({
    type : "barApp/productReducer/addProduct",
    payload : product
  } as const ),
  removeProduct : (productID : string) => ({
    type : "barApp/productReducer/removeProduct",
    payload : productID
  } as const ),
  addToSelected : (product : productType) => ({
    type : "barApp/productReducer/addToSelected",
    payload : product
  } as const ),
  setIsReady : (id : string) => ({
    type : "barApp/priductReducer/setIsReady",
    payload : id
  } as const)

}

