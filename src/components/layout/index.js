import React, {useContext, useEffect} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'
import themeContext from '../../context/theme/themeContext'

import Sidebar from './Sidebar'
import LeftSide from './Leftside'

const Index = ({props}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {getDepartaments, departmentList} = departmentsContext;


  // Employee context
  const employeeContext = useContext(employeesContext)
  const {getEmployees, employees} = employeeContext;


  // theme context
  const themesContext = useContext(themeContext)
  const {getTheme, theme,  updateTheme } = themesContext;




  return (
    <div className="App">

            <Sidebar
              theme={theme}
              getTheme={getTheme}


            />

            <LeftSide
              theme={theme}
              updateTheme={updateTheme}
              getTheme={getTheme}
            />


    </div>
  );
}

export default Index;
