import { types } from "../types/types";

const initialState = {
    searchData: {
        placa: '',
        marca: '',
        aceite_motor: {
            aceite: '',
            fecha: '',
            km: ''
        },
        aceite_caja: {
            aceite: '',
            fecha: '',
            km: ''
        },
        filtros:{
            aceite: '',
            aire: '',
            combustible: '',
            cabina: ''
        },
        liquido_radiador: {
            liquido: '',
            fecha: '',
            km: ''
        },
        obs: '',
        id: ''
    }
}



export const dataAceiteReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.dataAddNew:
            return {
                ...state,
            }
        case types.dataResult:
            return {
                ...state,
                searchData: action.payload
            }
        case types.dataUpdated:
            return {
                ...state,
                searchData: action.payload
            }
        
        case types.datainitialState:
            return {
                ...state,
                searchData: initialState.searchData
            }

        default:
            return state;
    }
}
