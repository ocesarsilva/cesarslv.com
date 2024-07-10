import Link from "next/link"

import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <div className="prose prose-zinc mt-6 grid dark:prose-invert">
      <h2 className="text-sm font-semibold">about</h2>
      <p>
        I&apos;m Cesar, building things for the web and mobile devices. I like
        working on open source projects, playing video games and playing beach
        volleyball.
      </p>
      <h2 className="text-sm font-semibold">now</h2>
      <p>
        I&apos;m currently building an open source lead management platform
        called{" "}
        <Link
          href="https://convexte.cesarslv.com/"
          className={cn(
            "text-md font-semibold underline-offset-4 hover:underline"
          )}
        >
          Convexte
        </Link>
        . I also work as a full stack developer at{" "}
        <Link
          className={cn(
            "text-md font-semibold underline-offset-4 hover:underline"
          )}
          href="https://vilaapps.com.br/"
        >
          VilaApps
        </Link>
        .
      </p>
    </div>
  )
}
