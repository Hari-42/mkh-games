import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-[var(--neon-cyan)] bg-[#0d021f]/80">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-pixel text-sm text-white">
              MKH<span className="neon-pink">-GAMES</span>
            </span>
            <p className="mt-4 text-xl leading-tight text-purple-300">
              Free retro games,<br />built with love.
            </p>
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

        <div className="mt-10 border-t-2 border-purple-500/40 pt-6 text-center">
          <span className="font-pixel text-[0.6rem] text-purple-300">
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
      <h2 className="mb-3 font-pixel text-[0.6rem] uppercase text-[var(--neon-yellow)]">
        {title}
      </h2>
      <ul className="space-y-1 text-xl text-purple-200">{children}</ul>
    </div>
  );
}

function FooterLink({ href, internal, children }) {
  const cls = "transition hover:text-[var(--neon-cyan)]";
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
