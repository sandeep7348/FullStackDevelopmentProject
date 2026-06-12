import {createContext,useState,useEffect} from "react"
import {getAllPosts,getPostByPostId,getPostByUser,savePost} from "./services/post.api"

export const PostContext=createContext()
export function PostProvider({children})
{
    const [post,setPost]=useState(null)
    const [loading,setLoading]=useState(false)
    const handleAllPost=async ()=>{
        setLoading(true)
        try{
            const response=await getAllPosts()
            setPost(response.posts)
            return response;
        }
        catch(error)
        {    console.log("Fetch post error",error)
             throw error;
        }
        finally{
            setLoading(false)
        }
    }
    const handlePostByPostId=async(postId)=>{
        setLoading(true)
        try{
            const response=await getPostByPostId(postId)
            setPost(response.post)
            return response
        }
        catch(error)
        {
            console.log("Error in Fetching Post",error)
            throw error
        }
        finally{
            setLoading(false)
        }
    }
    const handleGetPostByUser=async()=>{
        setLoading(true)
               try{
            const response=await getPostByUser()
            setPost(response.posts)
            return response
        }
        catch(error)
        {
            console.log("Error in Fetching Post",error)
            throw error
        }
        finally{
            setLoading(false)
        }

    }
    const handleSavePost=async(caption,file)=>{
        setLoading(true)
        try{
            const response=await savePost(caption,file)
            setPost(response.savedPost)
            return response
        }
        catch(error)
        {
            console.log("Error in saving the post",error)
            throw error
        }
        finally{
            setLoading(false)
        }
    }
    return (
    <PostContext.Provider
        value={{
            post,
            loading,
            handleAllPost,
            handlePostByPostId,
            handleGetPostByUser,
            handleSavePost
        }}
    >
        {children}
    </PostContext.Provider>
);
}