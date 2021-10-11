import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-date-picker";
import { Navbar } from "../ui/Navbar";
import "./filterwishlist.css";
import { changeFilterSearchDate, filterSetActive, filterStartDelete, filterStartResult } from "../../actions/filter";
import { FilterModal } from "./FilterModal";
import { uiOpenFilterModal } from "../../actions/ui";


export const FilterWishListScreen = () => {
  const dispatch = useDispatch();
  const { filterList } = useSelector((state) => state.filter);

  const [searchDate, setSearchDate] = useState(new Date());
  
  const handleOpenModal = () => {
    dispatch( uiOpenFilterModal() );
  }
  
  const handleDateChange = (e) => {
    setSearchDate(e);
    dispatch(changeFilterSearchDate(e));
    dispatch(filterStartResult(e));
  };


  const handleItemUpdate = (filter) => {
    dispatch( uiOpenFilterModal() );
    dispatch( filterSetActive(filter) );
  };

  const handleItemDelete = (id) => {
    dispatch(filterStartDelete(id));
  };

  useEffect(() => {
    dispatch(changeFilterSearchDate(searchDate));
  }, []);


  useEffect(() => {
    dispatch(filterStartResult(searchDate));
  }, [dispatch, searchDate]);

  return (
    <div>
      <Navbar />

      <div className="filter-container">
        <div className="filter-search-box">
          <DatePicker onChange={handleDateChange} value={searchDate} />
          <button className="btn btn-primary ml-2" onClick={handleOpenModal}>
              Nuevo Filtro
          </button>
        </div>


        <div className="filter-response-box">
          <table className="table table-bordered" >
            <thead >
              <tr >
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                <th scope="col">Marca</th>
                <th scope="col">Código</th>
                <th scope="col">Aplicación</th>
              </tr>
            </thead>
            <tbody >
              {filterList.map((filter) => {
                const filterDate = new Date(filter.date);
                return (
                  <tr key={filter.id}>
                    <td>{filterDate.toLocaleDateString("es-ES")}</td>
                    <td> {filter.filterType} </td>
                    <td> {filter.brand} </td>
                    <td> {filter.code} </td>
                    <td>
                      <ul>
                        {filter.application.map((item) => {
                          return (
                          <li key={item._id} >{item.value}</li>)
                        })}
                      </ul>
                    </td>
                    <td>
                      <button 
                        className="btn btn-warning mr-4"
                        onClick={handleItemUpdate.bind(this, filter)}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={handleItemDelete.bind(this, filter.id)}
                      >
                        <i className="far fa-trash-alt fa-lg"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <FilterModal />

      </div>
    </div>
  );
};
