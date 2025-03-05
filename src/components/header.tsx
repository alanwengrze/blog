import { ThemeToggle } from "./theme-toggle"

export function Header () {
  return(
    <header className="flex items-center justify-center px-8 py-4 noise">
      <nav className="flex items-center justify-center gap-2">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Posts</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}