import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GetAllTasks.css";
import { useNavigate } from "react-router-dom";

function GetAllTasks() {
  const [users, setUsers] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  
  const fetchExpenses = () => {
    axios
      .get(`http://localhost:8080/api/${userId}/getAll`)
      .then((res) => {
        const tasks = res.data;
        setUsers(tasks);
        const total = tasks.reduce(
          (sum, task) => sum + parseFloat(task.amount),
          0
        );
        setTotalAmount(total);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

 
  const handleDelete = async (expenseId) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/delete/${userId}/${expenseId}`
      );
      alert(response.data || "Deleted successfully!");

      
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
      alert("Failed to delete expense");
    }
  };

  return (
    <div className="GetAllTasksContainer">
      <div className="headValues">
        <h2>Your ID: {userId}</h2>
        <h2>Name: {userName}</h2>
        <h2>Total expenses: ₹{totalAmount}</h2>
      </div>

      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>TITLE</th>
            <th>AMOUNT</th>
            <th>CATEGORY</th>
            <th>PAYMENT_MODE</th>
            <th>DATE</th>
            <th>NOTE</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={`${user.id}-${index}`}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.amount}</td>
              <td>{user.category}</td>
              <td>{user.paymentMode}</td>
              <td>{user.date}</td>
              <td>{user.note}</td>
              <td>
                <button
                  className="updateBtn"
                  onClick={() => navigate(`/UpdateTask/${user.id}`)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllTasks;
