import React from 'react';
import DatePicker from 'react-date-picker';
import Modal from "react-modal";

import { useDispatch, useSelector } from 'react-redux';
import { accountClearSetActive, accountStartUpdate } from '../../actions/account';
import { uiCloseAccountRecordModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
const init = {
    date: new Date(),
    amount: ''
}


export const AccountRecordModal = () => {

    const {OpenAccountRecordModal} = useSelector( state => state.ui );
    const {accountActive} = useSelector( state => state.account );

    const [ formValues, handleInputChange, setFormValues ] = useForm( init );

    const {date, amount} = formValues;

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(uiCloseAccountRecordModal());
        dispatch(accountClearSetActive());
    }

    const handleSubmitForm = (e) => {   
        e.preventDefault();

        const debtCalculate = accountActive.total_amount - amount - accountActive.record.map(item => item.amount).reduce((prev, next) => prev + next,0);

        const resp = {
            ...accountActive,
            ...((debtCalculate<=0) && { paid: true }),
            record: [
            ...accountActive.record,
            formValues,
        ]}


        dispatch( accountStartUpdate( resp ) );

        dispatch(uiCloseAccountRecordModal());
        dispatch(accountClearSetActive());
        setFormValues(init);
    }

    const handleInputDate = (e) => {
        handleInputChange({
            target:{
                name: "date",
                value: e
            }
        })
    }

    return (

        <Modal
            isOpen={OpenAccountRecordModal}
            onRequestClose={ closeModal }
            style={customStyles}
            closeTimeoutMS={200}
            // className="modal"
            // overlayClassName="modal-fondo"
        >
             <h1> Nuevo Registro </h1>
            <hr />
            <form
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                <DatePicker
                    onChange={handleInputDate}
                    value={date}
                    className="form-control"
                    // disabled={!disablePlaca}
                />
                </div>

                <div className="form-group">
                <label>Monto</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Ingrese el monto"
                    name="amount"
                    autoComplete="off"
                    value={amount}
                    onChange={handleInputChange}
                />
                </div>
                

                <button type="submit" className="btn btn-outline-primary btn-block">
                <i className="far fa-save"></i>
                <span>Guardar</span>
                </button>
            </form>
    

        </Modal>

    )
}
