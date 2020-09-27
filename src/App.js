
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import index from './components/layout/index';

import DepartmentState from './context/departments/departmentState';
import EmployeeState from './context/employee/employeeState';
import ThemeState from './context/theme/themeState';


function App() {
  return (
<ThemeState>
      <EmployeeState>
        <DepartmentState>
          <Router>
            <Switch>{/* Cada una de las paginas */}
                <Route exact path="/" component={index} />
            </Switch>
          </Router>
        </DepartmentState>
    </EmployeeState>
  </ThemeState>
  );
}

export default App;
