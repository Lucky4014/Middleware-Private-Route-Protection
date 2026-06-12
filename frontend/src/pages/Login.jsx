import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/public/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError("❌ Invalid username or password!");
      }
    } catch {
      setError("❌ Server error! Backend chal raha hai?");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f2f5"
    }}>
      <div style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "380px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        {/* Heading */}
        <h2 style={{ textAlign: "center", margin: 0, color: "#1a1a2e" }}>
          🔐 Login
        </h2>
        <p style={{ textAlign: "center", color: "#888", margin: 0, fontSize: "14px" }}>
          Apna account access karo
        </p>

        {/* Username */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "600", color: "#333", fontSize: "14px" }}>
            Username
          </label>
          <input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1.5px solid #ddd",
              fontSize: "15px",
              outline: "none"
            }}
          />
        </div>

        {/* Password */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "600", color: "#333", fontSize: "14px" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1.5px solid #ddd",
              fontSize: "15px",
              outline: "none"
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <p style={{
            color: "#e74c3c",
            background: "#fdecea",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "14px",
            margin: 0,
            textAlign: "center"
          }}>
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          style={{
            padding: "12px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "4px"
          }}
        >
          Login →
        </button>

        {/* Hint */}
        <p style={{ textAlign: "center", color: "#aaa", fontSize: "12px", margin: 0 }}>
          Username: <b>admin</b> &nbsp;|&nbsp; Password: <b>password123</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
