import { PostContent } from "@/components/post-content";
import { PostHeader } from "@/components/post-header";

export default function PostDetails(){
  return(
    <div className="max-w-3xl flex flex-col gap-4 mx-auto border/75  rounded-sm pt-8">
      <PostHeader />
      <PostContent />
    </div>
  )
}