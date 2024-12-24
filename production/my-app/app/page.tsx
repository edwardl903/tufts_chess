import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventsGallery from "./components/EventsGallery";

export default function Home() {
  return (
    <>
      <main className="relative h-screen bg-cover bg-center">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="/homepagebackground.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          ></Image>
        </div>

        {/* cover the picutre by a thin gray layer */}
        <div className="absolute inset-0 bg-gray-700 opacity-45"></div>

        <Header transparent/>

        {/* bottom right text */}
        <div className="absolute bottom-8 left-8 z-20 text-blue-300">
          <h1 className="text-9xl font-bold leading-tight drop-shadow-md">
            TUFTS
          </h1>
          <h1 className="text-9xl font-bold leading-tight drop-shadow-md transform scale-y-125s">
            CHESS CLUB
          </h1>
        </div>

      </main>


      {/* [#EAFBFF] */}
      <section className="w-full bg-gray-100 py-24">
        <div className="container mx-auto px-15 flex items-center justify-between">
          {/* Left Section: Heading */}
          <div className="w-1/3">
            <h1 className="text-4xl font-bold text-gray-600 leading-tight">
              WELCOME TO <br/> TUFTS <br/> CHESS CLUB
            </h1>
          </div>

          {/* Right Section: Paragraph and Link */}
          <div className="w-1/2 text-gray-500">
            <p className="text-lg mb-6">
            We are the ONE and ONLY Tufts Chess Club! Whether you're a skilled 
            player or just starting to learn chess, we welcome you. Join us for 
            weekly meetings, exciting tournaments, community bonding events, 
            and much more!
            </p>
            <a
              href="#"
              className="text-lg font-semibold flex items-center space-x-2 hover:underline"
            >
              <span>JOIN US</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="h-20 bg-white"></div>
      </section>


      <EventsGallery />

      <section className="h-20 bg"></section>

      <Footer/>
  </>
  );
};
