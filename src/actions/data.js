import Swal from "sweetalert2";
import { fetchSintoken } from "../helpers/fetch";
import { types } from "../types/types";

export const dataStartResult = ( placa ) => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchSintoken('data',{placa}, 'POST');

            const body = await resp.json(); 
            
            if( body.ok ) {
                dispatch(dataResult(body.data));
            } else {
                Swal.fire('Error', body.msg, 'error');
                dispatch(badResult());
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const dataResult = ( data ) =>({
    type:types.dataResult,
    payload: data
});

const badResult = () =>({
    type: types.datainitialState,
});

export const dataAddNew = ( data ) => ({
    type: types.dataAddNew,
    payload: data
});


export const dataSetActive = ( data ) => ({
    type: types.dataResult,
    payload: data
})



