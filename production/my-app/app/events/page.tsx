import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsGallery from "./eventsgallery";

const Events: React.FC = () => {
    return (
        <div>
            <Header transparent = {false}/>
            <main className="h-screen"><EventsGallery/></main>
            <Footer/>
        </div>
    )
}

export default Events;