
import React, {useState} from "react";
import Banner from "./sections/Banner";
import Event from "./sections/Event";
import EventSchedule from "./sections/EventSchedule";
import Highlight from "./sections/Highlight";
import Navbar from "./sections/Navbar";
import PhotoSpeaks from "./sections/PhotoSpeaks";
import ImageSlider from "./sections/Speakers/ImageSlider";
import Sponsors from "./sections/Sponsors";
import Testimonials from "./sections/Testimonials/Testimonials";
import CountUpAnimation from "./sections/Counter/CountUpAnimation"
import image1 from '../assets/Speaker-1.svg'
import Footer from "./sections/Footer";

const Home = () => {

    const images = [
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
        { url: image1 , name:"Williams Uchembah", designation:"Actor, Filmaker, Humanitarian Founder, WUF" },
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    
      const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

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
                <CountUpAnimation />
                <Highlight />
                <ImageSlider images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} handleNext={handleNext} handlePrev={handlePrev} /> 
                <EventSchedule />
                <PhotoSpeaks />
                <Testimonials />
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Home;
