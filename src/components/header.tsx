import Link from "next/link"

import { siteConfig } from "@/lib/config"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="w-full bg-background">
      <div className="flex h-16 items-center justify-between">
        <h1 className="flex flex-col">
          <span className="font-bold">{siteConfig.name}</span>
          <span>developer</span>
        </h1>
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="size-7" asChild>
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
