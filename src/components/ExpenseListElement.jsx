import React , {useContext} from 'react';
import ExpenseItem from './ExpenseItemElement';

import {AppContext} from '../context/AppContext';
import { Alert } from 'react-bootstrap';
function ExpenseList() {
    const { dispatch, expenses } = useContext(AppContext);
    const  handleDelete = (id) => {
         dispatch({
            type: "DELETE_EXPENSE",
            payload: id,
         });
    }

const renderEmpty= () =>{
    if (expenses.length === 0){
        return (<Alert variant='info'> Please add expenses using the below form </Alert>);
    }
}
    return (
        <React.Fragment>
        {renderEmpty()}
        <ul className='list-group'>
            {expenses.map((item) => {
               return (<li className="list-group-item d-flex justify-content-between align-items-center"> 
               <ExpenseItem key={item.id} id={item.id} name={item.name} cost={item.cost}/>
               <button className='btn btn-primary' onClick={() => handleDelete(item.id)} > Delete </button>
             </li>
                );
            })}
        </ul>
        </React.Fragment>
     );
}

export default ExpenseList;