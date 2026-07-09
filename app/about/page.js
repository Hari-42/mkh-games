export const metadata = {
  title: "About | MKH-GAMES",
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-24 lg:px-8">
      <div className="mb-10 text-center">
        <p className="mb-4 font-pixel text-xs glow-teal">ABOUT THE DEV</p>
        <h1 className="font-pixel text-2xl leading-relaxed text-white sm:text-3xl">
          WELCOME TO <span className="glow-coral">MKH-GAMES</span>
        </h1>
      </div>

      <div className="pixel-box bg-[var(--bg-soft)] p-8">
        <p className="text-lg leading-relaxed text-[var(--lav)]">
          Hi, I&apos;m <span className="glow-amber">Hari!</span> I create games, and I
          make them for free because I love sharing my passion with everyone. Making
          games is my way of unleashing my creativity, letting ideas flow, and turning
          them into something people can enjoy. Each game is a unique journey where I
          experiment, innovate, and just have fun. It&apos;s about bringing joy to others
          while doing something I genuinely love. So, if you&apos;re curious, dive into my
          world of free games. There&apos;s always something exciting waiting for you!
        </p>
      </div>
    </div>
  );
}
