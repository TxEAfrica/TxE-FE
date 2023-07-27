import Banner from "./sections/Banner";
import Event from "./sections/Event";
import EventSchedule from "./sections/EventSchedule";
import Highlight from "./sections/Highlight";
import Navbar from "./sections/Navbar";
import PhotoSpeaks from "./sections/PhotoSpeaks";
import Sponsors from "./sections/Sponsors";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <div className="w-full">
                <div className="relative">
                <Banner />
                <div className="flex justify-center items-center absolute bottom-0 md:-bottom-20 left-0 right-0 z-30">
                    <Sponsors />
                </div>
                </div>
                <div className=" py-10 md:mt-36 space-y-20 md:space-y-44">
                <Event />
                <Highlight />
                <EventSchedule />
                <PhotoSpeaks />
                </div>
            </div>
        </>
     );
}
 
export default Home;