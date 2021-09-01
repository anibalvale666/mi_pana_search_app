import Swal from "sweetalert2";
import { fetchContoken, fetchSintoken } from "../helpers/fetch";
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

const dataResult = ( data ) => ({
    type:types.dataResult,
    payload: data
});

export const badResult = () => ({
    type: types.datainitialState,
});

export const dataStartAddNew = ( data ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchContoken('data/new', data ,'POST');
            const body = await resp.json();
            if(body.ok) {
                dispatch(dataAddNew(data));
                Swal.fire('Guardado','Guardado con éxito', 'success');
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export const dataAddNew = ( data ) => ({
    type: types.dataAddNew,
    payload: data
});


export const dataSetActive = ( data ) => ({
    type: types.dataResult,
    payload: data
});

export const dataStartUpdate = (data) => {
    return async (dispatch) => {
        try {
            const resp = await fetchContoken(`data/${data.id}`,data, 'PUT');
            const body = await resp.json();

            if( body.ok ) {
                dispatch(dataUpdated(data));
                Swal.fire('Actualizado','Actualizado con éxito', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const dataUpdated = (data) => ({
    type: types.dataUpdated,
    payload: data 
});



