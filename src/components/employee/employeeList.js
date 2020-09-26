import React, {useContext, useEffect} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'
import Employee from './employee'
import FormEmployee from './formEmployee'

const EmployeeList = (props) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const { departmentSelected} = departmentsContext;


  // Employee context
  const employeeContext = useContext(employeesContext)
  const {getEmployees, employees, employeeList} = employeeContext;




if (employees.length === 0) return <p>There's not any employee</p>;

   return (
     <div className="employee-list">
       <div className="department-list container">
         <div className="row">
           {employees.map(employee => (
             <div className="col-4">
               <Employee
                 key={employee._id}
                 employee={employee}
               />
             </div>

         ))}
         </div>

       </div>



     </div>
   )
}


export default EmployeeList;
