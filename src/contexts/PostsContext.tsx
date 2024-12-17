import { fetchPosts } from "@/lib/api";
import { createContext, useState, useEffect, useContext } from "react";
export interface Post {
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string
  }
}
interface PostsContextType {
  posts : Post[];
  post: Post;
  getPosts: (query?: string) => Promise<void>;
  getPostById: (id: number) => Promise<void>;
}

interface PostsProviderType {
  children: React.ReactNode;
}

export const PostsContext = createContext<PostsContextType>({} as PostsContextType);

export const PostsProvider = ({children}: PostsProviderType) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState<Post>({} as Post);

  async function getPosts(query?: string) {
    const response = await fetchPosts.get(`/search/issues?q=%20repo:alanwengrze/blog`, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    });
    setPosts(response.data.items);
    if(query){
      const response = await fetchPosts.get(`/search/issues?q=${query}%20repo:alanwengrze/blog`, {
        headers: {
          Accept: "application/vnd.github.v3+json"
        }
      });
      setPosts(response.data.items);
    }
  }

  async function getPostById(id: number) {
    const response = await fetchPosts.get(`/repos/alanwengrze/blog/issues/${id}`, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    })
    setPost(response.data);
  }

  useEffect(() => {
    getPosts();
  }, [])
  return(
    <PostsContext.Provider 
      value={{
        posts,
        getPosts,
        getPostById,
        post
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => {
  const context = useContext(PostsContext);
  return context
}