import React, { useState } from "react";

const courses = [
  {
    title: "B.E. in Computer Science and Engineering",
    duration: "4 Years",
    intake: "120 Students",
    description:
      "Focuses on algorithms, programming, machine learning, AI, data structures, software development, and cloud technologies. Prepares students for careers in tech companies and startups.",
  },
  {
    title: "B.E. in Mechanical Engineering",
    duration: "4 Years",
    intake: "120 Students",
    description:
      "Covers mechanics, thermodynamics, CAD/CAM, robotics, manufacturing, and design. Graduates work in automotive, aerospace, energy, and product design sectors.",
  },
  {
    title: "B.E. in Civil Engineering",
    duration: "4 Years",
    intake: "60 Students",
    description:
      "Includes structural design, construction materials, transportation, geotechnics, and sustainable infrastructure. Graduates build and maintain physical infrastructure of society.",
  },
  {
    title: "B.E. in Electronics and Telecommunication",
    duration: "4 Years",
    intake: "60 Students",
    description:
      "Focuses on circuits, embedded systems, wireless communication, VLSI, IoT, and digital signal processing. Ideal for careers in telecom, embedded, and electronics industries.",
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="page" style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Courses Offered</h1>
        <p style={styles.subtitle}>
          D. Y. Patil College of Engineering and Technology offers a variety of
          undergraduate engineering programs tailored for the modern industry.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="card-container" style={styles.cardContainer}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            className="card"
          >
            <div style={styles.cardHeader}>
              <div style={styles.iconCircle}>{index + 1}</div>
              <h3 style={styles.courseTitle}>{course.title}</h3>
            </div>
            <p style={styles.meta}>
              <strong>Duration:</strong> {course.duration} |{" "}
              <strong>Intake:</strong> {course.intake}
            </p>
            <p style={styles.description}>
              {course.description.substring(0, 120)}...
            </p>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.background = "#003060")}
              onMouseLeave={(e) => (e.target.style.background = "#004080")}
              onClick={() => setSelectedCourse(course)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCourse && (
        <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div
            style={styles.modal}
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent background close
          >
            <h2 style={styles.modalTitle}>{selectedCourse.title}</h2>
            <p style={styles.modalMeta}>
              <strong>Duration:</strong> {selectedCourse.duration} |{" "}
              <strong>Intake:</strong> {selectedCourse.intake}
            </p>
            <p style={styles.modalDesc}>{selectedCourse.description}</p>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Hover animation
const handleHover = (e, isHovering) => {
  const card = e.currentTarget;
  if (isHovering) {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
  } else {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.08)";
  }
};

// Styles
const styles = {
  page: {
    padding: "4rem 2rem",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg, #f0f4f8 0%, #e8eef6 100%)",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "3.5rem",
    maxWidth: "800px",
    marginInline: "auto",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#003366",
    marginBottom: "0.8rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    justifyItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "14px",
    width: "100%",
    maxWidth: "350px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "0.6rem",
  },
  iconCircle: {
    background: "#004080",
    color: "#fff",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1rem",
  },
  courseTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#004080",
    margin: 0,
  },
  meta: {
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "#004080",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    letterSpacing: "0.3px",
    transition: "background 0.3s ease",
  },

  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    animation: "fadeIn 0.3s ease",
  },
  modalTitle: {
    color: "#003366",
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  modalMeta: {
    color: "#666",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  modalDesc: {
    color: "#333",
    lineHeight: "1.6",
    fontSize: "1rem",
  },
  closeButton: {
    marginTop: "1.5rem",
    backgroundColor: "#004080",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Courses;
