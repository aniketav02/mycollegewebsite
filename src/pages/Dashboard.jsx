import React from "react";

const Dashboard = ({ user, logout }) => {
  return (
    <div style={styles.container}>
      <div style={styles.welcomeBox}>
        <h2 style={styles.heading}>Welcome, <span style={styles.userName}>{user.name}</span>!</h2>
        <p style={styles.email}>Email: <a href={`mailto:${user.email}`} style={styles.emailLink}>{user.email}</a></p>
        <p style={styles.info}>
          You are now logged in to the{" "}
          <strong>D. Y. Patil College of Engineering and Technology</strong> student dashboard.
        </p>
        <button onClick={logout} style={styles.btn} aria-label="Logout from dashboard">
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "550px",
    margin: "4rem auto",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 64, 128, 0.15)",
    backgroundColor: "#f9fbff",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  welcomeBox: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  heading: {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#003366",
    marginBottom: "0.25rem",
  },
  userName: {
    color: "#007ACC",
  },
  email: {
    fontSize: "1rem",
    color: "#004080",
    marginBottom: "0.8rem",
  },
  emailLink: {
    color: "#0059b3",
    textDecoration: "none",
  },
  info: {
    fontSize: "1.05rem",
    fontWeight: "500",
    color: "#00509e",
    marginBottom: "2rem",
  },
  btn: {
    padding: "0.85rem 2.5rem",
    fontSize: "1.15rem",
    borderRadius: "40px",
    border: "none",
    backgroundColor: "#007ACC",
    color: "white",
    cursor: "pointer",
    fontWeight: "700",
    boxShadow: "0 5px 15px rgba(0, 122, 204, 0.4)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  btnHover: {
    backgroundColor: "#005fa3",
    boxShadow: "0 6px 18px rgba(0, 95, 163, 0.6)",
  },
};

export default Dashboard;
