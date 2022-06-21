import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { AppContext } from '../context/AppContext' ;

function SpentSoFar() {

    const { expenses } = useContext(AppContext) ;
    const renderSpent = () => {
        const array = expenses.map(o => o.cost);
        return array.reduce((a,b) => a+b, 0);
    }
    return ( <Alert variant="info" >
            <span> spentSoFar: £{renderSpent()} </span>
            </Alert> );
}

export default SpentSoFar;