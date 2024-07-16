import { LinkBadge } from "@/components/link-badge"

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
        <LinkBadge aria-label="Convexte" href="https://convexte.cesarslv.com/">
          Convexte
        </LinkBadge>
        . I also work as a full stack developer at{" "}
        <LinkBadge aria-label="Convexte" href="https://vilaapps.com.br/">
          Vila Apps
        </LinkBadge>
        .
      </p>
    </div>
  )
}
