import { types } from "../types/types";

const initialState = {
    searchData: {
        placa: '',
        marca: '',
        aceite_motor: {
            aceite: '',
            fecha: new Date(),
            km: ''
        },
        aceite_caja: {
            aceite: '',
            fecha: new Date(),
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
            fecha: new Date(),
            km: ''
        },
        obs: ''
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
        
        case types.datainitialState:
            return {
                ...state,
                searchData: initialState.searchData
            }

        default:
            return state;
    }
}
