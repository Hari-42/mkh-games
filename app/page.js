import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home | MKH-GAMES",
};

const featured = [
  { src: "/gamepics/superflexagon_1.png", alt: "SUPERFLEXAGON", span: "md:col-span-2" },
  { src: "/gamepics/melsius_1.png", alt: "MELSIUS", span: "md:col-span-1" },
  { src: "/gamepics/tero_1.png", alt: "TERO", span: "md:col-span-3" },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
      {/* Hero */}
      <section className="flex flex-col items-center py-24 text-center sm:py-32">
        <span className="animate-rise mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-300">
          Free indie games by Hari
        </span>
        <h1 className="animate-rise text-6xl font-black tracking-tight text-white sm:text-8xl lg:text-9xl">
          MKH<span className="gradient-text">-GAMES</span>
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-lg text-gray-400">
          A universe of games I build for fun and share with everyone — completely free.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/games"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:scale-105"
          >
            Explore Games
          </Link>
          <a
            href="https://harigamesdev.itch.io/"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View on itch.io
          </a>
        </div>
      </section>

      {/* Featured gallery */}
      <section className="grid grid-cols-1 gap-4 pb-28 md:grid-cols-3">
        {featured.map((item) => (
          <div
            key={item.alt}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={500}
              className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-5 left-6 text-xl font-bold text-white">
              {item.alt}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
