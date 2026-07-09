export const metadata = {
  title: "Story | MKH-GAMES",
};

export default function Story() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center lg:px-8">
      <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-300">
        Coming soon
      </span>
      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        The <span className="gradient-text">MKH-Universe</span> story
      </h1>
      <p className="mt-6 max-w-md text-gray-400">
        The lore behind the characters is still being written. Check back soon.
      </p>
    </div>
  );
}
