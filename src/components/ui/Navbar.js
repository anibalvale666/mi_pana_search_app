import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const {nick} = useSelector(state => state.auth)
    
    const handleLogout = () => {
        dispatch(startLogout());
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <Link className="navbar-brand" to="/">
            MiPana
        </Link>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    {
                        (!!nick)
                        ?
                            (<button 
                                className="btn btn-outline-danger" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>)  
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
