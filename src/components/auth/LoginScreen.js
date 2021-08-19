import React from 'react'
import { useForm } from '../../hooks/useForm'
import './login.css'
export const LoginScreen = () => {

    const [ formValues, handleInputchange ] = useForm( {
        nick: '',
        password: ''
    } );

    const { nick, password } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="nick"
                                name="nick"
                                autoComplete="off"
                                value={nick}
                                onChange={handleInputchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                autoComplete="off"
                                value={password}
                                onChange={handleInputchange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                                
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
