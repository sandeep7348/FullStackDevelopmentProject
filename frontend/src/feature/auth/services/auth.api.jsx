import axios from "axios";

// Register User
export async function register(username, email, password) {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/register",
            {
                username,
                email,
                password,
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

// Login User
export async function login(email, password) {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/login",
            {
                email,
                password,
            }
        );

        // Save token
        localStorage.setItem(
            "token",
            response.data.token
        );

        // Save user data
        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

// Get User Profile
export async function getProfile(id) {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
            `http://localhost:3000/api/profile/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

// Logout User
export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}