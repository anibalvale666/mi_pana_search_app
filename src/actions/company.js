import { fetchContoken } from "../helpers/fetch";
import { types } from "../types/types";


export const companyStartLoading = ( ) => {

    return  async(dispatch) => {
        try {
            const resp = await fetchContoken( 'company',{},'POST' );
            const body = await resp.json();
            if(body.ok) {
                dispatch( companyResultLoaded( body.companies ) );
            } else {
                dispatch( companyNotResultLoaded() );
            }
        } catch ( error ) {
            console.log(error)
        }
    }
};


const companyResultLoaded = (companies) => ({
    type: types.companyLoaded,
    payload: companies
} );

const companyNotResultLoaded = () => ({
    type: types.companyNotResult
});


export const companySetActive = (company) => ({
    type: types.companySetActive,
    payload: company
});

export const companyClearActive = () => ({
    type: types.companyClearActiveCompany
});
