"use client";

import React, {useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import eboardData from "./EboardData";

type Semester = keyof typeof eboardData;

const Eboard: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<Semester>("current");
  const members = eboardData[selectedSemester];


  return (
    <div>
      <Header transparent={false} />
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-5xl text-center font-bold text-[#64b0e2] mb-4">Meet Our Eboard Members! </h1>
        
        <div className="flex justify-center space-x-6">
          <h1 className="text-2xl font-semi-bold text-[#64b0e2] pb-8 mb-8">
            Eboard Of
          </h1>

          {/* dropdown for semester selection */}
          <div className="relative">
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value as Semester)}
              className="border border-gray-300 rounded-xl px-2 py-1.5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#64b0e2]"
            >
              {Object.keys(eboardData).map((semester) => (
                <option key={semester} value ={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>
          </div>


        
        {/* horizontal scrollable gallery */}
        <div className="flex overflow-x-auto space-x-10 pb-4 scrollbar-hide">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gray-100 shadow-lg rounded-lg overflow-hidden p-8 mb-4 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm mb-2">{member.year}</p>
              <p className="text-gray-500 text-sm mb-2">{member.major}</p>
              <p className="text-gray-500 text-sm mb-2 ">hometown: {member.hometown}</p>
              <p className="text-gray-500 text-sm mb-2">pronouns: {member.pronouns}</p>
              <p className="text-gray-500 text-sm mb-2">favorite chess opening: {member.favorite_chess_opening}</p>
              <p className="text-gray-500 text-sm mb-2">fun fact: {member.fun_fact}</p>

              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/insLogo.jpeg" 
                        alt="instagram"
                        className="w-6 h-6"
                    />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/facebookLogo.png" 
                        alt="facebook"
                        className="w-6 h-6"
                    />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/discordLogo.png"
                        alt="discord"
                        className="w-6 h-6"
                    />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="h-20 bg-white w-full"></div>

{/*         
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden p-8 mb-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 rounded-2xl object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="border-t border-gray-500 my-4"></div>

              <p className="text-gray-500 text-sm mb-2">{member.year}</p>
              <p className="text-gray-500 text-sm mb-2">{member.major}</p>
              <p className="text-gray-500 text-sm mb-2 ">hometown: {member.hometown}</p>
              <p className="text-gray-500 text-sm mb-2">pronouns: {member.pronouns}</p>
              <p className="text-gray-500 text-sm mb-2">favorite chess opening: {member.favorite_chess_opening}</p>
              <p className="text-gray-500 text-sm mb-2">fun fact: {member.fun_fact}</p>
              
              <div className="flex space-x-2 mt-6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/insLogo.jpeg" 
                        alt="instagram"
                        className="w-6 h-6"
                    />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/facebookLogo.png" 
                        alt="facebook"
                        className="w-6 h-6"
                    />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/discordLogo.png"
                        alt="discord"
                        className="w-6 h-6"
                    />
                </a>
              </div>
      
            </div>
          ))}
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Eboard;
