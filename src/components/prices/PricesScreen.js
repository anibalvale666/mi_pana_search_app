import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Select from "react-select";
import { changeItemSearchBrand, searchItemByBrand } from '../../actions/item';
import { Navbar } from '../ui/Navbar';
import './prices.css';

const oil_options = [
    { value: 'MOBIL', label: 'MOBIL' },
    { value: 'CASTROL', label: 'CASTROL' },
    { value: 'SHELL', label: 'SHELL' },
    { value: 'MOTUL', label: 'MOTUL' },
    { value: 'LIQUIMOLY', label: 'LIQUIMOLY' },
    { value: 'REPSOL', label: 'REPSOL' },
    { value: 'PHILLIPS 66', label: 'PHILLIPS 66' },
    { value: 'VALVOLINE', label: 'VALVOLINE' },
    { value: 'CHEVRON', label: 'CHEVRON' },
    { value: 'VISTONY', label: 'VISTONY' },
];



export const PricesScreen = () => {

    const dispatch = useDispatch();
    const {itemSearchBrand, itemList} = useSelector( state => state.item );

    useEffect(() => {
        dispatch(searchItemByBrand(itemSearchBrand));
      }, [itemSearchBrand]);


    const handleInputBrand = (e) => {
        // dispatch(searchItemByBrand(e.value));
        dispatch(changeItemSearchBrand(e.value));
    }

    return (
        <>
            <Navbar />
            <div className="prices-container">
                <div className="prices-box">
                    <Select
                    options={oil_options}
                      value={{ value: itemSearchBrand, label: itemSearchBrand }}
                      onChange={handleInputBrand}
                    />
                </div>

                <div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">GRADO</th>
                            <th scope="col">MODELO</th>
                            <th scope="col">VENTA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemList.map(({grade,model,sale}) => (
                                    <tr>
                                        <td>{grade}</td>
                                        <td>{model}</td>
                                        <td>{sale}</td>
                                    </tr>    
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
