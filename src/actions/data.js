import { types } from "../types/types";



export const dataAddNew = ( data ) => ({
    type: types.dataAddNew,
    payload: data
});


export const dataSetActive = ( data ) => ({
    type: types.dataResult,
    payload: data
})



