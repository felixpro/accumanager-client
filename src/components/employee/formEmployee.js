import React, {useContext, useEffect, useState} from 'react';
import DepartmentList from '../departments/departmentList'
import departmentContext from '../../context/departments/departmentContext'
import employeesContext from '../../context/employee/employeeContext'

import EmployeeList from '../employee/employeeList'


const FormEmployee = () => {

  // Employee context
  const employeeContext = useContext(employeesContext)
  const {createEmployee} = employeeContext;

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {department, departmentSelected} = departmentsContext;


  const [employee, saveEmployee] = useState({
      name: '',
      age: '',
      position: '',
      schedule: '',
      supervisor: ''
  })

  const {name, age, position, schedule, supervisor} = employee;

  // State alert
  const [alertState, savealert] = useState({
    alert: ''
  });
  const {alert} = alertState;


  // Leer los valores del formulario
  const handleChange = e => {
      saveEmployee({
          ...employee,
          [e.target.name] : e.target.value
      })
  }


  const onSubmit = e => {
    e.preventDefault();

    // Very basic validation
    if (name === '' || age === '' || position === '' || supervisor === '' || schedule === '') {
      setTimeout(() => {
        savealert({
        alert : ""
      })
    }, 4000)
    return  (
      savealert({
      alert : "Fields cannot be empty"
    }))

    }

    createEmployee(employee, departmentSelected )
  }

  return (
    <div>
      { departmentSelected ?  (<button  type="button" data-toggle="modal" data-target="#addEmployee">Add</button>) : <h2>Seleccione un departamento</h2> }
      <div className="modal fade" id="addEmployee" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <div className="modal-body delete-departament">
              {alert? <div className="alert alert-danger" role="alert">{alert}</div>:null}

              <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                      type="text"
                      className="input-text"
                      placeholder="Name..."
                      name="name"
                      value={name}
                      onChange={handleChange}
                  />
                <label htmlFor="age">Age</label>
                <input
                      type="number"
                      className="input-text"
                      placeholder="Age..."
                      name="age"
                      value={age}
                      onChange={handleChange}
                  />

                <label htmlFor="Position">position</label>
                <input
                      type="text"
                      className="input-text"
                      placeholder="Position..."
                      name="position"
                      value={position}
                      onChange={handleChange}
                  />
                <label htmlFor="schedule">Schedule</label>
                <input
                      type="text"
                      className="input-text"
                      placeholder="Schedule..."
                      name="schedule"
                      value={schedule}
                      onChange={handleChange}
                  />
                <label htmlFor="supervisor">Supervisor</label>
                <input
                      type="text"
                      className="input-text"
                      placeholder="Supervisor..."
                      name="supervisor"
                      value={supervisor}
                      onChange={handleChange}
                  />

                <input
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Guardar Employee"
                />
              </form>
              <div className="buttons-container">
                <div>
                  <a href="" data-dismiss="modal">Cancel</a>
                  <a href="" className="proceed-btn"  data-dismiss="modal"><img src="img/right-arrow.png" alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FormEmployee;
