import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Computer Science",
    description:
      "Learn programming, algorithms, data structures, and software engineering.",
    image:
      "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Industry-Expert-Guest-lecture-on-Machine-Learning-using-Python.-by-Mr.-Onkar-Mane-ML-Engineer-at-P99Soft-Pvt-Ltd-Pune.jpg",
  },
  {
    id: 2,
    title: "Civil Engineering",
    description:
      "Explore the design, construction, and maintenance of infrastructure including buildings, roads, and bridges.",
    image:
      "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/civil2-scaled.jpg",
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    description:
      "Study mechanics, thermodynamics, and design of mechanical systems.",
    image:
      "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Industry-Visit-to-Kasturi-Foundry.jpg",
  },
  {
    id: 4,
    title: "Electronics & Communication",
    description:
      "Focus on communication systems, microprocessors, and circuits.",
    image:
      "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/3-1-1-1-scaled.jpg",
  },
];

const Home = () => {
  return (
    <div className="page" style={styles.page}>
      {/* Hero Section */}
      <section className="hero" style={styles.hero}>
        <div style={styles.overlay}></div>

        <div className="heroContentOverlay" style={styles.heroContentOverlay}>
          <h1 className="heroTitle" style={styles.heroTitle}>
            Welcome to{" "}
            <span style={styles.collegeName}>D. Y. Patil College</span> of
            Engineering & Technology, Kolhapur
          </h1>
          <p style={styles.heroSubtitle}>
            Empowering students for a better tomorrow through excellence in
            education, research, and innovation.
          </p>
          <button
            style={styles.ctaButton}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            🎓 Explore Courses
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="page content-box" style={styles.coursesSection}>
        <h2 style={styles.sectionTitle}>Our Popular Courses</h2>
        <div className="course-grid" style={styles.courseGrid}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    color: "#222",
    backgroundColor: "#f8fafc",
  },

  hero: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/dypcet.JPG"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  heroContentOverlay: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    color: "#fff",
    padding: "0 20px",
    textShadow: "0 4px 15px rgba(0,0,0,0.4)",
  },

  heroTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px",
  },

  collegeName: {
    color: "#00c4ff",
  },

  heroSubtitle: {
    fontSize: "1.3rem",
    marginBottom: "30px",
    maxWidth: "700px",
    margin: "0 auto 30px auto",
  },

  ctaButton: {
    background: "linear-gradient(90deg, #007ACC, #0098F0)",
    color: "#fff",
    padding: "14px 28px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(0,122,204,0.3)",
  },

  coursesSection: {
    padding: "80px 10%",
    backgroundColor: "#fff",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "2.4rem",
    fontWeight: "700",
    color: "#007ACC",
    marginBottom: "50px",
  },

  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
};

export default Home;
