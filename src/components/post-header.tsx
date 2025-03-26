import { Icons } from "./icons";
import { RadialCard } from "./radial-card";

export function PostHeader(){
  return(
    <div className="w-full h-96 relative mx-auto overflow-hidden rounded-sm noise">
      <RadialCard />
      <div className="relative w-full h-full flex items-center justify-center">
        <h1 className="font-mono text-2xl font-extrabold">Titulo do post</h1>
        <div className="absolute bottom-4 right-4">
         <div className="flex flex-col gap-2 items-end">
          <p className="flex items-center gap-2 text-xs"><Icons.heart height={16} width={16}/> 1</p>
          <p className="flex items-center gap-2 text-xs"><Icons.comment height={16} width={16}/> 1</p>
          <span className="text-xs text-muted-foreground">Publicado há 1 dia</span>
         </div>
        </div>
      </div>
     
    </div>
  )
}