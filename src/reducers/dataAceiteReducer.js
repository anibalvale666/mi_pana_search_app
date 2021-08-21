import { types } from "../types/types";

const initialState = {
    searchData: {
        placa: 'v2d-517',
        marca: 'Toyota ist',
        aceite_motor: {
            aceite: 'castrol 5w-30',
            fecha: new Date(),
            km: '130000'
        },
        aceite_caja: {
            aceite: 'motul 80w-90',
            fecha: new Date(),
            km: '85000'
        },
        filtros:{
            aceite: 'lf-3005',
            aire: 'fa-323',
            combustible: 'lg55',
            cabina: ''
        },
        liquido_radiador: {
            liquido: 'vistonyverde',
            fecha: new Date(),
            km: '75000'
        },
        obs: 'el carro ok '
    }
}



export const dataAceiteReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                searchData: action.payload
            }

        case types.dataAddNew:
            return {
                ...state,
            }

        default:
            return state;
    }
}
