import React, {useContext} from 'react';
import { Alert } from 'react-bootstrap';
import { AppContext } from '../context/AppContext' ;

function Budget() {
    const { budget } = useContext(AppContext);
    return ( 
        <Alert variant="secondary" >
            <span> Budget: £{budget} </span>
        </Alert>
     );
}

export default Budget;