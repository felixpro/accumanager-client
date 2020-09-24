
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import index from './components/layout/index';

import DepartmentState from './context/departments/departmentState';


function App() {
  return (
      <DepartmentState>
        <Router>
          <Switch>{/* Cada una de las paginas */}
              <Route exact path="/" component={index} />
          </Switch>
        </Router>
      </DepartmentState>

  );
}

export default App;
