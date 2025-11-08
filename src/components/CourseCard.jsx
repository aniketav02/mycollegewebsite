// same as your CourseCard.jsx but exported unchanged; it works fine with CSS overrides
import React, { useState } from "react";

const CourseCard = ({ course }) => {
  const [showForm, setShowForm] = useState(false);

  const styles = {
    card: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    imageWrapper: {
      overflow: "hidden",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      transition: "transform 0.6s ease",
    },
    content: {
      padding: "1.5rem",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      fontSize: "1.4rem",
      fontWeight: "700",
      color: "#003366",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.6",
      flexGrow: 1,
    },
    footer: {
      marginTop: "1.2rem",
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      backgroundColor: "#004080",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "8px 16px",
      fontWeight: "600",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    formContainer: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      width: "90%",
      maxWidth: "420px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      textAlign: "left",
    },
    formTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#004080",
      marginBottom: "1rem",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
    },
    submitBtn: {
      width: "100%",
      backgroundColor: "#004080",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "6px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    closeBtn: {
      background: "transparent",
      color: "#004080",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
      textAlign: "center",
      display: "block",
      width: "100%",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment form submitted successfully!");
    setShowForm(false);
  };

  const handleHover = (e, isHovering) => {
    const card = e.currentTarget;
    const img = card.querySelector("img");
    if (isHovering) {
      card.style.transform = "translateY(-8px)";
      card.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
      img.style.transform = "scale(1.08)";
    } else {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
      img.style.transform = "scale(1)";
    }
  };

  return (
    <>
      {/* Course Card */}
      <div
        style={styles.card}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
        className="card"
      >
        <div style={styles.imageWrapper}>
          <img src={course.image} alt={course.title} style={styles.image} />
        </div>

        <div style={styles.content}>
          <h3 style={styles.title}>{course.title}</h3>
          <p style={styles.description}>{course.description}</p>
          <div style={styles.footer}>
            <button
              style={styles.button}
              onClick={() => setShowForm(true)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#00264d")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#004080")}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Enrollment Form Modal */}
      {showForm && (
        <div style={styles.overlay}>
          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Enroll in {course.title}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                style={styles.input}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                style={styles.input}
              />
              <textarea
                placeholder="Your Message (optional)"
                rows="3"
                style={styles.input}
              />
              <button type="submit" style={styles.submitBtn}>
                Submit
              </button>
              <button
                type="button"
                style={styles.closeBtn}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
