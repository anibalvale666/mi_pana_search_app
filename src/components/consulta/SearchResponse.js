import React from 'react'
import { useSelector } from 'react-redux';

export const SearchResponse = () => {
    
    const {searchData:{marca, aceite_motor, aceite_caja, filtros, liquido_radiador, obs}} = useSelector(state => state.data);
    
    // const {marca, aceite_motor, aceite_caja, filtros, liquido_radiador, obs} = searchData;    

    const aceite_motor_fecha = new Date(aceite_motor.fecha);
    const aceite_caja_fecha = new Date(aceite_caja.fecha);
    const liquido_radiador_fecha = new Date(liquido_radiador.fecha);

    
    return (
        <div>
            <div className="search-response-box box">
                <h3> {marca} </h3>
                <h4> Aceite:</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Aceite</th>

                            <th scope="col">Fecha de cambio</th>
                            <th scope="col">Kilometraje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{aceite_motor.aceite}</td>

                            <td>
                                {
                                    (!!aceite_motor.fecha)
                                    ?aceite_motor_fecha.toLocaleDateString("es-ES")
                                    : ''
                                }
                            
                            </td>
                            <td>{aceite_motor.km}</td>
                        </tr>
                        <tr>

                            <td>{aceite_caja.aceite}</td>

                            <td>
                                {
                                    (!!aceite_caja.fecha)
                                    ? aceite_caja_fecha.toLocaleDateString("es-ES")
                                    : ''
                                }
                            </td>
                            <td>{aceite_caja.km}</td>
                        </tr>

                    </tbody>
                </table>


                {/* Solo en modo admin */}
                <h4>Filtros:</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Aceite</th>
                            <th scope="col">Aire</th>
                            <th scope="col">Combustible</th>
                            <th scope="col">Cabina</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{filtros.aceite}</td>
                            <td>{filtros.aire}</td>
                            <td>{filtros.combustible}</td>
                            <td>{filtros.cabina}</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Refrigerante:</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Refrigerante</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Kilometraje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{liquido_radiador.liquido}</td>
                            <td>
                                {
                                    (!!liquido_radiador.fecha)
                                    ? liquido_radiador_fecha.toLocaleDateString("es-ES")
                                    : ''
                                
                                }
                            </td>
                            <td>{liquido_radiador.km}</td>
    
                        </tr>
                    </tbody>
                </table>

            <h4>Observaciones:</h4>
                <p>{obs}</p>

            </div>
        </div>
    )
}
