import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { SearchScreen } from '../components/consulta/SearchScreen';
import { RegisterScreen } from '../components/registro/RegisterScreen';
  

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={SearchScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
      </Router>
    )
}
