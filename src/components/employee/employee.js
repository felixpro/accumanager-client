import React, {useContext, useState} from 'react';
import employeesContext from '../../context/employee/employeeContext'





const Employee = ({employee}) => {

  // Employee context
  const employeeContext = useContext(employeesContext)
  const {deleteEmployee, updateEmployee} = employeeContext;

  const [employeeState, saveEmployee] = useState({
      name: employee.name,
      age: employee.age,
      position: employee.position,
      schedule: employee.schedule,
      supervisor: employee.supervisor
  })


    const {name, age, position, schedule, supervisor} = employeeState;

    // State alert
    const [alertState, savealert] = useState({
      alert: ''
    });
    const {alert} = alertState;


    // Leer los valores del formulario
    const handleChange = e => {
        saveEmployee({
            ...employeeState,
            [e.target.name] : e.target.value
        })
    }


    const onSubmitEmployee = e => {
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
      updateEmployee(employeeState, employee._id)
    }




const removeEmployee = () => {
  deleteEmployee(employee._id)
}


   return (
     <div className="employee-list">
       <div>
         <p>{employee.name}</p>
         <p>{employee.age}</p>
         <p>{employee.position}</p>
         <p>{employee.schedule}</p>
       </div>
        <a href="#" data-toggle="modal" data-target={`#edit${employee._id}`} >Edit</a>
        <a href="#" data-toggle="modal" data-target={`#delete${employee._id}`}>Delete</a>




    <div className="modal fade" id={`edit${employee._id}`} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <div className="modal-body delete-departament">
            {alert? <div className="alert alert-danger" role="alert">{alert}</div>:null}

            <form onSubmit={onSubmitEmployee}>
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
        </div>
      </div>
    </div>

    <div className="modal fade" id={`delete${employee._id}`} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <div className="modal-body delete-departament">
            <p>You are about to delete
              <span>“{employee.name}”</span>
            </p>
            <button onClick={removeEmployee}>Delete</button>
            <div className="buttons-container">
              <div>
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


export default Employee;
