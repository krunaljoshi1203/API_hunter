import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import EmployeeList from "./Components/EmployeeList";
import EditEmployee from "./Components/EditEmployee";
import {
  getEmployees,
  deleteEmployee,
  updateEmployee,
} from "./Services/api";


function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await updateEmployee(id, data);

      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === id ? { ...emp, ...data } : emp
        )
      );

      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <>
      <Navbar onShow={loadEmployees} />

      <EmployeeList
        employees={employees}
        onEdit={setSelectedEmployee}
        onDelete={handleDelete}
      />

      {selectedEmployee && (
        <EditEmployee
          employee={selectedEmployee}
          onUpdate={handleUpdate}
          onCancel={() => setSelectedEmployee(null)}
        />
      )}
    </>
  );
}

export default App;
