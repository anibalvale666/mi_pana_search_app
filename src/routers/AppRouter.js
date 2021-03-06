import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AccountScreen } from '../components/account/AccountScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

import { SearchScreen } from '../components/consulta/SearchScreen';
import { FilterWishListScreen } from '../components/filterwishlist/FilterWishListScreen';
import { PricesScreen } from '../components/prices/PricesScreen';
import { RegisterScreen } from '../components/registro/RegisterScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
  

export const AppRouter = () => {

    const {nick} = useSelector(state => state.auth);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking());
    }, [dispatch]);
    
    // if(checking) {
    //     return (<h5>Espere ....</h5>)
    // }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact 
                        path="/" 
                        component={SearchScreen} 
                        isAuthenticated={!!nick}
                    />
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={LoginScreen} 
                        isAuthenticated={!!nick}
                    />
                    <PrivateRoute
                        exact 
                        path="/register" 
                        component={RegisterScreen} 
                        isAuthenticated={!!nick}
                    />
                    <PrivateRoute
                        exact 
                        path="/filterwishlist" 
                        component={FilterWishListScreen} 
                        isAuthenticated={!!nick}
                    />
                    <PrivateRoute
                        exact 
                        path="/account" 
                        component={AccountScreen} 
                        isAuthenticated={!!nick}
                    />
                    <PrivateRoute
                        exact 
                        path="/prices" 
                        component={PricesScreen} 
                        isAuthenticated={!!nick}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
      </Router>
    )
}
