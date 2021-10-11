import { types } from "../types/types";

const initialState = {
    companies: [],
    companyActive: {
        name:"INCAMOTORS",
        brand:"CASTROL",
        currency:"DOLAR",

    }
}

export const companyReducer = ( state = initialState, action) => {
    switch (action.type) {

        case types.companyLoaded:
            return {
                ...state,
                companies: [...action.payload]
            }
        case types.companyNotResult:
            return {
                ...state,
                companies: []
            }

        case types.companySetActive:
            return {
                ...state,
                companyActive: action.payload
            }
        case types.companyClearActiveCompany:
            return {
                ...state,
                companyActive: null
            }
        default:
            return state;
    }
}

