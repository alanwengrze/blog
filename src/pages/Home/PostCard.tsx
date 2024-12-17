import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

import { createdAtFormatted } from "@/lib/formatter";
interface PostCardProps {
  post: {
    title: string;
    body: string;
    created_at: string;
  }
}
export const PostCard = ({ post }: PostCardProps) => {
  return(
    <Card className="mt-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{post.title}</CardTitle>
        <span>{createdAtFormatted(post.created_at)}</span>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-ellipsis line-clamp-3">
          {post.body}
        </CardDescription>
      </CardContent>
    </Card>
  )
}