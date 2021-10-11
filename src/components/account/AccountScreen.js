import React,{useEffect, useState} from 'react';
import { Navbar } from '../ui/Navbar'
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import "./account.css";


import {  accountStartResult, changeAccountSearchBrand } from '../../actions/account';
import { uiOpenAccountModal } from '../../actions/ui';
import { AccountModal } from './AccountModal';
import { AccountRecordModal } from './AccountRecordModal';
import { AccountItemList } from './AccountItemList';
import { companySetActive, companyStartLoading } from '../../actions/company';


 

export const AccountScreen = () => {

    const dispatch = useDispatch();
    const { accountSearchBrand, accountList } = useSelector( state => state.account );
    const {companies,companyActive} = useSelector( state => state.company );
    const [paid, setPaid ] = useState(false);
    const [showList, setShowList ] = useState( accountList.filter( l => l.paid === paid ));
    useEffect(() => {
        dispatch(accountStartResult(accountSearchBrand));      
    }, [ accountSearchBrand]);
    
    useEffect(() => {
        setShowList(accountList.filter( l => l.paid === paid ));
    }, [  accountList]);
    
    useEffect(() => {
        dispatch(companyStartLoading());    
    }, [])

  
    const options = companies.map( company => ({
            value: company.brand, label: company.brand,
    }));



    const handleInputBrand = (e) => {
        dispatch(accountStartResult(e.value));
        dispatch(changeAccountSearchBrand(e.value));
        dispatch(companySetActive(companies.find(c => c.brand === e.value)))
    }

    const handleOpenModal = () => {
        dispatch(uiOpenAccountModal());
    }

    const handleInputPaid = (e) => {
        setPaid(e.target.checked);
       setShowList(e.target.checked ? accountList : accountList.filter( l => l.paid === false ));
    }

    return (
        <div>
            <Navbar />
            <h4>MONEDA: {companyActive.currency}</h4>
            <div className="account-container">

                <div className="account-search-box">
                    <
                        Select 
                        options={options} 
                        value={{ value: accountSearchBrand, label: accountSearchBrand }}
                        onChange={handleInputBrand}
                    />

                    <button className="btn btn-primary btn-block mt-4" onClick={handleOpenModal}>
                        Nuevo Registro
                    </button>
                    <label>
                        Mostrar todas las deudas 
                    <input
                        name="paid"
                        type="checkbox"
                        checked={paid}
                        onChange={handleInputPaid} 
                        />
                    </label>
                </div>

                <div className="account-response-box">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Nro Factura</th>
                                <th scope="col">Fecha Registro</th>
                                <th scope="col">Monto total</th>
                                <th scope="col"> 
                                    Registro
                                </th>
                                <th>Saldo</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                        { 
                            showList.map( account => (
                                <AccountItemList
                                    key={account.id}
                                    account={account}
                                />
                            ))
                        
                        }
                        </tbody>
                    </table>    
                </div>
                <AccountModal />
                <AccountRecordModal />
            </div>
        </div>
    ) 
}
