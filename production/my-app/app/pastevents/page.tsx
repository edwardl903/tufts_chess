import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsGallery from "./PastEventsGallery";

const Events: React.FC = () => {
    return (
        <div>
            <Header transparent = {false}/>
            <main className="mb-10"><EventsGallery/></main>
            <Footer/>
        </div>
    )
}

export default Events;