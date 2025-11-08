import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
    color: "#004080",
  },
  link: {
    color: "#004080",
    textDecoration: "underline",
    fontWeight: "600",
  },
};

export default NotFound;
