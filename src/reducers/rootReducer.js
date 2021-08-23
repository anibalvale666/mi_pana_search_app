import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dataAceiteReducer } from './dataAceiteReducer';




export const rootReducer = combineReducers({
    data: dataAceiteReducer,
    auth: authReducer
})



