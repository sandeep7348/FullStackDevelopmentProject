import { createContext, useState, useEffect } from "react";
import { login, register, getProfile } from "./services/auth.api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlelogin = async (email, password) => {
    setLoading(true);

    try {
      const response = await login(email, password);

      console.log("Login Success:", response);

      setUser(response.user);

      localStorage.setItem(
        "userId",
        response.user.id
      );

      return response;
    } catch (err) {
      console.error("Login Error:", err);
      console.error("Response Data:", err.response?.data);

      alert(
        JSON.stringify(
          err.response?.data || err.message,
          null,
          2
        )
      );

      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleregister = async (
    username,
    email,
    password
  ) => {
    setLoading(true);

    try {
      const response = await register(
        username,
        email,
        password
      );

      setUser(response.user);

      return response;
    } catch (err) {
      console.error("Register Error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async (id) => {
    try {
      const profile = await getProfile(id);
      setUser(profile.user || profile);
    } catch (err) {
      console.error("Profile Error:", err);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetchProfile(userId);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handlelogin,
        handleregister,
        fetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}