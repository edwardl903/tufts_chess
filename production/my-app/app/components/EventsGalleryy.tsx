import React from "react";
import {events} from "../upcomingevents/UpcomingEventsData"; 

const EventsGallery: React.FC = () => {
    return(
        <div>
            <div className="flex overflow-x-auto space-x-10 pb-4 scrollbar-hide">
            {events.map((event) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-80 bg-gray-100 shadow-lg rounded-lg overflow-hidden p-8 mb-4 text-center"
                >
                <img
                    src="bg-white"
                    alt="background"
                    className="w-32 h-32 mx-auto rounded-full"
                >
                </img>
                </div>
                
            ))}
            </div>
            {/* <div className="flex overflow-x-auto space-x-10 pb-4 scrollbar-hide">
            {events.map((event) => (
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
            <div className="h-20 bg-white w-full"></div> */}
        </div>
    );
};

export default EventsGallery;


