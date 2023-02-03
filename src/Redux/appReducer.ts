import { InferActionType } from "./Store";


const SET_INIT = "barApp/appReducer/setInit"

type initial_state_type = {
    isInit : boolean
}

let initial_state : initial_state_type = {
    isInit : false

}

//Acrtion types
type Action_Type = InferActionType<typeof app_actions>;

export const appReducer = (state = initial_state, action: Action_Type) => {
    switch (action.type) {
      case SET_INIT : {
        return {
            ...state,
            isInit : action.payload
        }
      }
        default:
            return state
    }
}

export const app_actions = {
  setInit : (isInit : boolean) => ({
    type : "barApp/appReducer/setInit",
    payload : isInit
  } as const)

}

