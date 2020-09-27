import React, {useContext, useState, useEffect} from 'react';
import DepartmentList from '../departments/departmentList'


const Sidebar = (props) => {

useEffect(()=> {
props.getTheme()
}, [props.theme])

  return (
    <aside className={props.theme}>
      <div className="department-section">
        <div className="company-section">
          <div className="company-img">
            <img src="img/company-logo.png" alt=""/>
          </div>
          <p>Accumanager</p>
        </div>
        <div className="bottom-section">
          <h2 className="title">All departments</h2>
          <div className="departmentList">
            <DepartmentList/>
          </div>
        </div>

      </div>
    </aside>
  )
}


export default Sidebar;
