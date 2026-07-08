import "./EmployeeList.css";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="grid-container">
      {employees.map((emp) => (
        <div className="employee-card" key={emp.id}>
          <div className="employee-avatar">
            {emp.name.charAt(0).toUpperCase()}
          </div>

          <h3>{emp.name}</h3>
          <p>{emp.email}</p>

          <div className="card-actions">
            <button
              className="action-btn edit-btn"
              onClick={() => onEdit(emp)}
            >
              Edit
            </button>
            <button
              className="action-btn delete-btn"
              onClick={() => onDelete(emp.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;