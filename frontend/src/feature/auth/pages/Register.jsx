import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const userData = {
        username,
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData,{withCredentials:true}
      );

      console.log(response.data);

      setSuccess("Registration successful!");

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("REGISTER ERROR:", error);

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
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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

          <button type="submit">Register</button>
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
          Already have an account?{" "}
          <Link to="/login" className="form-link">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};