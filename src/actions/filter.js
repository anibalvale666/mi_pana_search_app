import Swal from "sweetalert2";
import { fetchContoken } from "../helpers/fetch";
import { types } from "../types/types"


// crear un nuevo filtro
export const filterStartAddNew = ( filter ) => {
    return async(dispatch) => {
        try {
            const resp = await fetchContoken('filterswishlist/new',filter, 'POST');
            const body = await resp.json();

            if(body.ok) {
                dispatch(filtertAddNew(body.filter));
                Swal.fire('Guardado','Guardado con éxito', 'success');
                // dispatch(filterStartResult(filter.date));
            }
        } catch (error) {
            console.log(error)
        }
    }
}


const filtertAddNew = (filter) => ({
    type: types.filterAddNew,
    payload: filter
})

// Actualizamos un filtro
export const filterStartUpdate = ( filter ) => {
    return async(dispatch) => {
        try {
            const resp = await fetchContoken(`filterswishlist/${filter.id}`,filter, 'PUT');
            const body = await resp.json()

            if ( body.ok ) {
                dispatch( filterUpdated( body.filter ) );
                Swal.fire('Actualizado','Actualizado con éxito', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const filterUpdated = (filter) => ({
    type: types.filterUpdated,
    payload: filter
})



//trae una lista de filtyros segun el mes elegido
export const filterStartResult = (date) => {
    return  async(dispatch) => {
        try {
            const resp = await fetchContoken( 'filterswishlist',{date},'POST' );
            const body = await resp.json();
            if(body.ok) {
                dispatch( FilterResultLoaded( body.filters ) );
            } else {
                dispatch( FilterNotResultLoaded() );
            }
        } catch ( error ) {
            console.log(error)
        }
    }
};

const FilterResultLoaded = ( filters ) =>({
    type: types.filterLoaded,
    payload: filters
});
const FilterNotResultLoaded = () =>({
    type: types.filterNotResult,

});

export const filterSetActive = (filter) => ({
    type: types.filterSetActive,
    payload: filter
});

export const filterClearSetActive = () => ({
    type: types.filterClearActiveFilter
})

export const filterStartDelete = ( id ) => {
    return async(dispatch) => {

        try {
            const resp = await fetchContoken(`filterswishlist/delete/${ id }`, {}, 'DELETE');
            const body = await resp.json();
            if(body.ok) {
                dispatch(filterDeleted(id));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }



    }
}

const filterDeleted = (id) => ({ 
    type: types.filterDeleted,
    payload:  id
})



export const changeFilterSearchDate = (date) => ({
    type: types.changeFilterDate,
    payload: date
})