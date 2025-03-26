import { RadialHome } from "@/components/radial-home";
import PostsPage from "./posts/page";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <>
      <RadialHome />
      <div className=" max-w-3xl flex flex-col gap-4 mx-auto border/75  rounded-sm pt-8">
        <div className="border rounded-md bg-background/80 p-4">
          <h1 className="font-mono text-2xl font-extrabold text-center">
            Blog pessoal
          </h1>
          <p className="font-mono text-sm text-muted-foreground text-center">
            Aqui você encontrará informações sobre:
          </p>
          <ul className="flex flex-col gap-2 items-start">
            <li className="font-mono text-sm text-muted-foreground text-center">
              Desenvolvimento pessoal
            </li>
            <li className="font-mono text-sm text-muted-foreground text-center">
              Desenvolvimento profissional
            </li>
            <li>Livros</li>
          </ul>

        </div>
        <h2>Posts recentes</h2>
        <PostsPage />
      </div>
    </>
  );
}