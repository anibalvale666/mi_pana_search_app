import { types } from "../types/types";

const initialState = {
    OpenFilterModal: false,
    OpenAccountModal: false,
    OpenAccountRecordModal: false,
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
        case types.uiOpenAccountModal:
            return {
                ...state,
                OpenAccountModal: true
            }

        case types.uiCloseAccountModal:
            return {
                ...state,
                OpenAccountModal: false
            }   

        case types.uiOpenAccountRecordModal:
            return {
                ...state,
                OpenAccountRecordModal: true
            }

        case types.uiCloseAccountRecordModal:
            return {
                ...state,
                OpenAccountRecordModal: false
            }
    
        default:
            return state;
    }


}