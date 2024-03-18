import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              {employee.firstName} {employee.lastName} - {employee.email}
            </Link>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
