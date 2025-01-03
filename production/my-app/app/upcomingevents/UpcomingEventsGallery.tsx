"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import { events, Event } from "./UpcomingEventsData";

const semesters = [
    {label: "-- All --", value: ""},
    {label: "2023 Fall", value: "2023 Fall"},
    {label: "2024 Spring", value: "2024 Spring"},
    {label: "2024 Fall", value: "2024 Fall"},
    {label: "2025 Spring", value: "2025 Spring"},
    {label: "2025 Fall", value: "2025 Fall"},
];

const EVENTS_PER_PAGE = 5;

const EventsGallery: React.FC = () => {
    const [selectedSemester, setSelectedSemester] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredEvents = selectedSemester
    ? events.filter((event) => event.semester === selectedSemester)
    : events;

    const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
    const EventsWithPages = filteredEvents.slice(
        (currentPage - 1) * EVENTS_PER_PAGE,
        currentPage * EVENTS_PER_PAGE
    );

    const goToPage = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    }
    return(
        <div className="max-w-5xl mx-auto p-5">
            <h1 className="text-6xl text-[#64b0e2] font-bold font-mono mt-14 mb-10">Past Events</h1>

            {/* semester filter */}
            <div className="w-full border-b-4 border-[#64b0e2] pb-10 mb-6">
            {/* <div className="w-full border-b border-gray-500 pb-6 mb-6"> */}
                <div className="max-w-[400px]">
                    <label 
                        htmlFor="semester" 
                        className="block text-2xl text-[#64b0e2] pb-2">
                        Semester
                    </label>
                    <select
                        id="semester"
                        className="mt-1 block py-4 px-4 w-[400px] text-xl text-gray-800 border border-gray-800 rounded-sm focus:border-gray-800 focus:ring-gray-800"
                        value={selectedSemester}
                        onChange={(e) => {
                            setSelectedSemester(e.target.value)
                            setCurrentPage(1);
                        }}
                    >
                        {semesters.map((semester) => (
                            <option key={semester.value} value={semester.value}>
                                {semester.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* events directory list*/}
            <div className="space-y-8">
                {EventsWithPages.map((event) => (
                    <div
                        key={event.id}
                        className="border-b-2 border-[#64b0e2] pb-4"
                        // className="border-b border-gray-500 pb-4"
                    > 
                        <div key={event.id} className="flex flex-col md:flex-row gap-4 ">
                            {/* thumbnail */}
                            <div className="w-full md:w-[240px] h-[140px] flex-shrink-0">
                                <img
                                src={event.image}
                                alt={event.name}
                                className="w-full h-full object-cover object-center rounded-lg"
                                />
                            </div>
                            {/* event list content */}
                            <div className="flex-1">
                                <h2 className="text-4xl text-[gray-800] font-bold font-sans pb-2">{event.name}</h2>
                                <p className="text-md text-gray-800 font-bold font-sans">{event.date}</p>
                                <p className="text-gray-700">{event.shortdescription}</p>
                                <Link
                                    href={`/events/${event.id}`}
                                    className="text-[#64b0e2] font-bold underline mt-2 inline-block"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* new pages */}
            <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                    className={`px-4 py-2 rounded-md ${
                        currentPage === 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#64b0e2] hover:bg-red-500 text-white"
                      }`}
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-md ${
                        currentPage === index + 1
                            ? "bg-[#64b0e2] text-white"
                            : "bg-gray-400 text-white hover:bg-green-500"
                        }`}
                        onClick={() => goToPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={`px-4 py-2 rounded-md ${
                        currentPage === totalPages ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#64b0e2] hover:bg-red-500 text-white"
                    }`}
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    >
                    Next
                </button>
            </div>
        </div>
    );
};
export default EventsGallery;