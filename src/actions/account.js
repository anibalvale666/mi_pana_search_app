


import Swal from "sweetalert2";
import { fetchContoken } from "../helpers/fetch";
import { types } from "../types/types"


// crear una nueva cuenta
export const accountStartAddNew = ( account ) => {
    return async(dispatch) => {
        try {
            const resp = await fetchContoken('account/new',account, 'POST');
            const body = await resp.json();

            if(body.ok) {
                dispatch(accountAddNew(body.account));
                // dispatch(accountStartResult(account.brand));
                Swal.fire('Guardado','Guardado con éxito', 'success');
                // dispatch(accountStartResult(account.date));
            }
        } catch (error) {
            console.log(error)
        }
    }
}


const accountAddNew = (account) => ({
    type: types.accountAddNew,
    payload: account
})

// Actualizamos un cuenta  
export const accountStartUpdate = ( account ) => {
    return async(dispatch) => {
        try {
            const resp = await fetchContoken(`account/${account.id}`,account, 'PUT');
            const body = await resp.json()
        
            if ( body.ok ) {
                // dispatch(accountStartResult(account.brand));
                dispatch( accountUpdated( body.account ) );
                Swal.fire('Actualizado','Actualizado con éxito', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const accountUpdated = (account) => ({
    type: types.accountUpdated,
    payload: account
})



//trae una lista de cuentas segun la marca elegida
export const accountStartResult = (brand) => {
    return  async(dispatch) => {
        try {
            const resp = await fetchContoken( 'account',{brand},'POST' );
            const body = await resp.json();
            
            if(body.ok) {
                dispatch( accountResultLoaded( body.accounts ) );
            } else {
                dispatch( accountNotResultLoaded() );
            }
        } catch ( error ) {
            console.log(error)
        }
    }
};

const accountResultLoaded = ( accounts ) =>({
    type: types.accountLoaded,
    payload: accounts
});


const accountNotResultLoaded = () =>({
    type: types.accountNotResult,
});

export const accountSetActive = (account) => ({
    type: types.accountSetActive,
    payload: account
});

export const accountClearSetActive = () => ({
    type: types.accountClearActiveAccount
})

export const accountStartDelete = ( id ) => {
    return async(dispatch) => {

        try {
            // console.log(id)
            const resp = await fetchContoken(`account/delete/${ id }`, {}, 'DELETE');
            const body = await resp.json();
            if(body.ok) {
                dispatch(accountDeleted(id));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const accountDeleted = (id) => ({ 
    type: types.accountDeleted,
    payload:  id
})



export const changeAccountSearchBrand = (brand) => ({
    type: types.changeAccountBrand,
    payload: brand
})