"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header () {

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Posts",
      href: "/posts/1",
    },
  ]

  const pathname = usePathname()
  return(
    <header className="sticky top-0 flex items-center justify-center px-8 py-4">
      <nav className="flex items-center justify-center gap-4 font-extralight">
        {
          navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm p-2 ${
                pathname === link.href ? "outline rounded-sm bg-background/80 transform scale-105 duration-300" : ""
              }`}
            >
              {link.name}
            </Link>
          ))
        }
      </nav>
      {/* <ThemeToggle /> */}
    </header>
  )
}