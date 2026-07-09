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
      <section className="flex flex-col items-center py-20 text-center sm:py-28">
        <p className="mb-8 font-pixel text-xs neon-cyan">★ PLAYER 1 READY ★</p>
        <h1 className="font-pixel text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
          MKH
          <span className="neon-pink">-GAMES</span>
        </h1>
        <p className="mt-8 max-w-xl text-2xl text-purple-200">
          A universe of games I build for fun and share with everyone —
          <span className="neon-yellow"> completely free.</span>
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link href="/games" className="btn-retro">
            Press Start
          </Link>
          <a href="https://harigamesdev.itch.io/" className="btn-retro alt">
            itch.io
          </a>
        </div>
        <p className="mt-10 font-pixel text-[0.6rem] text-purple-300">
          <span className="blink">▮</span> INSERT COIN
        </p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d021f] via-transparent to-transparent" />
            <span className="absolute bottom-4 left-5 font-pixel text-sm text-white">
              {item.alt}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
