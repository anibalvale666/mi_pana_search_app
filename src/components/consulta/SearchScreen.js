import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchResponse } from './SearchResponse'
import './search.css'
import { Navbar } from '../ui/Navbar'
import { useForm } from '../../hooks/useForm'
import { dataStartResult } from '../../actions/data'
import Swal from 'sweetalert2'

export const SearchScreen = () => {

    const trueSearch = useSelector(state => state.data.searchData.placa);

    const dispatch = useDispatch()
    const [ formValues, handleInputchange ] = useForm( {
        placa: ''
    } );

    const {placa} = formValues;

    const handleSubmitForm = (e) => { 
        e.preventDefault();
        if( placa === '' ) {
            return Swal.fire('Error', 'Ingrese la Placa', 'error');
        }

        dispatch(dataStartResult(placa));
    }


    return (
        <div>
            <Navbar />
            <div className="search-container">
                <div className="search-box">
                    <form onSubmit={handleSubmitForm}>
                        <h1>Ingrese la Placa:</h1>
                        <input 
                            type="text"
                            placeholder="Ingrese la placa..."
                            name="placa"
                            autoComplete="off" 
                            value={placa}
                            maxLength="6"
                            onChange={handleInputchange}        
                        />

                <button
                    type="submit"
                    className="btn btn-outline-primary ml-2"
                >
                    <i className="fas fa-search"></i>
                    <span> Buscar</span>
                </button>
                    </form>
                </div>

                {
                    (!!trueSearch) && (<SearchResponse />)
                }
            </div>
        </div>
    )
}
