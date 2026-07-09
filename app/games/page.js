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
    <div className="pt-12 px-4 lg:px-8 mx-auto w-full max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <a
            key={game.title}
            href={game.href}
            className="block transform transition-transform hover:scale-105"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={game.icon}
                alt={game.title}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{game.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{game.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
