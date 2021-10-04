import React from 'react'
import { Navbar } from '../ui/Navbar'

import Select from 'react-select';

const options = [
  { value: 'castrol', label: 'castrol' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
 

export const debtsScreen = () => {
    const handle = (e) => {
        console.log(e.value)
    }

    return (
        <div>
            <Navbar />
            <div className="filter-response-box">
                    <Select options={options} 
                    onChange={handle}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nro Factura</th>
                            <th scope="col"> 
                                <tr> 
                                    <th scope = "col">fecha</th>
                                    <th scope = "col">monto</th>
                                    <th scope = "col">saldo</th>
                                </tr>
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> AFL123</td>
                            <tr>
                                <ul>
                                    <li>                                
                                            <td> 14/5/21 </td>
                                            <td> 500 </td>
                                            <td> 500 </td>
                                    </li>
                                    <li>                                
                                            <td> 14/5/21 </td>
                                            <td> 500 </td>
                                            <td> 500 </td>
                                    </li>

                                </ul>
                            </tr>
                        </tr>

                        <tr>
                            <td> AFL123</td>
                            <tr>
                                <ul>
                                    <li>                                
                                            <td> 14/5/21 </td>
                                            <td> 500 </td>
                                            <td> 500 </td>
                                    </li>
                                    <li>                                
                                            <td> 14/5/21 </td>
                                            <td> 500 </td>
                                            <td> 500 </td>
                                    </li>

                                </ul>
                            </tr>
                        </tr>
                        
                    </tbody>
                </table>

            </div>

            </div>

    )

        
}
