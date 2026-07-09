import Image from "next/image";

export const metadata = {
  title: "Home | MKH-GAMES",
};

export default function Home() {
  return (
    <section>
      <div className="pt-44"></div>

      <h1 className="text-9xl font-bold text-black text-center">MKH-GAMES</h1>

      <div className="pt-44"></div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 px-4">
        <Image
          src="/gamepics/superflexagon_1.png"
          alt="SUPERFLEXAGON"
          width={800}
          height={500}
          className="w-full md:w-4/6 rounded-2xl shadow-lg object-cover h-[500px]"
        />
        <Image
          src="/gamepics/melsius_1.png"
          alt="MELSIUS"
          width={400}
          height={500}
          className="w-full md:w-2/6 rounded-2xl shadow-lg object-cover h-[500px]"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 px-4">
        <Image
          src="/gamepics/tero_1.png"
          alt="TERO"
          width={1200}
          height={500}
          className="w-full md:w-full rounded-2xl shadow-lg object-cover h-[500px]"
        />
      </div>
    </section>
  );
}
