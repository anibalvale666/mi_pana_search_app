import { types } from "../types/types";

const initialState = {
    
    filterSearchDate: '',
    filterList: [],
    filterActive: null
}

export const filterReducer = (state = initialState, action ) => {

    switch (action.type) {

        case types.filterLoaded:
            return {
                ...state,
                filterList: [ ...action.payload ]
            }


        case types.filterAddNew:
            return {
                ...state,
                filterList:[
                    ...state.filterList,
                    action.payload
                ]
            }
        
        case types.filterUpdated:
            return {
                ...state,
                filterList: state.filterList.map(
                    e => (e.id === action.payload.id ) ? action.payload : e
                )
            }

        case types.filterSetActive:
            return {
                ...state,
                filterActive: action.payload
            }
        case types.filterClearActiveFilter:
            return {
                ...state,
                filterActive: null
            }

        case types.filterDeleted:
            return {
                ...state,
                filterList: state.filterList.filter(
                   e => (e.id !== action.payload )
                )
            }

        case types.filterNotResult:
            return {
                ...state,
                filterList: []
            }


        case types.changeFilterDate:
            return {
                ...state,
                filterSearchDate: action.payload
            }
        
        default:
            return state;
    }
}

