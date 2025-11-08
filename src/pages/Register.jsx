import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ login }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Basic email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password strength checker (very basic example)
  const passwordStrength = (password) => {
    if (password.length < 6) return "Too short";
    if (/[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      return "Strong";
    }
    if (/[A-Z]/.test(password) || /\d/.test(password)) {
      return "Medium";
    }
    return "Weak";
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Full Name is required.");
      return false;
    }
    if (!form.email.trim()) {
      setError("Email is required.");
      return false;
    }
    if (!emailRegex.test(form.email)) {
      setError("Invalid email format.");
      return false;
    }
    if (!form.password) {
      setError("Password is required.");
      return false;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);

    // Simulate async registration call
    try {
      await new Promise((res) => setTimeout(res, 1500)); // simulate delay
      login({ name: form.name, email: form.email });
      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const pwdStrength = passwordStrength(form.password);

  return (
    <section aria-labelledby="register-title" style={styles.container}>
      <h2 id="register-title" style={{ marginBottom: "1rem" }}>
        Create an Account
      </h2>
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <label htmlFor="name" style={styles.label}>
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          aria-required="true"
          aria-invalid={!!error && !form.name}
          disabled={loading}
        />

        <label htmlFor="email" style={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          aria-required="true"
          aria-invalid={!!error && (!form.email || !emailRegex.test(form.email))}
          disabled={loading}
        />

        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          aria-required="true"
          aria-describedby="password-strength"
          disabled={loading}
          minLength={6}
        />
        {form.password && (
          <small
            id="password-strength"
            style={{
              color:
                pwdStrength === "Strong"
                  ? "green"
                  : pwdStrength === "Medium"
                  ? "orange"
                  : "red",
            }}
          >
            Password Strength: {pwdStrength}
          </small>
        )}

        <label htmlFor="confirmPassword" style={styles.label}>
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          style={styles.input}
          aria-required="true"
          aria-invalid={!!error && form.password !== form.confirmPassword}
          disabled={loading}
          minLength={6}
        />

        {error && (
          <p role="alert" style={styles.error}>
            {error}
          </p>
        )}
        {success && (
          <p role="status" style={styles.success}>
            {success}
          </p>
        )}

        <button type="submit" style={styles.btn} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account?{" "}
        <span
          style={styles.link}
          onClick={() => navigate("/login")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/login");
          }}
        >
          Login here
        </span>
      </p>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: "420px",
    margin: "3rem auto",
    padding: "2.5rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    textAlign: "left",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    fontWeight: "600",
    marginBottom: "0.25rem",
    color: "#222",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1.8px solid #ccc",
    outlineColor: "#004080",
    transition: "border-color 0.3s ease",
  },
  btn: {
    padding: "0.9rem",
    fontSize: "1.15rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#004080",
    color: "white",
    cursor: "pointer",
    fontWeight: "700",
    marginTop: "0.5rem",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "#b00020",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  success: {
    color: "#2e7d32",
    fontSize: "0.95rem",
    fontWeight: "600",
  },
  link: {
    color: "#004080",
    fontWeight: "700",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Register;
