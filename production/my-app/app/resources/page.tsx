import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import EventsGallery from "./eventsgallery";
import DailyChessPuzzle from "../components/DailyChessPuzzle";

const Events: React.FC = () => {
    return (
        <div>
            <Header transparent = {false}/>
            {/* <main className="mb-10"><EventsGallery/></main> */}
            <main className="m-10">
                <DailyChessPuzzle/>
            </main>
            <Footer/>
        </div>
    )
}

export default Events;