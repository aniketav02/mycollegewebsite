import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="page" style={styles.page}>
      {/* Hero Section */}
      <div className="hero-section" style={styles.heroSection}>
        <h1 className="heroTitle" style={styles.heroTitle}>About Us</h1>
        <p style={styles.heroSubtitle}>
          Empowering students through excellence in engineering education
        </p>
        <span style={styles.heroOverlay}></span>
      </div>

      {/* About Content Section */}
      <div className="content-box" style={styles.contentBox}>
        <p style={styles.paragraph}>
          <strong>
            D. Y. Patil College of Engineering & Technology, Kasaba Bawada,
            Kolhapur is a self-financing Autonomous Institute established in the
            year 1984 under the visionary leadership of Padmashree Dr. D. Y.
            Patil, Former Governor of Tripura, Bihar and West Bengal.
          </strong>
          UGC, New Delhi and Shivaji University, Kolhapur has conferred
          Autonomous status to the Institute in 2020. The Institution is
          approved by All India Council for Technical Education (AICTE), New
          Delhi, Government of Maharashtra and affiliated to Shivaji University,
          Kolhapur. The Institute is accredited by National Assessment and
          Accreditation Council (NAAC), Bangalore with ‘A’ grade (CGPA- 3.08).
          The Institute has been offering quality technical education for the
          past 41 years. The Institute offers eight UG programmes and two PG
          programmes. Two departments of this Institution are recognized as
          research centres by Shivaji University, Kolhapur for promoting research
          culture in the Institute. Architecture department of the Institute is
          ranked amongst the top 13 Architecture Colleges in India by Outlook
          India and ranked 21st by India Today in 2021. Three UG programmes viz.,
          B. Tech (Computer Science and Engineering), B. Tech. (Electronics &amp;
          Telecommunication Engineering) and B. Tech. (Mechanical Engineering)
          is re-accredited by National Board of Accreditation (NBA), New Delhi
          for a period of three years from 2022 to 2025.
        </p>

        <h2 style={styles.heading}>Our Vision & Mission</h2>
        <p style={styles.paragraph}>
          Our mission is{" "}
          <em>empower students with knowledge, skills, and values</em> to lead
          and innovate in a global society. We focus on holistic development
          through state-of-the-art infrastructure, experienced faculty, and
          industry-integrated learning.
        </p>

        <h2 style={styles.heading}>Salient Features of Our Institute</h2>
        <ul style={styles.list}>
          {features.map((feature, index) => (
            <li key={index} style={styles.listItem}>
              <FaCheckCircle style={styles.icon} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const features = [
  "State of the art infrastructure",
  "Wi-Fi enabled campus",
  "Laboratories equipped with latest technologies",
  "24 hours Internet connectivity",
  "Industry-backed NEP 2020 Curriculum",
  "MoUs with reputed Industries and Academic Institutes",
  "Excellent Placement Record",
  "10000+ Worldwide Alumni network",
  "Annual Student Festivals and a vibrant Campus Life",
  "Bus facility available",
  "All Govt. Scholarships available to students",
  "Professional Chapters and Clubs",
  "Finishing School Trainings",
  "Social Internships",
  "Dedicated Professional Internship track of 6 months",
  "Industry visits and industry expert interaction",
  "Capstone projects",
];

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  heroSection: {
    position: "relative",
    background:
      "url('https://images.unsplash.com/photo-1581090700227-1e8e5fba2f1f?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    color: "white",
    padding: "6rem 2rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 0,
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
    zIndex: 1,
    position: "relative",
  },
  heroSubtitle: {
    fontSize: "1.3rem",
    fontWeight: 300,
    zIndex: 1,
    position: "relative",
  },
  contentBox: {
    backgroundColor: "white",
    margin: "2rem auto",
    padding: "3rem",
    maxWidth: "950px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    animation: "fadeIn 1s ease",
  },
  heading: {
    fontSize: "1.6rem",
    color: "#004080",
    marginTop: "2rem",
    marginBottom: "1rem",
    borderBottom: "2px solid #004080",
    display: "inline-block",
    paddingBottom: "4px",
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#333",
    marginBottom: "1rem",
  },
  list: {
    marginTop: "1rem",
    paddingLeft: "1.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#444",
    backgroundColor: "#f0f4f8",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  icon: {
    color: "#28a745",
    marginRight: "10px",
    flexShrink: 0,
  },
};

export default About;
