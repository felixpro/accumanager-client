import React, {useContext, useEffect} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'

import FormDepartment from './formDepartment'

const Department = ({department}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {deleteDepartment, selectDepartment} = departmentsContext;

  // Employee context
  const employeeContext = useContext(employeesContext)
  const {getEmployees} = employeeContext;


const deleteDep = (departmentId) => {
  deleteDepartment(departmentId)
}

const seletDep = (departmentId) => {
  selectDepartment(departmentId)
  getEmployees(departmentId)
}

  return (
    <div className="button-department" onClick={() => seletDep(department._id)}>
      {department.name}
      <div className="dropdown">
        <a href="" className="" id="dropdownMenu2" data-toggle="dropdown"  aria-expanded="false"><img src="img/menu-dep.png" alt=""/></a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#edit${department._id}`}>Edit</button>
          <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#delete${department._id}`}>Delete</button>
        </div>
      </div>


      <div className="modal fade" id={`delete${department._id}`} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <div className="modal-body delete-departament">
              <p>You are about to delete
                <span>“{department.name}”</span>
              </p>
              <div className="buttons-container">
                <div>
                  <a href="" data-dismiss="modal">Cancel</a>
                  <a href="" className="proceed-btn" onClick={() => deleteDep(department._id)} data-dismiss="modal"><img src="img/right-arrow.png" alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id={`edit${department._id}`} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <div className="modal-body delete-departament">

                <FormDepartment
                department={department}
                />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}




export default Department;
