import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dataAceiteReducer } from './dataAceiteReducer';
import { filterReducer } from './filterReducer';
import { uiReducer } from './uiReducer';




export const rootReducer = combineReducers({
    data: dataAceiteReducer,
    auth: authReducer,
    filter: filterReducer,
    ui: uiReducer
})



