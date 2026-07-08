import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getEmployees = () => axios.get(API_URL);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
export const updateEmployee = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);