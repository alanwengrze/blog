import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { GithubLogo, ArrowSquareOut } from "phosphor-react"

import { useUser } from "@/contexts/UserContext"

export const Profile = () => {
  const { user } = useUser();

  return(
    <div>
      <Card className="flex items-center">
        <CardHeader>
          <Avatar className="w-36 h-36 rounded-lg">
          <AvatarImage src={user.avatar_url} alt="@alanwengrze" />
          <AvatarFallback>AW</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between"> 
            <CardTitle>Alan Wengrze</CardTitle>
            <a 
              href={user.html_url} target="_blank" rel="noreferrer"
              className="flex items-center gap-1 text-sky-950"
            >
             GITHUB <ArrowSquareOut size={20} /></a>
          </div>
          
          <CardDescription>{user.bio}</CardDescription>
          <CardFooter className="p-0">
            <div className="flex items-center gap-1">
              <GithubLogo size={20} />
              <span>{user.name}</span>
            </div>
          </CardFooter>
        </CardContent>
        
      </Card>
    </div>
  )
}