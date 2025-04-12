import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        position: "absolute",
        top: "0", 
        left: "50%", 
        transform: "translateX(-50%)", 
        background: "linear-gradient(to right, #4b6cb7, #182848)", 
        padding: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        width: "100%", 
        zIndex: "10", 
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
