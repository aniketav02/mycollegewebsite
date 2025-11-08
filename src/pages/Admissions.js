import React from "react";
import { motion } from "framer-motion";

const Admissions = () => {
  const handleApplyClick = () => {
    window.location.href = "/enroll"; // redirect to form page
  };

  return (
    <div className="page admissions-wrapper" style={styles.page}>
      <motion.div
        style={styles.wrapper}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <header style={styles.header}>
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            🎓 Admissions
          </motion.h1>
          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join{" "}
            <strong>
              D. Y. Patil College of Engineering and Technology
            </strong>{" "}
            and begin your journey toward a successful engineering career.
          </motion.p>
        </header>

        {/* Eligibility Section */}
        <motion.section
          style={styles.card}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 style={styles.sectionTitle}>📋 Eligibility Criteria</h3>
          <ul style={styles.list}>
            <li>✅ Passed 10+2 with Physics, Chemistry, and Mathematics</li>
            <li>✅ Qualified in MHT-CET or JEE Main</li>
          </ul>
        </motion.section>

        {/* Process Section */}
        <motion.section
          style={styles.card}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 style={styles.sectionTitle}>📝 Admission Process</h3>
          <ol style={styles.list}>
            <li>🖊️ Fill the <strong>online application form</strong></li>
            <li>📄 Submit required <strong>documents</strong></li>
            <li>🎯 Appear for <strong>counseling</strong></li>
            <li>💳 Pay <strong>admission fees</strong> to confirm your seat</li>
          </ol>
        </motion.section>

        {/* Apply Button */}
        <div style={styles.buttonContainer}>
          <motion.button
            style={styles.applyButton}
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(90deg, #003366, #0066cc)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={handleApplyClick}
          >
            🚀 Apply Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// Styling
const styles = {
  page: {
    background: "linear-gradient(120deg, #e3f2fd 0%, #bbdefb 100%)",
    minHeight: "100vh",
    padding: "3rem 1rem",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
    padding: "3rem",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    boxShadow: "0 15px 45px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  title: {
    fontSize: "3rem",
    color: "#003366",
    marginBottom: "0.6rem",
    fontWeight: "800",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#444",
    maxWidth: "650px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  sectionTitle: {
    color: "#004080",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    borderLeft: "6px solid #004080",
    paddingLeft: "12px",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fdfdfd",
    padding: "2rem",
    borderRadius: "12px",
    marginBottom: "2rem",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.05)",
  },
  list: {
    fontSize: "1rem",
    color: "#333",
    lineHeight: 1.8,
    paddingLeft: "1.2rem",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "2.5rem",
  },
  applyButton: {
    background:
      "linear-gradient(90deg, #004080, #0059b3)",
    color: "white",
    border: "none",
    padding: "1rem 2.5rem",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "700",
    boxShadow: "0 4px 20px rgba(0,64,128,0.3)",
  },
};

export default Admissions;
