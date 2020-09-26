import React, {useContext} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'
import Sidebar from './Sidebar'
import LeftSide from './Leftside'


const Index = ({props}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {getDepartaments} = departmentsContext;


  // Employee context
  const employeeContext = useContext(employeesContext)
  const {getEmployees} = employeeContext;


  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar/>
          </div>
          <div className="col-lg-9">
          <LeftSide />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
