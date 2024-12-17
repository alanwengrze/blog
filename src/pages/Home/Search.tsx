import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {Input} from "@/components/ui/input"
import { usePosts } from "@/contexts/PostsContext"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export const Search = () => {
  const { getPosts, posts } = usePosts();
  const {
    register,
    handleSubmit,
    watch
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }
  watch("query");
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">Publicações</h2>
        <span className="text-sm text-gray-400">{posts.length} publicações</span>
      </div>
      <form 
        onSubmit={handleSubmit(handleSearchPosts)}
        className="mb-12"
      >
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </div>
    
  )
}