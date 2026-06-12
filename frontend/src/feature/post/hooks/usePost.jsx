import {useContext} from "react"
import { PostContext } from "../post.context"

export function useAuth(){
    const context=useContext(PostContext)
    return context
}