export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 w-full">
            <div className="mb-6 md:mb-0">
              <span className="self-center text-2xl font-bold whitespace-nowrap text-black">
                MKH-GAMES
              </span>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-black">Legal matters</h2>
              <ul className="text-gray-800 font-medium">
                <li></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-black">Resources</h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-black">Socials</h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-4">
                  <a
                    href="https://discord.gg/mjNcZFHnf5"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Discord - Community Server
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/Hari-42"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Github - Hari-42
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center flex-wrap">
          <span className="text-sm text-black-500 text-center">
            © 2025 MKH-GAMES All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
