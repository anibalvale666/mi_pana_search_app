import { fetchContoken } from "../helpers/fetch";
import { types } from "../types/types";



export const searchItemByBrand = (brand) => {
    return  async(dispatch) => {
        try {
            const resp = await fetchContoken( 'item',{brand},'POST' );
            const body = await resp.json();
            
            if(body.ok) {
                dispatch( itemResultLoaded( body.items ) );
            } else {
                dispatch( itemEmptyResult() );

            }
        } catch ( error ) {
            console.log(error)
        }
    }
};


export const changeItemSearchBrand = (brand) => ({
    type: types.changeItemBrand,
    payload: brand
})

const itemResultLoaded = ( items ) =>({
    type: types.itemGetListByBrand,
    payload: items
});


const itemEmptyResult = () => ({
    type: types.itemEmptyList
})


