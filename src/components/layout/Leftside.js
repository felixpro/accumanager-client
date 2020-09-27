import React, {useContext, useState,useEffect } from 'react';
import departmentContext from '../../context/departments/departmentContext'

import EmployeeList from '../employee/employeeList'
import FormEmployee from '../employee/formEmployee'
import Modal from 'react-bootstrap/Modal'


const LeftSide = (props) => {


  useEffect(()=> {
  props.getTheme()
  }, [props.theme])


  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {createDepartment, updateDepartment, departmentName, departmentSelected} = departmentsContext;

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
// modal
const [addDepart, setShowAdd] = useState(false);
const [addEmploye, setShowEmployee] = useState(false);
const [addTheme, setShowTheme] = useState(false);


const changeSelect = data => {
  const dataOBJ = {
    name: data
  }
  props.updateTheme(dataOBJ)
}


  return (
    <div className="Left-content">
      <div className="left-container">
        <div className="section-header">
          {departmentName ? <p>{departmentName[0].name}</p> : <p>Select a department</p>}
        </div>
      </div>
      <div className="left-section">
        <div className="Left-bottoms">
          <a className="modal-btn active-btn" onClick={() => setShowTheme(true)}>Theme<img src="img/plus.png" alt=""/></a>
          <a className="modal-btn active-btn" onClick={() => setShowAdd(true)}>Department<img src="img/plus.png" alt=""/></a>
          { departmentSelected ?  (<a  type="button" className="modal-btn add-btn active-btn" onClick={() => setShowEmployee(true)} >Employee<img src="img/plus.png" alt=""/></a>) : <a  type="button" className="greyOut-btn  modal-btn add-btn" >Employee<img src="img/plus-grey.png" alt=""/></a>  }



          <Modal
            show={addDepart}
            onHide={() => setShowAdd(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="modal-react"
          >
            {alert? <div className="alert alert-danger" role="alert">{alert}</div>:null}
            <form
                  className="new-department"
                  onSubmit={onSubmitDepartment}
                  >

                  <input
                    type="text"
                    className="input-text"
                    placeholder="Department name"
                    name="name"
                    onChange={onChangeDepartment}
                    value={name}
                  />

                  <input
                    type="submit"
                    className="btn"
                    value="Add department"
                    onClick={() => setShowAdd(false)}
                  />

                </form>
          </Modal>


          <Modal
            show={addEmploye}
            onHide={() => setShowEmployee(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="modal-react"
          >

          <FormEmployee
            setShowEmployee={setShowEmployee}
          />

          </Modal>

          <Modal
            show={addTheme}
            onHide={() => setShowTheme(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="modal-react"
          >

          <div className="theme-section">
            <button className="dark" onClick={() => changeSelect("Dark")}>Dark</button>
            <button className="grey" onClick={() =>changeSelect("Grey")}>Grey</button>
            <button className="green" onClick={() =>changeSelect("Green")}>Green</button>
          </div>

          </Modal>


        </div>
        <div>
          <EmployeeList/>
        </div>

      </div>
    </div>
  )
}


export default LeftSide;
