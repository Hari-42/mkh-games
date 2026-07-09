import Image from "next/image";

export const metadata = {
  title: "Games | MKH-GAMES",
};

const games = [
  {
    href: "https://harigamesdev.itch.io/super-flexagon",
    icon: "/gameicons/game1.png",
    title: "SUPER-FLEXAGON",
    description: "A Game where you have to survive by moving the ball.",
  },
  {
    href: "https://harigamesdev.itch.io/mega-shooter",
    icon: "/gameicons/game2.png",
    title: "MEGA-SHOOTER",
    description: "A Game where you have to shoot the balls.",
  },
  {
    href: "https://harigamesdev.itch.io/azteroids",
    icon: "/gameicons/game3.png",
    title: "AZTEROIDS",
    description: "A Game where you have to shoot the Asteroids.",
  },
  {
    href: "https://harigamesdev.itch.io/melsius",
    icon: "/gameicons/game4.png",
    title: "MELSIUS",
    description: "The first character in the MKH-UNIVERSE.",
  },
  {
    href: "https://harigamesdev.itch.io/atomic-shooter",
    icon: "/gameicons/game5.png",
    title: "ATOMIC SHOOTER",
    description: "A Game which was made within an hour",
  },
  {
    href: "https://harigamesdev.itch.io/ghost-of-uldur",
    icon: "/gameicons/game6.png",
    title: "GHOST OF ULDUR",
    description: "The second character in the MKH-UNIVERSE.",
  },
  {
    href: "https://harigamesdev.itch.io/tero-beta",
    icon: "/gameicons/game7.png",
    title: "TERO",
    description: "The third character in the MKH-UNIVERSE.",
  },
  {
    href: "https://harigamesdev.itch.io/santa-frost",
    icon: "/gameicons/game8.png",
    title: "SANTA-FROST",
    description: "The fourth character in the MKH-UNIVERSE.",
  },
  {
    href: "https://harigamesdev.itch.io/the-doors-of-alcorus",
    icon: "/gameicons/game9.png",
    title: "THE DOORS OF ALCORUS",
    description: "A Realm where some doors lead to different Dimensions.",
  },
];

export default function Games() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-8">
      <div className="mb-16 text-center">
        <p className="mb-4 font-pixel text-xs glow-teal">SELECT YOUR GAME</p>
        <h1 className="font-pixel text-3xl text-[var(--text)] sm:text-4xl">
          MY <span className="glow-coral">GAMES</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <a
            key={game.title}
            href={game.href}
            className="pixel-box group relative block overflow-hidden bg-[var(--bg-soft)] transition-transform duration-150 hover:-translate-y-1 hover:translate-x-[-1px]"
          >
            <div className="overflow-hidden border-b-2 border-[var(--coral)]">
              <Image
                src={game.icon}
                alt={game.title}
                width={400}
                height={192}
                className="h-44 w-full object-cover [image-rendering:pixelated] transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="font-pixel text-[0.7rem] leading-relaxed glow-amber">
                {game.title}
              </h3>
              <p className="mt-3 text-base leading-snug text-[var(--lav)]">
                {game.description}
              </p>
              <span className="mt-3 block font-pixel text-[0.6rem] text-[var(--teal)] opacity-0 transition group-hover:opacity-100">
                &gt; PLAY
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
