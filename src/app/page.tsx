import { LinkBadge } from "@/components/link-badge"

export default function HomePage() {
  return (
    <div className="mt-6 grid space-y-2">
      <h2 className="font-semibold">about</h2>
      <p>
        I&apos;m Cesar, building things for the web and mobile devices. I like
        working on open source projects, playing video games and playing beach
        volleyball.
      </p>
      <h2 className="pt-6 font-semibold">now</h2>
      <p>
        {/* I&apos;m currently building an open source lead management platform
        called{" "}
        <LinkBadge aria-label="Convexte" href="https://convexte.cesarslv.com/">
          Convexte
        </LinkBadge>
        .    */}
        I&apos;m currently work as a full stack developer at{" "}
        <LinkBadge aria-label="Convexte" href="https://vilaapps.com.br/">
          Vila Apps
        </LinkBadge>
        .
      </p>
    </div>
  )
}
