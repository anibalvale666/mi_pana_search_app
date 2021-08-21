import React,{ useState } from 'react'
import { useForm } from '../../hooks/useForm'
import DatePicker from 'react-date-picker';
import './register.css';
import { Navbar } from '../ui/Navbar';
import { useDispatch } from 'react-redux';
import { dataAddNew } from '../../actions/data';


export const RegisterScreen = () => {

    const dispatch = useDispatch();


    const [fechaAceiteMotor, setFechaAceiteMotor] = useState(new Date());
    const [fechaAceiteCaja, setFechaAceiteCaja] = useState(new Date());
    const [fechaRefrigerante, setFechaRefrigerante] = useState(new Date());

    const [placaValid, setPlacaValid] = useState(true);
    const [marcaValid, setMarcaValid] = useState(true);

    
    const [ formValues, handleInputChange ] = useForm( {
        placa: '',
        marca: '',
        aceite_motor: {
            aceite: '',
            fecha: new Date(),
            km: ''
        },
        aceite_caja: {
            aceite: '',
            fecha: new Date(),
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
            fecha: new Date(),
            km: ''
        },
        obs: ''
    } ); 

    const {placa, marca, obs, aceite_motor, aceite_caja, filtros, liquido_radiador } = formValues;


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);

        if(placa.trim().length !== 6)
        {
            return setPlacaValid(false);
        }
        setPlacaValid(true);
        
        if(marca.trim().length === 0)
        {
            return setMarcaValid(false);
        }
        setMarcaValid(true);

        dispatch(dataAddNew({
            ...formValues,
            id: new Date().getTime()
        }))



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


    return (
        <div>
            <Navbar />
        <div className="register-container">
            <div className="register-box">
                <h3>Registro</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                                type="text"
                                className={`form-control ${!placaValid && 'is-invalid'}`}
                                placeholder="Ingrese la placa..."
                                name="placa"
                                autoComplete="off" 
                                maxLength="6"
                                value={placa}
                                onChange={handleInputChange}        
                            />
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
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                     <DatePicker
                                        onChange={handleInputDateAceiteMotor}
                                        value={fechaAceiteMotor}
                                        className="form-control"
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
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                        <DatePicker
                                            onChange={handleInputDateAceiteCaja}
                                            value={fechaAceiteCaja}
                                            className="form-control"
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
                                    
                                    />
                            </div>
                        </div>
                        <div className="col" >
                            <div className="form-group">
                                        <DatePicker
                                            onChange={handleInputDateRefrigerante}
                                            value={fechaRefrigerante}
                                            className="form-control"
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
                        />

                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Registrar" 
                        />
                    </div>
                </form>

            </div>
        </div>
    </div>
    )
}
