import React, {useContext, useEffect, useState} from 'react';
import departmentContext from '../../context/departments/departmentContext'



const FormDepartment = ({department}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {createDepartment, updateDepartment} = departmentsContext;

  // State department
  const [stateDepartment, saveDepartment] = useState({
    name: department.name
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

  updateDepartment(stateDepartment, department._id );
}




   return (
     <div>
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

   )
}


export default FormDepartment;
