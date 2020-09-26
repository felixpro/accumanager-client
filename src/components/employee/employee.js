import React, {useContext, useState} from 'react';
import employeesContext from '../../context/employee/employeeContext'
import Modal from 'react-bootstrap/Modal'





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
     setShowEditEmp(false)
    }




const removeEmployee = () => {
  deleteEmployee(employee._id)
setShowDeleteEmp(false)
}

// modal
const [showEditEmp, setShowEditEmp] = useState(false);
const [showDeleteEmp, setShowDeleteEmp] = useState(false);


   return (
     <div className="employee-list">
       <div className="employee-cart">
         <div className="cart-header">
           <img src="img/worker.png" alt=""/>
           <div className="cart-title">
            <p className="name">{employee.name}</p>
            <p className="position">{employee.position}</p>
           </div>
         </div>
         <div>
          <div className="footer-cart">
            <div>
              <p><span>Age:</span>{employee.age}</p>
              <p><span>Schedule: </span>{employee.schedule}</p>
            </div>

          </div>

         </div>
         <a href="" className="" id="dropdownMenu3" data-toggle="dropdown"  aria-expanded="false"><img src="img/menu-cart.png" alt=""/></a>
         <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
           <a href="#" className="dropdown-item" onClick={() => setShowEditEmp(true)} >Edit</a>
           <a href="#" className="dropdown-item" onClick={() => setShowDeleteEmp(true)}>Delete</a>
         </div>

       </div>

       <Modal
         show={showEditEmp}
         onHide={() => setShowEditEmp(false)}
         dialogClassName="modal-90w"
         aria-labelledby="example-custom-modal-styling-title"
       >

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

       </Modal>


       <Modal
         show={showDeleteEmp}
         onHide={() => setShowDeleteEmp(false)}
         dialogClassName="modal-90w"
         aria-labelledby="example-custom-modal-styling-title"
       >

         <p>You are about to delete
           <span>“{employee.name}”</span>
         </p>
         <button onClick={removeEmployee}>Delete</button>

       </Modal>



     </div>
   )
}


export default Employee;
