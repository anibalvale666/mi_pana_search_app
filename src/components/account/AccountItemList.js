import React from 'react';
import { useDispatch } from 'react-redux';
import { accountSetActive, accountStartDelete } from '../../actions/account';
import { uiOpenAccountModal, uiOpenAccountRecordModal } from '../../actions/ui';

export const AccountItemList = ( {account} ) => {
    const dispatch = useDispatch();
    
    const { id, invoice_number, total_amount, initial_date, record,paid} = account;
    const accountInitialDate = new Date(initial_date);
    // const [debt, setDebt] = useState(total_amount);
    let debt = total_amount;
 
    // const {accountList} = useSelector( state => state.account );   
    const debtCalculate = total_amount - record.map(item => item.amount).reduce((prev, next) => prev + next,0);

    const handleItemUpdate = (account) => {
        dispatch( uiOpenAccountModal() );
        dispatch( accountSetActive(account) );
    };
    
    const handleItemDelete = (id) => {
        dispatch(accountStartDelete(id));
    };
    
    const handleItemRecord = (account) => {
        dispatch(uiOpenAccountRecordModal());
        dispatch( accountSetActive(account) );
    }
    
    return (
        <tr key={id}>
        <td> {invoice_number} </td>
        <td> {accountInitialDate.toLocaleDateString("es-ES")} </td>
        <td> {total_amount} </td>
        <td>

            <table>
                <tbody>   
                {
                    
                        record.map((record) => {
                        const recordDate = new Date(record.date);
                        debt = debt - record.amount; 
                        return (
                                    <tr key={record._id}>                                
                                        <td> {recordDate.toLocaleDateString("es-ES")} </td>
                                        <td> {record.amount} </td>
                                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
            


        </td>
        <td>{paid ? 'CANCELADO' :debtCalculate}</td>

        <td>
        <button 
            className="btn btn-warning mr-4"
            onClick={handleItemUpdate.bind(this, account)}
        >
            <i className="fas fa-pencil-alt"></i>
        </button>
        <button
            className="btn btn-danger"
            onClick={handleItemDelete.bind(this, account.id)}
        >
            <i className="far fa-trash-alt fa-lg"></i>
        </button>

        <button
            className="btn btn-success ml-4"
            onClick={handleItemRecord.bind(this, account)}
        >
            <i className="fas fa-plus fa-lg"></i>
        </button>
        </td>

    </tr>  
    )
}
