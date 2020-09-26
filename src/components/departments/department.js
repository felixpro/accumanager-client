import React, {useContext, useEffect, useState} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'
import FormDepartment from './formDepartment'
import Modal from 'react-bootstrap/Modal'



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

// modal
const [showEdit, setShowEdit] = useState(false);
const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="button-department" onClick={() => seletDep(department._id)}>
      {department.name}
      <div className="dropdown">
        <a href="" className="" id="dropdownMenu2" data-toggle="dropdown"  aria-expanded="false"><img src="img/menu-dep.png" alt=""/></a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" onClick={() => setShowEdit(true)}>Edit</button>
          <button className="dropdown-item" onClick={() => setShowDelete(true)}>Delete</button>
        </div>
      </div>

      <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >

        <FormDepartment
        department={department}
        />

      </Modal>

      <Modal
        show={showDelete}
        onHide={() => setShowDelete(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >

        <p>You are about to delete
          <span>“{department.name}”</span>
        </p>
        <div className="buttons-container">
          <div>
            <a href="#" onClick={()=>setShowDelete(false)}>Cancel</a>
            <a href="#" className="proceed-btn" onClick={() => deleteDep(department._id)} ><img src="img/right-arrow.png" alt=""/></a>
          </div>
        </div>

      </Modal>



    </div>
  )
}




export default Department;
