import { combineReducers } from 'redux';
import { dataAceiteReducer } from './dataAceiteReducer';
import { uiReducer } from './uiReducer';



export const rootReducer = combineReducers({
    // ui: uiReducer,
    data: dataAceiteReducer
})



