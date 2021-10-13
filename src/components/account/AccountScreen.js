import React, { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import "./account.css";

import {
  accountStartResult,
  changeAccountSearchBrand,
  getNotPaidAccounts,
} from "../../actions/account";
import { uiOpenAccountModal } from "../../actions/ui";
import { AccountModal } from "./AccountModal";
import { AccountRecordModal } from "./AccountRecordModal";
import { AccountItemList } from "./AccountItemList";
import { companySetActive, companyStartLoading } from "../../actions/company";

export const AccountScreen = () => {
  const dispatch = useDispatch();
  const { accountSearchBrand, accountList, accountListNotPaid } = useSelector(
    (state) => state.account
  );
  const { companies, companyActive } = useSelector((state) => state.company);
  const [paid, setPaid] = useState(false);
  const [showList, setShowList] = useState(
    accountList.filter((l) => l.paid === paid)
  );

  useEffect(() => {
    dispatch(accountStartResult(accountSearchBrand));
  }, [accountSearchBrand]);

  useEffect(() => {
    setShowList(accountList.filter((l) => l.paid === paid));
  }, [accountList]);

  useEffect(() => {
    dispatch(companyStartLoading());
  }, []);


  useEffect(() => {
      dispatch(getNotPaidAccounts());
  }, [getNotPaidAccounts]);

  const options = companies.map((company) => ({
    value: company.brand,
    label: company.brand,
  }));

  const handleInputBrand = (e) => {
    dispatch(accountStartResult(e.value));
    dispatch(changeAccountSearchBrand(e.value));
    dispatch(companySetActive(companies.find((c) => c.brand === e.value)));
  };

  const handleOpenModal = () => {
    dispatch(uiOpenAccountModal());
  };

  const handleInputPaid = (e) => {
    setPaid(e.target.checked);
    setShowList(
      e.target.checked
        ? accountList
        : accountList.filter((l) => l.paid === false)
    );
  };

  // Funciones de procesamiento de datos
  const getAmountList = (list) => {
    return list.map((li) => {
        const amount = li.record.map((li) => li.amount).reduce((prev, next) => prev + next, 0);
        return li.total_amount - amount;
    });
  }

  const getDeudaTotalBruta = (onlyBrand) => {

    var lnp;
    if(onlyBrand) {
        lnp = accountListNotPaid.filter((l) =>  l.brand ===accountSearchBrand);
    } else {
        lnp = accountListNotPaid;
    }
    const listDolar = lnp.filter(li => li.currency ==='DOLAR');
    const listSol = lnp.filter(li => li.currency ==='SOL');

    const totalPaidDolar = getAmountList(listDolar);
    const totalPaidSol = getAmountList(listSol);

    // console.log(totalPaidDolar);
    
    const totalAmountDolar= totalPaidDolar.map((li) => li).reduce((prev, next) => prev + next, 0);
    const totalAmountSol= totalPaidSol.map((li) => li).reduce((prev, next) => prev + next, 0);
    
    // console.log(totalAmount, totalPaid,);
    return ({totalAmountDolar, totalAmountSol});
  };

 

  return (
    <div>
      <Navbar />
      <h4>MONEDA: {companyActive.currency}</h4>
      <div className="account-container">
        <div>
          <div className="account-box search-box">
            <Select
              options={options}
              value={{ value: accountSearchBrand, label: accountSearchBrand }}
              onChange={handleInputBrand}
            />

            <button
              className="btn btn-primary btn-block mt-4"
              onClick={handleOpenModal}
            >
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

          <div className="account-box info-box">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Dolar</th>
                        <th scope="col">Sol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>Deuda Total Bruta:  </p>
                        </td>
                        <td>{getDeudaTotalBruta(false).totalAmountDolar}</td>
                        <td>{getDeudaTotalBruta(false).totalAmountSol}</td>
                    </tr>


                    <tr>
                        <td>
                            <p>Deuda de {accountSearchBrand}: </p>

                        </td>
                        <td>{getDeudaTotalBruta(true).totalAmountDolar}</td>
                        <td>{getDeudaTotalBruta(true).totalAmountSol}</td>
                    </tr>



                </tbody>
            </table>
          </div>
        </div>

        <div className="account-response-box">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Nro Factura</th>
                <th scope="col">Fecha Registro</th>
                <th scope="col">Monto total</th>
                <th scope="col">Registro</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {showList.map((account) => (
                <AccountItemList key={account.id} account={account} />
              ))}
            </tbody>
          </table>
        </div>
        <AccountModal />
        <AccountRecordModal />
      </div>
    </div>
  );
};
