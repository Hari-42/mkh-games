export const metadata = {
  title: "Story | MKH-GAMES",
};

export default function Story() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center lg:px-8">
      <p className="mb-6 font-pixel text-xs glow-teal blink">● LOADING...</p>
      <h1 className="font-pixel text-2xl leading-relaxed text-[var(--text)] sm:text-3xl">
        THE <span className="glow-coral">MKH-UNIVERSE</span> STORY
      </h1>
      <p className="mt-8 max-w-md text-lg text-[var(--lav)]">
        The lore behind the characters is still being written.
        <br />
        <span className="glow-amber">Check back soon.</span>
      </p>
    </div>
  );
}
