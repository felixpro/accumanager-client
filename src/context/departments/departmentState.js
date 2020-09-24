import React, {useReducer} from 'react'
import departmentContext from './departmentContext'
import departmentReducer from './departmentReducer'
import clienteAxios from '../../config/axios'

import {
   LIST_DEPARTMENTS,
   CREATE_DEPARTMENTS,
   DELETE_DEPARTMENTS,
   UPDATE_DEPARTMENTS
  } from '../../types'



 const DepartmentState = props => {

   const initialState = {
     departmentList: [],
   }

// crear dispath y state
const [state, dispath] = useReducer(departmentReducer, initialState);




// GET departaments
const getDepartaments = () => {

  clienteAxios.get('/')
    .then(function (response) {
      dispath({
         type: LIST_DEPARTMENTS,
         payload: response.data
     })
    })
    .catch(function (error) {
      console.log(error);
    })

}

// CREATE departaments
const createDepartment = (department) => {
  clienteAxios.post(`/post/department`, department)
    .then(function (response) {
      dispath({
         type: CREATE_DEPARTMENTS,
         payload: department
     })
    })
    .catch(function (error) {
      console.log(error);
    })

}

// DELETE departaments
const deleteDepartment = (departmentId) => {
  clienteAxios.delete(`/department/${departmentId}`)
    .then(function (response) {
      dispath({
         type: DELETE_DEPARTMENTS,
         payload: departmentId
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}


// UPDATE departaments
const updateDepartment = (department, departmentId) => {
  clienteAxios.put(`/department/${departmentId}`, department)
    .then(function (response) {
      console.log(response)
      dispath({
         type: UPDATE_DEPARTMENTS,
         payload: department
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}






   return (
     <departmentContext.Provider
         value={{
          departmentList: state.departmentList,
          getDepartaments,
          updateDepartment,
          deleteDepartment,
          createDepartment
         }}
       >
       {props.children}
     </departmentContext.Provider>
   )

 }


 export default DepartmentState;
