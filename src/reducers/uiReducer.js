import { types } from "../types/types";

const initialState = {
    OpenFilterModal: false,
}



export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenFilterModal:
            return {
                ...state,
                OpenFilterModal: true
            }

        case types.uiCloseFilterModal:
            return {
                ...state,
                OpenFilterModal: false
            }
    
        default:
            return state;
    }


}