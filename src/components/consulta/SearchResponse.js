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
                            <th scope="col">Grado</th>
                            <th scope="col">Fecha de cambio</th>
                            <th scope="col">Kilometraje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Motul</td>
                            <td>5w-30</td>
                            <td>28/9/21</td>
                            <td>79000</td>
                        </tr>
                        <tr>

                            <td>Mannol</td>
                            <td>75w-90</td>
                            <td>5/10/21</td>
                            <td>75000</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
