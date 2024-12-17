import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PostUnique } from "../pages/Post";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostUnique />} />
      </Route>
    </Routes>
  )
}