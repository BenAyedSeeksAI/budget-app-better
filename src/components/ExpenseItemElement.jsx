import React, {useContext} from 'react';

import Badge from 'react-bootstrap/Badge';
import { AppContext } from '../context/AppContext';

function ExpenseItem(props) {
    
    const { name, cost } = props ;
    const { budget } = useContext(AppContext);
    const budgetProportion = () => {
      const percentage = (cost * 100) / budget ; 

      if ( percentage < 20){
          return 'success';
      }
      else if (percentage < 40){
        return 'primary';
      }
      else if (percentage < 60) {
        return 'warning';
      }
      else if (percentage < 80){
        return 'danger';
      }else {
        return 'dark';
      }
    }
  
    

    
    return ( <React.Fragment> 
                  {name}
                  <div>
                    <Badge  bg={budgetProportion()} className='mr-3'>£{cost}</Badge>
                  </div>
             </React.Fragment>);
}

export default ExpenseItem;