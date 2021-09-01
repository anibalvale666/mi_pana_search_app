import React,{ useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import DatePicker from 'react-date-picker';
import './register.css';
import { Navbar } from '../ui/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { badResult, dataStartAddNew, dataStartResult, dataStartUpdate } from '../../actions/data';
import Swal from 'sweetalert2';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {searchData} = useSelector(state => state.data);
    const [ formValues, handleInputChange, setFormValues ] = useForm(searchData);
    const {id, placa, marca, obs, aceite_motor, aceite_caja, filtros, liquido_radiador } = formValues;

    const [fechaAceiteMotor, setFechaAceiteMotor] = useState('');
    const [fechaAceiteCaja, setFechaAceiteCaja] = useState('');
    const [fechaRefrigerante, setFechaRefrigerante] = useState('');
    
    const [disablePlaca, setDisablePlaca] = useState(false);

    const [placaValid, setPlacaValid] = useState(true);
    const [marcaValid, setMarcaValid] = useState(true);


    
    useEffect(() => {
        setFormValues( searchData );
    }, [searchData])
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(placa.trim().length !== 6)
        {
            setPlacaValid(false);
            return Swal.fire('Error', 'La placa debe contener 6 digitos', 'error');
        }
        setPlacaValid(true);
        
        if(marca.trim().length === 0)
        {
            setMarcaValid(false);
            return Swal.fire('Error', 'el campo marca no debe estar vacio', 'error');
        }
        setMarcaValid(true);
        if(id === '') {
            dispatch(dataStartAddNew( formValues ));
        } else {
            dispatch(dataStartUpdate( formValues ));
        }

        
    } 

    const handleInputDateAceiteMotor = (e) => {
        setFechaAceiteMotor(e);
        handleInputChange({
            target:{
                name: "aceite_motor.fecha",
                value: e
            }
        })
    }
    
    const handleInputDateAceiteCaja = (e) => {
        setFechaAceiteCaja(e);
        handleInputChange({
            target:{
                name: "aceite_caja.fecha",
                value: e
            }
        })
    }

    const handleInputDateRefrigerante = (e) => {
        setFechaRefrigerante(e);
        handleInputChange({
            target:{
                name: "liquido_radiador.fecha",
                value: e
            }
        })
    }


    const  handleSearch = (e) => {
        e.preventDefault();
        setDisablePlaca(true);
        dispatch(dataStartResult(placa));
    }

    const  handleReset = (e) => {
        e.preventDefault();
        setDisablePlaca(false);
        dispatch(badResult());
    }

    return (
        <div>
            <Navbar />
        <div className="register-container">
            <div className="register-box">
                <h3>Registro & Actualización</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                                type="text"
                                className={` text ${!placaValid && 'is-invalid'}`}
                                placeholder="Ingrese la placa..."
                                name="placa"
                                autoComplete="off" 
                                maxLength="6"
                                value={placa}
                                onChange={handleInputChange}        
                                disabled={disablePlaca &&'disabled'}
                            /> 
                            <button className="btn btn-primary ml-2" onClick={handleSearch}>Buscar</button>
                            <button className="btn btn-primary ml-2" onClick={handleReset}>Reset</button>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className={`form-control ${!marcaValid && 'is-invalid'}`}
                            placeholder="marca modelo"
                            name="marca"
                            autoComplete="off" 
                            value={marca}
                            onChange={handleInputChange}  
                            disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                     <DatePicker
                                        onChange={handleInputDateAceiteMotor}
                                        value={fechaAceiteMotor}
                                        className="form-control"
                                        disabled={!disablePlaca}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange} 
                                    disabled={!disablePlaca &&'disabled'} 
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                        <DatePicker
                                            onChange={handleInputDateAceiteCaja}
                                            value={fechaAceiteCaja}
                                            className="form-control"
                                            disabled={!disablePlaca}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
                                    
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                        <DatePicker
                                            onChange={handleInputDateRefrigerante}
                                            value={fechaRefrigerante}
                                            className="form-control"
                                            disabled={!disablePlaca}
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
                                    onChange={handleInputChange}  
                                    disabled={!disablePlaca &&'disabled'}
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
                            onChange={handleInputChange}  
                            disabled={!disablePlaca &&'disabled'}
                        />

                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Guardar" 
                            disabled={!disablePlaca &&'disabled'}
                        />
                    </div>
                </form>

            </div>
        </div>
    </div>
    )
}
