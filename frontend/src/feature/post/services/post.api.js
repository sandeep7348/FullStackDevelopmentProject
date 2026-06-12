import axios from 'axios'

export async function getAllPosts()
{
      try{
        const response=await axios.get("http://localhost:3000/api/allposts")
        return response.data
      }
      catch(error)
      {
        throw error
      }
}

export async function getPostByPostId(id)
{
    try{
       const response=await axios.get(`http://localhost:3000/api/posts/${id}`)
       return response.data
    }
    catch(error)
    {
        throw error;
    }
}

export async function getPostByUser()
{
    try{
        const response=await axios.get("http://localhost:3000/api/postByUser")
        return response.data
    }
    catch(error)
    {
        throw error;
    }
}


export async function savePost(caption, file) {
    try {
        const formData = new FormData();

        formData.append("caption", caption);
        formData.append("img", file);

        const response = await axios.post(
            "http://localhost:3000/api/post",
            formData
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}