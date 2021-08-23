import { fetchContoken, fetchSintoken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'


export const startLogin = ( nick, password ) => {
    return async( dispatch ) => {
      
        const resp = await fetchSintoken('auth',{nick, password},'POST');
        const body = await resp.json();
        if( body.ok ) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime() );

            dispatch(login({
                nick: body.nick
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}


export const startChecking = () => {
    return async(dispatch) => {
        
        const resp = await fetchContoken('auth/renew',{},'POST');
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime() );

            dispatch(login({
                nick: body.nick
            }))
        } else {
            dispatch(checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });


const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();

        dispatch(logout());
    }
}


const logout = () => ({type: types.authLogout });


