import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Components/App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Function to update an employee
  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
  };

  // Function to delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <Router>
      <div className="app">
        <h1>Employee Management System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/employees">View Employees</Link>
            </li>
            <li>
              <Link to="/add">Add Employee</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/employees">
            <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
          </Route>
          <Route exact path="/add">
            <EmployeeForm addEmployee={addEmployee} />
          </Route>
          <Route path="/employees/:id">
            <EmployeeDetails employees={employees} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



