import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import {AppContext} from '../context/AppContext';

function Remaining() {
    const { budget, expenses } = useContext(AppContext) ;
    const renderRemaining = () => {
        const array = expenses.map(o => o.cost);
        return budget - array.reduce((a,b) => a+b, 0);
    }

    return ( <Alert variant="success" >
            <span> Remaining: £{renderRemaining()} </span>
            </Alert> );
}

export default Remaining;