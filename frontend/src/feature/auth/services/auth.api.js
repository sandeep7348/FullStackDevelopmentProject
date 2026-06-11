import axios from "axios";

//api layer for backend communication what error has come and ui layer to show error
export async function register(username, email, password) {
    try{
       const response = await axios.post("http://localhost:3000/api/register",{
           username,email,password
       })
       return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function login(email,password){
    try{
      const response=await axios.post("http://localhost:3000/api/login",{email,password})
      return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function getProfile(id){
    try{
        const response=await axios.get(`http://localhost:3000/api/profile/${id}`)
        return response.data

    }
    catch(err){
        throw err
    }
}