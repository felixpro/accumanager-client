import React, {useContext, useEffect, useState} from 'react';
import departmentContext from '../../context/departments/departmentContext'



const FormDepartment = ({department}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {createDepartment, updateDepartment} = departmentsContext;

  // STATE
  const [stateDepartment, saveDepartment] = useState({
    name: department.name
  });


const {name} = stateDepartment;

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

  updateDepartment(stateDepartment, department._id );
}


   return (
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
   )
}


export default FormDepartment;
