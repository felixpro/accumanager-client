import React, {useReducer} from 'react'
import employeeContext from './employeeContext'
import employeeReducer from './employeeReducer'
import clienteAxios from '../../config/axios'

import {
  CREATE_EMPLOYEES,
  DELETE_EMPLOYEES,
  UPDATE_EMPLOYEES,
  GET_EMPLOYEES
  } from '../../types'



 const EmployeeState = props => {

   const initialState = {
    employees: []
   }

// crear dispath y state
const [state, dispath] = useReducer(employeeReducer, initialState);




// GET employees
const getEmployees = (departmentId) => {
  clienteAxios.get(`/employee/${departmentId}`)
    .then(function (response) {
      dispath({
         type: GET_EMPLOYEES,
         payload: response.data
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}

// CREATE employees
const createEmployee = (employee, departmentId) => {

  clienteAxios.post(`/employee/${departmentId}`, employee)
    .then(function (response) {
      // console.log(employee)
      dispath({
         type: CREATE_EMPLOYEES,
         payload: employee
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}

// DELETE employees
const deleteEmployee = (employeeId) => {
  clienteAxios.delete(`/employee/${employeeId}`)
    .then(function (response) {
      dispath({
         type: DELETE_EMPLOYEES,
         payload: employeeId
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}


// UPDATE employees
const updateEmployee = (employee, employeeId) => {

  clienteAxios.put(`/employee/${employeeId}`, employee)
    .then(function (response) {
      dispath({
         type: UPDATE_EMPLOYEES,
         payload: response.data
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}



   return (
     <employeeContext.Provider
         value={{
           employees: state.employees,
          getEmployees,
          createEmployee,
          deleteEmployee,
          updateEmployee
         }}
       >
       {props.children}
     </employeeContext.Provider>
   )

 }


 export default EmployeeState;
