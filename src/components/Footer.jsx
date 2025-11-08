import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.left}>
          <h3 style={styles.brand}>D. Y. Patil College of Engineering & Technology</h3>
          <p style={styles.text}>
            Empowering students with knowledge, innovation, and excellence since 1984.
          </p>
          <p style={styles.approved}>
            Approved by AICTE, DTE - Govt. of Maharashtra & Affiliated to Shivaji University
          </p>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <h4 style={styles.connectTitle}>Connect With Us</h4>
          <div style={styles.socials}>
            <a
              href="https://www.facebook.com/dypcetkolhapur/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/dypcet_official?igsh=MWF2OG16MmF5Z3NubQ=="
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
            >
              <FaInstagram />
            </a>
            <a
              href="https://in.linkedin.com/school/d.-y.-patil-college-of-engineering-&-technology-kasaba-bawada/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:info.dypcet@dypgroup.edu.in" style={styles.iconLink}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>© 2025 DYP Group. All rights reserved.</p>
      
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(135deg, #002b5c, #004b8d)",
    color: "white",
    paddingTop: "2.5rem",
    paddingBottom: "1rem",
    fontFamily: "Arial, sans-serif",
    marginTop: "4rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  left: {
    flex: "1 1 300px",
    marginBottom: "1.5rem",
  },
  brand: {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.95rem",
    color: "#d9e6f2",
    lineHeight: "1.6",
  },
  approved: {
    fontSize: "0.85rem",
    color: "#cce0ff",
    marginTop: "0.5rem",
  },
  right: {
    flex: "1 1 200px",
    textAlign: "right",
  },
  connectTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0.8rem",
  },
  socials: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
  },
  iconLink: {
    backgroundColor: "white",
    color: "#004080",
    fontSize: "1.1rem",
    padding: "8px",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
  bottomBar: {
    marginTop: "1.5rem",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#d9e6f2",
  },
};

export default Footer;
