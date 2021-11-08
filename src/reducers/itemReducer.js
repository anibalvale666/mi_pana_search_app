import { types } from "../types/types";

const initialState = {
    itemSearchBrand: 'MOBIL',
    itemList: []
}

export const itemReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.itemGetListByBrand:
            return {
                ...state,
                itemList: action.payload
            }
        case types.itemEmptyList:
            return {
                ...state,
                itemList: []
            }

        case types.changeItemBrand:
            return {
                ...state,
                itemSearchBrand: action.payload
            }

        default:
            return state;
    }
}