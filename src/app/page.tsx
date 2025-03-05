import { PostCard } from "@/components/post-card";
import { PostHeader } from "@/components/post-header";



export default function Home() {
  return (
    <div className="max-w-3xl flex flex-col gap-4 mx-auto border/75  rounded-sm pt-8">
      <PostHeader />
      <PostCard />
    </div>
  );
}