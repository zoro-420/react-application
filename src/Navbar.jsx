import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        position: "absolute", // Positioning it relative to the viewport
        top: "0", // Places it at the top
        left: "50%", // Centers horizontally
        transform: "translateX(-50%)", // Adjusts centering
        background: "linear-gradient(to right, #4b6cb7, #182848)", // Gradient
        padding: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Shadow effect
        width: "100%", // Ensures it spans the entire width
        zIndex: "10", // Keeps it above other elements
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "aqua")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          to="/todo"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "aqua")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Todo
        </Link>
      </div>
      <div>
        <Link
          to="/profilecard"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "aqua")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Profile Card
        </Link>
      </div>
      <div>
        <Link
          to="/gridview"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "aqua")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Grid App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
