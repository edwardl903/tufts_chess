import React from "react";
import { useParams } from "react-router-dom";
import { events, Event } from "./eventsdata";

const EventsDetails: React.FC = () => {
    const { id } useParams<{ id: string}>();
    const event = events.find((event) => event.id === Number(id));

    if (!event) {
        return <div className="text-center text-2xl">Event not found.</div>;
    }
    return (
        

        <div></div>

    );
};

export default EventsDetails;