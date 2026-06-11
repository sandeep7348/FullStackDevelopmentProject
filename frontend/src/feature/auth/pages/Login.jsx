import React, { useState } from "react";
import axios from "axios";
import "../../style/form.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      setSuccess("Login successful!");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    }
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {error && (
          <p className="form-error">
            {error}
          </p>
        )}

        {success && (
          <p className="form-success">
            {success}
          </p>
        )}

        <p>
          Don't have an account?{" "}
          <Link to="/register" className="form-link">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};