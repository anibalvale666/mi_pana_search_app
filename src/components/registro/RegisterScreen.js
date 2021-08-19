import React from 'react'
import './register.css'
export const RegisterScreen = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <h3>Registro</h3>
                <form>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="marca modelo"
                        />
                    </div>

                    {/* -----Info aceite de motor----- */}
    
                    <div className="row">
                        <div className="col" >
                            <label>Aceite de motor</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Aceite motor"
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fecha motor"
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Km motor"
                                    />
                            </div>
                        </div>
                    </div>

  
                    {/* -----Info aceite de caja----- */}


                    <div className="row">
                        <div className="col" >
                            <label>Aceite de caja</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Aceite caja"
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fecha caja"
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Km caja"
                                    />
                            </div>
                        </div>
                    </div>
                    {/* -----Info Liquido de radiador ----- */}

                    <div className="row">
                        <div className="col" >
                            <label>Liquido de radiador</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Liquido de radiador"
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fecha radiador"
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Km radiador"
                                    />
                            </div>
                        </div>
                    </div>


                    <input 
                            type="text"
                            className="form-control"
                            placeholder="Observaciones"
                        />

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
    )
}
