
import { Post } from "./post";
export default function PostsPage() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}