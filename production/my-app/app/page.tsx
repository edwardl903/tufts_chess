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
        <div className="absolute inset-0 bg-gray-700 opacity-40"></div>

        <Header transparent/>

        {/* bottom right text */}
        <div className="absolute text-[140px] bottom-8 left-8 font-serif z-20 text-[#64b0e2]">
          <h1 className="font-bold leading-tight drop-shadow-md">
            TUFTS
          </h1>
          <h1 className="font-bold leading-tight drop-shadow-md transform scale-y-125s">
            CHESS CLUB
          </h1>
        </div>

      </main>


      {/* [#EAFBFF] */}
      <section className="w-full bg-gray-100 py-12">

          {/* Right Section: Paragraph and Link */}
          <div className="text-center">
            <p className="text-xl text-gray-500 px-60 mb-3">
            We are the ONE and ONLY Tufts Chess Club! Whether you're a skilled 
            player or just starting to learn chess, we welcome you. Join us for 
            weekly meetings, exciting tournaments, community bonding events, 
            and much more!
            </p>
            
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 
              text-2xl font-bold text-gray-500 bg-transparent rounded-md 
              hover:bg-[#64b0e2] hover:underline hover:text-white
              transition duration-300"
            >
              JOIN US
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
    

            </a>
          </div>

      </section>

      <section className="w-full bg-gradient-to-b from-gray-100 to-[#64b0e2] flex items-center justify-center">
        <div className="text-center">
          {/* <h2 className="text-4xl font-bold text-white mb-2">
            A Little Gimpse
          </h2> */}

          {/* video link */}
          <div className="relative overflow-hidden w-[900px] max-w-6xl mx-auto aspect-video rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/brHQouUnFP0"
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay"
              allowFullScreen
            >
            </iframe>
          </div>

        </div>
      </section>


      <EventsGallery/>


      <Footer/>
  </>
  );
};
