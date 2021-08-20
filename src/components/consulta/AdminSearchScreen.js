import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Navbar } from '../ui/Navbar'
import { SearchResponse } from './SearchResponse'

export const AdminSearchScreen = () => {

    const [ formValues, handleInputchange ] = useForm( {
        placa: ''
    } );

    const {placa} = formValues;

    const handleSubmitForm = (e) => { 
        e.preventDefault();
        console.log(placa)
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
                    className="btn btn-outline-primary"
                >
                    <i className="fas fa-search"></i>
                    <span> Buscar</span>
                </button>
                    </form>
                </div>

                <SearchResponse />
            </div>
        </div>
    
    )
}
