import Link from "next/link"

import { siteConfig } from "@/lib/config"

import { Icons } from "./icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="w-full bg-background">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center justify-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/ocesarsilva.png" />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
          <h1 className="flex flex-col">
            <span className="font-bold">{siteConfig.name}</span>
            <span>developer</span>
          </h1>
        </div>
        <nav className="flex items-center space-x-1">
          <Button variant="outline" size="icon" asChild>
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
