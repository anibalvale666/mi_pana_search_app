import { combineReducers } from 'redux';
import { accountReducer } from './accountReducer';
import { authReducer } from './authReducer';
import { companyReducer } from './companyReducer';
import { dataAceiteReducer } from './dataAceiteReducer';
import { filterReducer } from './filterReducer';
import { uiReducer } from './uiReducer';




export const rootReducer = combineReducers({
    data: dataAceiteReducer,
    auth: authReducer,
    filter: filterReducer,
    ui: uiReducer,
    account: accountReducer,
    company: companyReducer,
})



