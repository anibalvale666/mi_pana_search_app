import React from 'react'
import { useForm } from '../../hooks/useForm'
import './register.css'
export const RegisterScreen = () => {
    
    const [ formValues, handleInputchange ] = useForm( {
        placa: '',
        marca: '',
        aceite_motor: {
            aceite: '',
            fecha: '',
            km: ''
        },
        aceite_caja: {
            aceite: '',
            fecha: '',
            km: ''
        },
        filtros:{
            aceite: '',
            aire: '',
            combustible: '',
            cabina: ''
        },
        liquido_radiador: {
            liquido: '',
            fecha: '',
            km: ''
        },
        obs: ''
    } ); 

    const {placa, marca, obs, aceite_motor, aceite_caja, filtros, liquido_radiador } = formValues;


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    } 


    
    return (
        <div className="register-container">
            <div className="register-box">
                <h3>Registro</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                placeholder="Ingrese la placa..."
                                name="placa"
                                autoComplete="off" 
                                maxLength="6"
                                value={placa}
                                onChange={handleInputchange}        
                            />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="marca modelo"
                            name="marca"
                            autoComplete="off" 
                            value={marca}
                            onChange={handleInputchange}  
                        />
                    </div>

                    {/* -----Info aceite de motor----- */}
    
                    <div className="row">
                        <div className="col" >
                            <label>Aceite de motor:</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Aceite motor"
                                    name="aceite_motor.aceite"
                                    autoComplete="off" 
                                    value={aceite_motor.aceite}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fecha motor"
                                    name="aceite_motor.fecha"
                                    autoComplete="off" 
                                    value={aceite_motor.fecha}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Kilometraje motor"
                                    name="aceite_motor.km"
                                    autoComplete="off" 
                                    value={aceite_motor.km}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                    </div>

  
                    {/* -----Info aceite de caja----- */}


                    <div className="row">
                        <div className="col" >
                            <label>Aceite de caja:</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Aceite caja"
                                    name="aceite_caja.aceite"
                                    autoComplete="off" 
                                    value={aceite_caja.aceite}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fecha caja"
                                    name="aceite_caja.fecha"
                                    autoComplete="off" 
                                    value={aceite_caja.fecha}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Kilometraje caja"
                                    name="aceite_caja.km"
                                    autoComplete="off" 
                                    value={aceite_caja.km}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                    </div>
                    {/* -----Info filtros ----- */}

                    <div className="row">
                        <div className="col" >
                            <label>Filtros:</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Filtro Aceite"
                                    name="filtros.aceite"
                                    autoComplete="off" 
                                    value={filtros.aceite}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Filtro Aire"
                                    name="filtros.aire"
                                    autoComplete="off" 
                                    value={filtros.aire}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Filtro Combustible"
                                    name="filtros.combustible"
                                    autoComplete="off" 
                                    value={filtros.combustible}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Filtro cabina"
                                    name="filtros.cabina"
                                    autoComplete="off" 
                                    value={filtros.cabina}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                    </div>

                    {/* -----Info Liquido de radiador ----- */}

                    <div className="row">
                        <div className="col" >
                            <label>Liquido de radiador:</label>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Liquido de radiador"
                                    name="liquido_radiador.liquido"
                                    autoComplete="off" 
                                    value={liquido_radiador.liquido}
                                    onChange={handleInputchange}  
                                    
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fecha radiador"
                                    name="liquido_radiador.fecha"
                                    autoComplete="off" 
                                    value={liquido_radiador.fecha}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Kilometraje radiador"
                                    name="liquido_radiador.km"
                                    autoComplete="off" 
                                    value={liquido_radiador.km}
                                    onChange={handleInputchange}  
                                    />
                            </div>
                        </div>
                    </div>


                    <input 
                            type="text"
                            className="form-control"
                            placeholder="Observaciones"
                            name="obs"
                            autoComplete="off" 
                            value={obs}
                            onChange={handleInputchange}  
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
