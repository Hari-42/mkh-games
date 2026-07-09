import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="text-2xl font-black tracking-tight text-white">
              MKH<span className="gradient-text">-GAMES</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Free indie games made with passion.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Pages
            </h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/games" className="transition hover:text-white">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/story" className="transition hover:text-white">
                  Story
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://harigamesdev.itch.io/"
                  className="transition hover:text-white"
                >
                  itch.io
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Socials
            </h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://discord.gg/mjNcZFHnf5"
                  className="transition hover:text-white"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Hari-42"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <span className="text-sm text-gray-500">
            © 2025 MKH-GAMES. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
