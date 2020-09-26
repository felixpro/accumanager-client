import React, {useContext, useEffect} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'
import Sidebar from './Sidebar'
import LeftSide from './Leftside'

const Index = ({props}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {getDepartaments, departmentList} = departmentsContext;


  // Employee context
  const employeeContext = useContext(employeesContext)
  const {getEmployees, employees} = employeeContext;



  return (
    <div className="App">
  
            <Sidebar/>

            <LeftSide />


    </div>
  );
}

export default Index;
