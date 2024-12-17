import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"
import { UserProvider } from "./contexts/UserContext"
import { PostsProvider } from "./contexts/PostsContext"
export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <PostsProvider>
         <Router />
        </PostsProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

