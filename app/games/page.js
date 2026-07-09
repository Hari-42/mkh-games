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
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          My <span className="gradient-text">Games</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-gray-400">
          Every title is free to play on itch.io. Pick one and dive in.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <a
            key={game.title}
            href={game.href}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className="overflow-hidden">
              <Image
                src={game.icon}
                alt={game.title}
                width={400}
                height={192}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-white">{game.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{game.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-transparent opacity-0 transition group-hover:opacity-100 [background-image:linear-gradient(120deg,var(--accent-from),var(--accent-to))] [-webkit-background-clip:text] [background-clip:text]">
                Play on itch.io →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
