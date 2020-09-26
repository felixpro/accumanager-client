import React, {useContext, useEffect, useState} from 'react';
import DepartmentList from '../departments/departmentList'
import departmentContext from '../../context/departments/departmentContext'


const Sidebar = () => {

    // Departament context
    const departmentsContext = useContext(departmentContext)
    const {createDepartment, updateDepartment} = departmentsContext;

    // STATE create form
    const [stateDepartment, saveDepartment] = useState({
      name: ""
    });
    const {name} = stateDepartment;

    // State alert
    const [alertState, savealert] = useState({
      alert: ''
    });
    const {alert} = alertState;


    // Read the content
     const onChangeDepartment = e => {
       saveDepartment({
         ...stateDepartment,
         [e.target.name] : e.target.value
       })
     }


   // Submit function
  const onSubmitDepartment = e => {
    e.preventDefault();

    // Very basic validation
    if (name === '') {
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

    createDepartment(stateDepartment );

  }



  return (
    <aside>


    <button className="dropdown-item" type="button" data-toggle="modal" data-target="#createDepartment" >New Department</button>



      <div className="proyectos">
        <h5>departaments</h5>

      <DepartmentList/>

      </div>

      <div className="modal fade" id="createDepartment" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <div className="modal-body delete-departament">
              {alert? <div className="alert alert-danger" role="alert">{alert}</div>:null}

              <form
                    className="new-department"
                    onSubmit={onSubmitDepartment}
                    >

                    <input
                      type="text"
                      className="input-text"
                      placeholder="Nombre Proyecto"
                      name="name"
                      onChange={onChangeDepartment}
                      value={name}
                    />


                    <input
                      type="submit"
                      className="btn"
                      value="Add department"
                    />


                  </form>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}


export default Sidebar;
