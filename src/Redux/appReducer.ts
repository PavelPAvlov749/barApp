import { InferActionType } from "./Store";




type initial_state_type = {

}

let initial_state : initial_state_type = {


}

//Acrtion types
type Action_Type = InferActionType<typeof app_actions>;

export const appReducer = (state = initial_state, action: Action_Type) => {
    switch (action.type) {
      
        default:
            return state
    }
}

export const app_actions = {
  

}

