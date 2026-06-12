import axios from "axios";

const API_URL = "http://localhost:3000/api";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function getAllPosts() {
  try {
    const response = await axios.get(
      `${API_URL}/allposts`,
      getAuthConfig()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostByPostId(id) {
  try {
    const response = await axios.get(
      `${API_URL}/posts/${id}`,
      getAuthConfig()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostByUser() {
  try {
    const response = await axios.get(
      `${API_URL}/postByUser`,
      getAuthConfig()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function savePost(caption, file) {
  try {
    const formData = new FormData();

    formData.append("caption", caption);
    formData.append("img", file);

    const response = await axios.post(
      `${API_URL}/post`,
      formData,
      {
        headers: {
          ...getAuthConfig().headers,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}