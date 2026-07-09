import Image from "next/image";
import Link from "next/link";
import Globe from "@/components/Globe";

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
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center">
        {/* Large globe, centered behind the content */}
        <Globe className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(88vh,95vw)] w-[min(88vh,95vw)] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-8 font-pixel text-base glow-teal sm:text-xl">READY PLAYER 1</p>
          <h1 className="font-pixel text-5xl leading-tight text-[var(--text)] sm:text-7xl lg:text-8xl [text-shadow:0_2px_18px_rgba(0,0,0,0.9)]">
            MKH
            <span className="glow-coral">-GAMES</span>
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            <Link href="/games" className="btn-retro">
              Press Start
            </Link>
            <a href="https://harigamesdev.itch.io/" className="btn-retro alt">
              itch.io
            </a>
          </div>
          <p className="mt-16 font-pixel text-xs text-[var(--lav)] sm:text-sm">
            <span className="blink">▮</span> INSERT COIN
          </p>
        </div>
      </section>

      {/* Featured gallery */}
      <section className="grid grid-cols-1 gap-6 pb-28 md:grid-cols-3">
        {featured.map((item) => (
          <div
            key={item.alt}
            className={`pixel-box group relative overflow-hidden ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={500}
              className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
            <span className="absolute bottom-4 left-5 font-pixel text-sm text-white">
              {item.alt}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
