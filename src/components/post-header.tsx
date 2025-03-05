import { RadialCard } from "./radial-card";

export function PostHeader(){
  return(
    <div className="w-full h-96 relative mx-auto overflow-hidden rounded-sm noise">
      <RadialCard />
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-extrabold">Titulo do post</h1>
      </div>
    </div>
  )
}