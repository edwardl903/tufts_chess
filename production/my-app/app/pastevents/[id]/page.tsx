"use client"; 

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { events, Event } from "../PastEventsData";
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 
import Image from "next/image";

const EventsDetails: React.FC = () => {
    const params = useParams();
    const event = events.find((event) => event.id === Number(params.id));

    if (!event) {
        return (
            <div className="max-w-4xl mx-auto p-5 text-center">
                <h1 className="text-4xl font-bold text-red-600">Allen Cannot Find This Event</h1>
            </div>
        );
    }

    return (
        <div className="relative">
            <Header transparent={false}/>
            <section className="bg-amber-100 flex flex-col items-center justify-center px-6 py-12">
                {/* date and title */}
                <div className="text-left mb-6 w-full max-w-6xl">
                    <p className="text-5xl font-mono font-extrabold text-gray-700">
                        {event.name}
                    </p>
                    <h1 className="text-2xl font-mono font-bold text-gray-700 mt-3">
                        {event.date}
                    </h1>
                </div>

                <div className="relative w-full max-w-6xl h-[500px]">
                    <Image
                        src="/aboutpage_1.jpeg"
                        alt="event detailed page 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    >
                    </Image>
                </div>
            </section>

            <section className="bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center p-10">
                <div className="flex items-center w-full max-w-6xl pb-4">
                    <img 
                        src="/chesslogo.png"
                        alt="Chess Logo"
                        width={60}
                        height={60}
                        className="rounded-3xl mr-6"
                    ></img>
                    <p className="text-[#64b0e2] text-5xl tracking-wider font-sans font-extrabold">Event details:</p>
                </div>

                <div className="pt-4 text-left w-full max-w-6xl pl-20 pr-80 space-y-6">
                    {event.longdetail.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-lg leading-relaxed">
                        {paragraph}
                    </p>
                ))}
                </div>

            </section>

            <section className="flex flex-col items-center justify-center w-full bg-white p-10 mb-10 space-y-8">
                <div className="relative w-full max-w-5xl h-[250px]">
                    <Image
                        src="/aboutpage_1.jpeg"
                        alt="whatever"
                        fill
                        className="object-cover rounded-lg"
                    >
                    </Image>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                <div className="relative w-full h-[250px]">
                        <Image
                            src="/aboutpage_1.jpeg"
                            alt="hiii"
                            fill
                            className="object-cover rounded-lg"
                        ></Image>
                    </div>

                    <div className="relative w-full h-[250px]">
                    <Image
                            src="/aboutpage_1.jpeg"
                            alt="helloo"
                            fill
                            className="object-cover rounded-lg"
                        ></Image>
                    </div>
                </div>
            </section>



            <Footer/>
        </div>
    );
};

export default EventsDetails;