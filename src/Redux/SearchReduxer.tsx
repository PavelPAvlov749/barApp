import { Products, productType } from "../ProductModel/productModel";
import { InferActionType } from "./Store";

const SET_RESULT = "baeApp/searchReducer/setResult"
const SET_STRING = "barApp/searchReducer/setSting"



type initial_state_type = {
   searchedString : string,
   result : productType[]

}

let initial_state : initial_state_type = {
  searchedString : "",
  result : []
}

//Acrtion types
type Action_Type = InferActionType<typeof search_actions>;

export const searchReducer = (state = initial_state, action: Action_Type) => {
    switch (action.type) {
        case SET_RESULT : {
            return {
                ...state,
                result : action.payload
            }
        }
        default:
            return state
    }
}

export const search_actions = {
    setResult : (products : productType[]) => ({
        type : "baeApp/searchReducer/setResult",
        payload : products
    } as const )

}

