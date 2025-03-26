"use client"

import { PostContent } from "@/components/post-content";
import { PostHeader } from "@/components/post-header";
export function Post() {
  return(
    <div
      className="w-full h-44 relative mx-auto border/75 rounded-sm overflow-hidden group">
      <div className="w-full h-full border bg-background/80 p-4 rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="font-mono text-sm text-muted-foreground line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque neque voluptates quos dolorum facere impedit laboriosam enim quidem totam saepe magnam corrupti, suscipit dolorem recusandae aliquid blanditiis, placeat qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil eos sit eum similique sed explicabo autem ex porro sapiente minus perspiciatis ullam, odit nisi animi commodi consequatur quisquam voluptate laboriosam!</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-500 group-hover:opacity-0">
        <PostHeader />
      </div>
    </div>
  )
}