import React, {useContext, useEffect} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import Department from './department'

const DepartmentList = (props) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {getDepartaments, departmentList} = departmentsContext;


  useEffect(() => {

    getDepartaments()
  }, [departmentList])

// Proyectos tiene contenidos?
if (departmentList.length === 0) return <p>No hay departamentos.</p>;

   return (
     <ul className="department-list">
         {departmentList.map(department => (
           <Department
             key={department._id}
             department={department}
           />
       ))}
     </ul>
   )
}


export default DepartmentList;
