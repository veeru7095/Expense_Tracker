import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateTask() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const { expenseId } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

 
  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/get/${userId}/${expenseId}`
        );

        if (response.ok) {
          const data = await response.json(); 
          setAmount(data.amount || "");
          setCategory(data.category || "");
          setPaymentMode(data.paymentMode || "");
          setDate(data.date || "");
          setNote(data.note || "");
        } else {
          console.error("Failed to fetch expense details");
        }
      } catch (err) {
        console.error("Error fetching expense:", err);
      }
    };

    fetchExpense();
  }, [userId, expenseId]);

 
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateDetails = { title, amount, category, paymentMode, date, note };

    try {
      const response = await fetch(
        `http://localhost:8080/api/update/${userId}/${expenseId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateDetails),
        }
      );

      if (response.ok) {
        const message = await response.text(); 
        alert(message); 
        navigate("/dashboard");
      } else {
        const err = await response.text();
        alert("Update failed : " + err);
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Internal error ");
    }
  };

  return (
    <div className="addTaskContainer">
      <h1>Update Task</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Ex: Book purchased"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="education">Education</option>
            <option value="medical">Medical</option>
            <option value="gifts">Gifts</option>
            <option value="fitness/health">Fitness/Health</option>
            <option value="investment">Investment</option>
            <option value="insurance">Insurance</option>
            <option value="personalCare">Personal Care</option>
            <option value="others">Others</option>
          </select>
        </label>

        <label>
          Payment Mode:
          <select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="">Select Payment Mode</option>
            <option value="online">Online</option>
            <option value="Credit_Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="others">Others</option>
          </select>
        </label>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Note:
          <input
            type="text"
            placeholder="Ex: EMI pending"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>

        <button className="AddTaskBtn">Update</button>
      </form>
    </div>
  );
}

export default UpdateTask;
