import { types } from "../types/types";


const initialState = {
    accountList: [],
    accountActive: null,
    accountSearchBrand: 'CASTROL'
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.accountLoaded:
            return {
                ...state,
                accountList: [ ...action.payload ]
            }

        case types.accountAddNew:
            return {
                ...state,
                accountList:[
                    ...state.accountList,
                    action.payload
                ]
            }
        
        case types.accountUpdated:
            return {
                ...state,
                accountList: state.accountList.map(
                    e => (e.id === action.payload.id ) ? action.payload : e
                )
            }

        case types.accountSetActive:
            return {
                ...state,
                accountActive: action.payload
            }
        case types.accountClearActiveAccount:
            return {
                ...state,
                accountActive: null
            }

        case types.accountDeleted:
            return {
                ...state,
                accountList: state.accountList.filter(
                   e => (e.id !== action.payload )
                )
            }

        case types.accountNotResult:
            return {
                ...state,
                accountList: []
            }


        case types.changeAccountBrand:
            return {
                ...state,
                accountSearchBrand: action.payload
            }
        
        default:
            return state;
    }
}