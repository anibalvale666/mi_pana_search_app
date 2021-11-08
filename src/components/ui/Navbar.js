import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';
import { badResult } from '../../actions/data';

export const Navbar = () => {
    const dispatch = useDispatch();
    const {nick} = useSelector(state => state.auth)
    
    const handleLogout = () => {
        dispatch(startLogout());
        dispatch(badResult());
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <Link className="navbar-brand" to="/">
            MiPana
        </Link>

        <div className="navbar-collapse">
            {
                (!!nick) &&
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/filterwishlist"
                    >
                        Lista deseo filtros
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/account"
                    >
                        Cuentas y Saldos
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/prices"
                    >
                        Precios
                    </NavLink>
                </div>
            }
        </div>
        {/* collapse w-100 order-3 dual-collapse2 */}
        <div className="navbar-collapse ">
                <ul className="navbar-nav ml-auto">
                    {
                        (!!nick)
                        ?
                            (       
                                <button 
                                    className="btn btn-outline-danger" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            )  
                        : 
 
                            (<NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/login"
                            >
                                Login
                            </NavLink>)
                    }
                </ul>
            </div>
        </nav>
    )
}
