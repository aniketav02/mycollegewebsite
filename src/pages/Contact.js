import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="page contact-card" style={styles.page}>
      <div style={styles.card} className="contact-card-inner">
        <h1 style={styles.title}>Contact Us</h1>

        <p style={styles.info}>
          <strong>🏫 Address:</strong> D. Y. Patil Education Complex, Kasaba Bawada, Kolhapur - 416006, Maharashtra
        </p>
        <p style={styles.info}>
          <strong>📞 Phone:</strong> +91 123456789
        </p>
        <p style={styles.info}>
          <strong>📧 Email:</strong>{" "}
          <a href="mailto:info.dypcet@dypgroup.edu.in" style={styles.emailLink}>
            info.dypcet@dypgroup.edu.in
          </a>
        </p>

        <h3 style={styles.socialTitle}>Follow us on:</h3>
        <div style={styles.socials} className="socials">
          <a href="https://www.facebook.com/dypcetkolhapur/" target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, backgroundColor: "#3b5998" }}>
            <FaFacebookF style={{ marginRight: "8px" }} /> Facebook
          </a>
          <a href="https://www.instagram.com/dypcet_official/" target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, backgroundColor: "#C13584" }}>
            <FaInstagram style={{ marginRight: "8px" }} /> Instagram
          </a>
          <a href="https://in.linkedin.com/school/d.-y.-patil-college-of-engineering-&-technology-kasaba-bawada/" target="_blank" rel="noopener noreferrer" style={{ ...styles.socialLink, backgroundColor: "#0077b5" }}>
            <FaLinkedinIn style={{ marginRight: "8px" }} /> LinkedIn
          </a>
          <a href="mailto:info.dypcet@dypgroup.edu.in" style={{ ...styles.socialLink, backgroundColor: "#004080" }}>
            <FaEnvelope style={{ marginRight: "8px" }} /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    padding: "4rem 1rem",
    background: "url('https://images.unsplash.com/photo-1596495577886-d920f1e4a0f0?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "3rem 2.5rem",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    color: "#004080",
    textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
  },
  info: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    color: "#070000ff",
    lineHeight: "1.6",
  },
  emailLink: {
    color: "#FFD700",
    textDecoration: "underline",
    transition: "color 0.3s ease",
  },
  socialTitle: {
    marginTop: "2rem",
    fontSize: "1.5rem",
    color: "#004080",
    textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "1rem",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.6rem 1.5rem",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "1rem",
    color: "white",
    textDecoration: "none",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
};

export default Contact;
