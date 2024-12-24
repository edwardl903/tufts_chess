import React from "react";

interface Event {
  date: string;
  name: string;
  location: string;
}

const events: Event[] = [
  { date: "1.10", name: "KING OF CHESS - TOURNAMENT", location: "7:00 PM - 177 College Ave" },
  { date: "1.15", name: "MIXER WITH CSA", location: "9:00 PM - 126 Hume St" },
  { date: "1.20", name: "CLUB DUMPLING BONDING", location: "11:30 PM - Davis Square" },
];

const EventsGallery: React.FC = () => {
  return (
    <div className="bg-[#64b0e2] text-white p-8">
      <div className="flex py-12 px-20">
        {/* title : Upcoming Events" */}
        <div className="w-1/3">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
        </div>
        {/* Right Side: Event Listings */}
        <div className="w-3/4 space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-300 pb-4"
            >
              <div className="flex">
                <p className="text-xl font-bold mr-6">{event.date}</p>
                <div>
                  <p className="text-xl font-bold">{event.name}</p>
                  <p className="text-sm py-2">{event.location}</p>
                </div>
              </div>
              <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;
