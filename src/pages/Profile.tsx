import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { GithubLogo } from "phosphor-react"
export const Profile = () => {
  return(
    <div>
      <Card className="flex items-center">
        <CardHeader>
          <Avatar className="w-36 h-36 rounded-lg">
          <AvatarImage src="https://github.com/alanwengrze.png" alt="@alanwengrze" />
          <AvatarFallback>AW</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle>Alan Wengrze</CardTitle>
          <CardDescription>Desenvolvedor Fullstack</CardDescription>
          <CardFooter className="p-0">
            <div className="flex items-center gap-1">
              <GithubLogo size={24} />
              <a 
                href="https://github.com/alanwengrze" target="_blank" rel="noreferrer"
              >
                
                <span>alanwengrze</span>
              </a>
            </div>
          </CardFooter>
        </CardContent>
        
      </Card>
    </div>
  )
}