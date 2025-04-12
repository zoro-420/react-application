import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";

const Todo = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #ece9e6, #ffffff)", // Subtle gradient background
        fontFamily: "'Arial', sans-serif", // Cleaner typography
        fontSize: "20px",
        fontWeight: "bold",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", // Elegant shadow
      }}
    >
      <div
        style={{
          fontSize: "26px",
          fontWeight: "600",
          color: "#333",
          marginBottom: "10px", // Adds spacing below text
        }}
      >
        Count: {count}
      </div>

      <button
        style={{
          fontSize: "18px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle button shadow
          transition: "transform 0.2s ease, background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#45a049";
          e.target.style.transform = "scale(1.1)"; // Slight scale-up effect
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#4CAF50";
          e.target.style.transform = "scale(1)"; // Reset scale
        }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        style={{
          fontSize: "18px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease, background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#e53935";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#f44336";
          e.target.style.transform = "scale(1)";
        }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        style={{
          fontSize: "18px",
          padding: "10px 20px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease, background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#1976D2";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#2196F3";
          e.target.style.transform = "scale(1)";
        }}
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

export default Todo;
