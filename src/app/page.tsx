import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="prose prose-zinc dark:prose-invert container mt-6 grid max-w-3xl space-y-4">
      <h2 className="text-md font-semibold">about</h2>
      <p>
        I&apos;m Cesar, building things for the web and mobile devices. I like
        working on open source projects, playing video games and playing beach
        volleyball.
      </p>
      <h2 className="text-md font-semibold">now</h2>
      <p>
        I&apos;m currently building an open source lead management platform
        called{" "}
        <Link
          href="https://convexte.cesarslv.com/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "px-0 font-semibold"
          )}
        >
          Convexte
        </Link>
        . I also work as a full stack developer at{" "}
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "px-0 font-semibold"
          )}
          href="https://www.vilaapps.com.br/"
        >
          VilaApps
        </Link>
        .
      </p>
    </div>
  )
}
