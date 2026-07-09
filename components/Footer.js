import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-[var(--teal)] bg-[#000000]/70">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-pixel text-sm text-white">
              MKH<span className="glow-coral">-GAMES</span>
            </span>
          </div>

          <FooterCol title="Pages">
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

          <FooterCol title="Socials">
            <FooterLink href="https://discord.gg/mjNcZFHnf5">Discord</FooterLink>
            <FooterLink href="https://github.com/Hari-42">GitHub</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-10 border-t border-[var(--lav)]/20 pt-6 text-center">
          <span className="font-pixel text-[0.58rem] text-[var(--lav)]">
            © 2025 MKH-GAMES &mdash; INSERT COIN TO CONTINUE
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h2 className="mb-3 font-pixel text-[0.58rem] uppercase glow-amber">{title}</h2>
      <ul className="space-y-2 text-base text-[var(--lav)]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, internal, children }) {
  const cls = "transition hover:text-[var(--teal)]";
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
