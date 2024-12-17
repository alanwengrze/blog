import { Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { usePosts } from "@/contexts/PostsContext";
import { ArrowSquareOut, GithubLogo, ArrowLeft, Calendar, ChatCircle } from "phosphor-react"
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createdAtFormatted } from "@/lib/formatter";
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import {duotoneDark, } from "react-syntax-highlighter/dist/esm/styles/prism";

export const PostUnique = () => {
  const { post, getPostById } = usePosts();
  const { id } = useParams();
  const navigate = useNavigate();
  
  async function getPosts(number: number) {
    await getPostById(number);
  }

  function handleBack(){
    navigate(-1);
  }
  
  useEffect(() => {
    getPosts(Number(id));
    
  }, [id])
  return(
    <>
    {
      post.number === Number(id) && (
        <div className="max-w-3xl mx-auto">
          <Card className="-mt-20">
            <CardHeader className="flex flex-row items-center justify-between">
              <button 
                className="flex items-center gap-1 text-sky-950" 
                onClick={handleBack}
              >
                <ArrowLeft size={20}/>
                VOLTAR
              </button>
              <a 
                href={post.html_url} target="_blank" rel="noreferrer"
                className="flex items-center gap-1 text-sky-950"
              >
              VER NO GITHUB <ArrowSquareOut size={20} /></a>
            </CardHeader>
            <CardContent>
            <CardTitle>{post.title}</CardTitle>
              <CardFooter className="p-0 flex gap-8 mt-6">
                <div className="flex items-center gap-1">
                  <GithubLogo size={20} />
                  <span>{post?.user?.login}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={20}/>
                  <span>{post?.created_at && createdAtFormatted(post.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                <ChatCircle size={20}/>
                  <span>{post?.comments} comentários</span>
                </div>
              </CardFooter>
            </CardContent>
          </Card>
          <div className="p-4 text-ellipsis prose-p:my-2">
            <Markdown
              children={post.body}
              components={{
                code({node,  className, children, style, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return  match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={duotoneDark}
                      language={match[1]}
                      PreTag="div"
                      // {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            />
          </div>
        </div>
      )
    }
  </>
  )
}