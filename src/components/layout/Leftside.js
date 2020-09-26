import React from 'react';

import EmployeeList from '../employee/employeeList'
import FormEmployee from '../employee/formEmployee'


const LeftSide = () => {

  return (
    <div>

    <FormEmployee/>
      <EmployeeList/>

    </div>
  )
}


export default LeftSide;
