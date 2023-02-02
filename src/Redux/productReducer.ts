import { InferActionType } from "./Store";




type initial_state_type = {

}

let initial_state : initial_state_type = {


}

//Acrtion types
type Action_Type = InferActionType<typeof product_actions>;

export const productReducer = (state = initial_state, action: Action_Type) => {
    switch (action.type) {
      
        default:
            return state
    }
}

export const product_actions = {
  

}

