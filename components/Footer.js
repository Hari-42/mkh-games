import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* thin gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--coral)]/60 to-transparent" />

      <div className="bg-black/50 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:px-8">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            {/* Brand */}
            <div className="max-w-xs">
              <span className="font-pixel text-sm text-white">
                MKH<span className="text-[var(--coral)]">-GAMES</span>
              </span>
              <p className="mt-4 text-sm leading-relaxed text-[var(--lav)]">
                Indie games, free to play. Built and shared by Hari.
              </p>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <FooterCol title="Explore">
                <FooterLink href="/games" internal>
                  Games
                </FooterLink>
                <FooterLink href="/about" internal>
                  About
                </FooterLink>
                <FooterLink href="/story" internal>
                  Story
                </FooterLink>
              </FooterCol>

              <FooterCol title="Play">
                <FooterLink href="https://harigamesdev.itch.io/">itch.io</FooterLink>
              </FooterCol>

              <FooterCol title="Connect">
                <FooterLink href="https://discord.gg/mjNcZFHnf5">Discord</FooterLink>
                <FooterLink href="https://github.com/Hari-42">GitHub</FooterLink>
              </FooterCol>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center">
            <span className="text-xs text-[var(--lav)]">
              © 2026 MKH-GAMES. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
        {title}
      </h2>
      <ul className="space-y-3 text-sm text-[var(--lav)]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, internal, children }) {
  const cls = "transition-colors hover:text-[var(--coral)]";
  return (
    <li>
      {internal ? (
        <Link href={href} className={cls}>
          {children}
        </Link>
      ) : (
        <a href={href} className={cls}>
          {children}
        </a>
      )}
    </li>
  );
}
