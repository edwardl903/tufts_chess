import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Image from "next/image";

const about: React.FC = () => {
  return (
    <div className="relative">
      {/* Header */}
      <Header transparent />

        {/* background image and its overlaying text */}
      <div
        className="absolute top-0 left-0 w-full h-[84vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/aboutpage_1.jpeg')"}}

      >
        <div className="absolute inset-0 bg-gray-600 bg-opacity-30"></div>

        <div className="relative px-14 p-8 text-white">
            <h1 className="text-md leading-tight pb-4">
                Tufts Chess Club @ Tufts University
            </h1>
            <h1 className="text-4xl font-bold leading-tight pt-4 pb-6">
                We aim to the chess 
                <br/>
                accessible and welcoming 
                <br/>
                to all members in our community

            </h1>

        </div>
      </div>

      <div className="h-[75vh]"></div>

      <section className="py-6 mb-14 px-60 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
                <h2 className="text-4xl font-bold text-[#64b0e2] transform tracking-wide">About Us</h2>
            </div>

            <div>
                <p className="text-lg text-gray-700">
                    The Club aims to provide any members of the Tufts Community 
                    wishing to play chess from beginners to advanced. The club 
                    facilitate the exchange of information among chess-playing
                    members so that anyone wishing to do so may find an
                    opponent to play and to improve their skills outside of
                    meetings of the Tufts Chess Club as well as at meetings.
                </p>

                <div className="pt-4">
                    <button className="bg-[#64b0e2] text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-gray-800 transition">
                        Join our Community
                    </button>
                </div>
            </div>
        </div>
      </section>

      <section className="py-6 mb-14 px-60 bg-white">
        <div className="container text-gray-700 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
                <h2 className="text-4xl font-bold text-[#64b0e2] transform tracking-wide">Hours &<br/>Location</h2>
            </div>

            <div>
                <p className="text-2xl space-y-8">
                    <p className="text-sm pb-4">hours</p>
                    Weekly on Friday
                    <br/>
                    <p className="text-sm pb-4">location</p>
                    177 College Ave
                </p>
            </div>
        </div>
      </section>

      {/* <div className="absolute inset-0 bg-gray-700 opacity-50"></div> */}

        {/* <section className="w-full bg-white flex justify-center items-center overflow-hidden block p-10">
            <div className="relative w-full h-[350px]">
                <Image
                    src="/homepagebackground.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                >
                </Image>  
            </div>
            
        </section> */}

        <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center relative">
                {/* Quotation Mark */}
                <div className="absolute top-2 left-1/2 transform text-gray-300 text-5xl">
                    &ldquo;
                </div>

                {/* Quote Text */}
                <p className="text-xl italic text-gray-700 leading-relaxed">
                    “Every chess master was once a beginner.”
                </p>

                {/* Author */}
                <p className="mt-4 text-gray-500 text-lg font-semibold">
                    — Irving Chernev
                </p>
                </div>
            </div>
        </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default about;
