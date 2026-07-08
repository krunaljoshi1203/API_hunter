import { useState } from "react";
import "./EditEmployee.css";

const EditEmployee = ({ employee, onUpdate, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);

  const submitHandler = () => {
    onUpdate(employee.id, { name, email });
  };

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <h3>Edit Employee</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <div className="modal-actions">
          <button className="update-btn" onClick={submitHandler}>
            Update
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;