import React from 'react'
import { SearchResponse } from './SearchResponse'
import './search.css'
import { Navbar } from '../ui/Navbar'

export const SearchScreen = () => {
    return (
        <div>
            <Navbar />
            <div className="search-container">
                <div className="search-box">
                    <form>
                        <h1>Ingrese la Placa:</h1>
                        <input 
                            type="text"
                            placeholder="Ingrese la placa..."                
                        />
                    </form>
                </div>

                <SearchResponse />
            </div>
        </div>
    )
}
