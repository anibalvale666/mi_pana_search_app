import React from 'react'

export const SearchResponse = () => {
    return (
        <div>
            <div className="search-response-box box">
                <h3>Toyota Corolla</h3>
                <h4>Aceite:</h4>
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
                            <td>Motul</td>

                            <td>28/9/21</td>
                            <td>79000</td>
                        </tr>
                        <tr>

                            <td>Mannol</td>

                            <td>5/10/21</td>
                            <td>75000</td>
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
                            <td>Lf-9</td>
                            <td>Afl23</td>
                            <td>OL23</td>
                            <td>ffglw</td>
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
                            <td>vistony verde</td>
                            <td>8/9/21</td>
                            <td>75000</td>
    
                        </tr>
                    </tbody>
                </table>

            <h4>Observaciones:</h4>
                <p>Hola</p>

            </div>
        </div>
    )
}
