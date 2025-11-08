import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/dypcetlogo.jpeg"; // Ensure the logo exists in src/assets/

const Navbar = ({ user, logout }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    if (logout) logout();
    navigate("/");
    setOpen(false);
  };

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* ===== Top Blue Banner ===== */}
      <div
        style={{
          background: "#0b3a66",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 20px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={logo}
          alt="DYP Logo"
          style={{
            width: "75px",
            height: "75px",
            objectFit: "contain",
            marginRight: "15px",
          }}
        />
        <div style={{ textAlign: "left" }}>
          <h2 style={{ margin: 0, fontSize: "1.2rem", letterSpacing: "1px" }}>
            D Y PATIL COLLEGE OF ENGINEERING & TECHNOLOGY
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "#dfe9ff",
              fontWeight: 400,
            }}
          >
            (An Autonomous Institute, Permanently Affiliated to Shivaji University, Kolhapur)
          </p>
        </div>
      </div>

      {/* ===== Navigation Bar ===== */}
      <nav
        style={{
          background: "rgba(18, 59, 106, 0.6)", // semi-transparent
          color: "white",
          padding: "8px 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* Left Logo Spacer */}
        <div style={{ width: "75px" }}></div>

        {/* ===== Hamburger Menu (Mobile) ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="menu-toggle"
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.8rem",
            cursor: "pointer",
            /* display removed so CSS controls it */
          }}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* ===== Navigation Links ===== */}
        <ul
          className={`menu ${open ? "menu-open" : ""}`}
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: open ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            margin: 0,
            padding: "5px 10px",
            flexGrow: 1,
            borderRadius: "10px",
          }}
        >
          <li>
            <NavLink to="/" style={linkStyle} onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle} onClick={handleLinkClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/admissions" style={linkStyle} onClick={handleLinkClick}>
              Admissions
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" style={linkStyle} onClick={handleLinkClick}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={linkStyle} onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>

          {!user ? (
            <>
              <li>
                <NavLink to="/login" style={linkStyle} onClick={handleLinkClick}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  style={linkStyle}
                  onClick={handleLinkClick}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  style={linkStyle}
                  onClick={handleLinkClick}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    ...linkStyle,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Right Spacer for Symmetry */}
        <div style={{ width: "75px" }}></div>
      </nav>
    </header>
  );
};

// ===== Reusable NavLink Styles =====
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "0.95rem",
  padding: "6px 12px",
  borderRadius: "5px",
  transition: "background 0.3s",
};

export default Navbar;
