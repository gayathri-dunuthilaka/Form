import React from 'react';
import { useParams, Link } from 'react-router-dom';

function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>First Name:</strong> {employee.firstName}</p>
      <p><strong>Last Name:</strong> {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <Link to="/employees">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetails;
