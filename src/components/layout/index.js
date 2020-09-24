import React, {useContext} from 'react';
import departmentContext from '../../context/departments/departmentContext'
import Sidebar from './Sidebar'


const Index = ({props}) => {

  // Departament context
  const departmentsContext = useContext(departmentContext)
  const {getDepartaments} = departmentsContext;


  return (
    <div className="App">
      <div className="fluid-container">
        <div className="row">
          <div className="col-4">
            <Sidebar/>
          </div>
          <div className="col-9">
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
