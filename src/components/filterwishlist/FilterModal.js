import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";


import Select from "react-select";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { filterClearSetActive, filterStartAddNew, filterStartUpdate, uiCloseFilterModal } from "../../actions/filter";


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

const options = [
  { value: "aceite", label: "aceite" },
  { value: "aire", label: "aire" },
  { value: "combustible", label: "combustible" },
  { value: "cabina", label: "cabina" },
];


// Inicio del COmponente
export const FilterModal = () => {
  const dispatch = useDispatch();
  
    const { OpenFilterModal } = useSelector( state => state.ui );
    const {filterActive,filterSearchDate} = useSelector(state => state.filter);

  const initFilter = {
    date: filterSearchDate,
    filterType: "",
    brand: "",
    code: "",
    application: [{value: ""}]
  }

  
  const [ formValues, handleInputChange, setFormValues ] = useForm( !!filterActive ? filterActive : initFilter );
  const {date,filterType, brand, code, application } = formValues;
  
  useEffect(() => {
    handleInputChange({
      target:{
          name: "date",
          value: filterSearchDate
      }
    });
  }, [filterSearchDate]);
  
  useEffect(() => {
    setFormValues( filterActive );
    // eslint-disable-next-line
}, [filterActive])

  
  const handleInputSelect = ( e ) => {
    handleInputChange({
        target:{
            name: "filterType",
            value: e.value
        }
    })
  }

  // handle input change
  const handleListInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...application];
    list[index][name] = value;
    handleInputChange({
        target:{
            name: "application",
            value: list
        }
    })
  };

  const closeModal = () => {
    // TODO: cerrar el modal
    dispatch( uiCloseFilterModal() );
    // dispatch( eventClearActiveEvent() );
    setFormValues( initFilter );

    if ( !!filterActive ) {
      dispatch(filterClearSetActive());
    }
  }

  // handle click event of the Remove button
  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const list = [...application];

    list.splice(index, 1);

    handleInputChange({
        target:{
            name: "application",
            value: list
        }
    })

  };

  // handle click event of the Add button
  const handleAddClick = () => {
    handleInputChange({
        target:{
            name: "application",
            value: [...application, {value: ""}]
        }
    })

  };




  const handleSubmitForm = (e) =>{
    e.preventDefault();

    if(!date || !filterType || !brand || !code ) {
      return Swal.fire('Error', 'Debe llenar todos los campos', 'error');
    }

    if ( filterActive ) {
      dispatch( filterStartUpdate( formValues ) );
      dispatch(filterClearSetActive());
    } else {
      dispatch( filterStartAddNew(formValues) );
    }
  
    closeModal();
    // console.log(formValues);    
} 

  return (
    <Modal
      isOpen={OpenFilterModal}
      onRequestClose={ closeModal }
      style={customStyles}
      closeTimeoutMS={200}
      // className="modal"
      // overlayClassName="modal-fondo"
    >
      <h1> {filterActive ? "Editar filtro" : "Nuevo filtro"} </h1>
      <hr />
      <form
        className="container"
        onSubmit={ handleSubmitForm }
      >

        <div className="form-group">
          <label>Tipo de filtro</label>
          <Select
            options={options}
            value={filterType.value}
            onChange={handleInputSelect}
          />
        </div>

        <div className="form-group">
          <label>Marca</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese la marca..."
            name="brand"
            autoComplete="off"
            value={brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Código</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese la marca..."
            name="code"
            autoComplete="off"
            value={code}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Aplicaciones</label>
          {
            application.map((x, i) => {
              return(
                <div className="row g-3 mb-1">
                    <div className="col-auto">
                        <input
                            autoComplete="off"
                            name="value"
                            placeholder="Agregar Aplicación..."
                            className="form-control"
                            value={x.value}
                            onChange={e => handleListInputChange(e, i)}
                        />
                    </div>
                    <div className="col-auto px-0">
                    {
                        application.length !== 1 && 
                        (   
                            <button 
                                className="btn btn-danger form-control"

                                onClick={(e) =>handleRemoveClick(e,i)}>
                                    <i className="fas fa-minus"></i>
                            </button>
                        )
                    }
                    </div>
                    <div className="col-auto px-1">
                        {
                            application.length - 1 === i && 
                            (
                                <button 
                                type="button"
                                className= "btn btn-primary form-control" 
                                onClick={handleAddClick}>
                                        <i className="fas fa-plus"> </i>
                                </button>

                            )
                        }
                    </div>
                </div>
              );
            })
        }
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span>Guardar</span>
        </button>
      </form>
    </Modal>

  );

};
