import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Swal from "sweetalert2";
import DatePicker from "react-date-picker";

import { useForm } from "../../hooks/useForm";

import { uiCloseAccountModal } from "../../actions/ui";
import {
  accountClearSetActive,
  accountStartAddNew,
  accountStartUpdate,
} from "../../actions/account";

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

Modal.setAppElement("#root");

// Inicio del COmponente
export const AccountModal = () => {
  const dispatch = useDispatch();
  
  const { OpenAccountModal } = useSelector((state) => state.ui);
  const {companyActive} = useSelector( state => state.company );
  const { accountActive, accountSearchBrand } = useSelector((state) => state.account);

  const initAccount = {
    initial_date: new Date(),
    invoice_number: "",
    brand: accountSearchBrand,
    total_amount: "",
    currency: companyActive.currency,
    record: [],
  };

  const [accountInitialDate, setAccountInitialDate] = useState(
    !!accountActive ? accountActive.initial_date : new Date()
  );

  const [formValues, handleInputChange, setFormValues] = useForm(
    !!accountActive ? accountActive : initAccount
  );

  const { initial_date, invoice_number, brand, total_amount, record } = formValues;
    
  useEffect(() => {
    handleInputChange({
      target: {
        name: "brand",
        value: accountSearchBrand,
      },
    });
    handleInputChange({
      target: {
        name: "currency",
        value: companyActive.currency,
      },
    });
  }, [accountSearchBrand]);

  useEffect(() => {
    if ( accountActive ) {
      setFormValues( accountActive );
    } else {
      setFormValues( initAccount );
    }
  }, [accountActive]);

  const handleInputInitialDate = (e) => {
    setAccountInitialDate(e);
    handleInputChange({
      target: {
        name: "initial_date",
        value: e,
      },
    });
  };

  // handle input change
  const handleListInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...record];
    list[index][name] = value;
    handleInputChange({
      target: {
        name: "record",
        value: list,
      },
    });
  };

  const handleListInputChangeDate = (e, index) => {
    const name = "date";
    const list = [...record];
    list[index][name] = e;
    handleInputChange({
      target: {
        name: "record",
        value: list,
      },
    });
  };

  const closeModal = () => {
    // TODO: cerrar el modal
    dispatch(uiCloseAccountModal());

    setFormValues({
      initial_date: new Date(),
      invoice_number: "",
      brand: accountSearchBrand,
      total_amount: "",
      record: [{ date: new Date(), amount: "" }],
    });

    if (!!accountActive) {
      dispatch(accountClearSetActive());
    }
  };

  // handle click event of the Remove button
  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const list = [...record];

    list.splice(index, 1);

    handleInputChange({
      target: {
        name: "record",
        value: list,
      },
    });
    
  };

  // handle click event of the Add button

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!initial_date || !invoice_number || !brand || !total_amount) {
      return Swal.fire("Error", "Debe llenar todos los campos", "error");
    }

    if (accountActive) {
      dispatch(accountStartUpdate(formValues));
      dispatch(accountClearSetActive());
    } else {
      dispatch(accountStartAddNew(formValues));
    
    }

    closeModal();
  };

  return (
    <Modal
      isOpen={OpenAccountModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      // className="modal"
      // overlayClassName="modal-fondo"
    >
      <h1> {accountActive ? "Editar Cuenta" : "Nuevo Registro"} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <DatePicker
            onChange={handleInputInitialDate}
            value={accountInitialDate}
            className="form-control"
            //  defaultValue={initial_date}
            // disabled={!disablePlaca}
            // selected={ initial_date || null}
          />
        </div>

        <div className="form-group">
          <label>Número de Factura</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese Numero de factura..."
            name="invoice_number"
            autoComplete="off"
            value={invoice_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Monto</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ingrese Monto total..."
            name="total_amount"
            autoComplete="off"
            value={total_amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Pagos</label>
          {record.map((x, i) => {
            return (
              <div className="row g-3 mb-1" key={i}>
                <div className="col-auto">
                  <DatePicker
                    onChange={(e) => handleListInputChangeDate(e, i)}
                    value={x.date}
                    className="form-control"
                    disabled={true}
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    autoComplete="off"
                    name="amount"
                    placeholder="Agregar Monto..."
                    className="form-control"
                    value={x.amount}
                    onChange={(e) => handleListInputChange(e, i)}
                  />
                </div>

                <div className="col-auto px-0">
                  {record.length !== 1 && (
                    <button
                      className="btn btn-danger form-control"
                      onClick={(e) => handleRemoveClick(e, i)}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  )}
                </div>
                
              </div>
            );
          })}
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span>Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
