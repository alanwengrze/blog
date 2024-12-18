import { PostCard } from "./PostCard"
import { Profile } from "./Profile"
import { Search } from "./Search"
import {Link} from "react-router-dom"
import { usePosts } from "@/contexts/PostsContext"
import { useEffect } from "react";

export const Home = () => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();

  }, [])

  return (
    <div className="max-w-3xl mx-auto -mt-24 p-4">
      <Profile 
      />
      <Search />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {
          posts.length > 0 &&
          posts.map((post) => {
            return(
              <Link 
                to={`/post/${post.number}`} 
                key={post.number} 
              > 
                <PostCard post={post} />
              </Link>
            )
          })
        }
      </div>
      
    </div>
  )
}