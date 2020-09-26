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
    </div>
  )
}


export default FormEmployee;
