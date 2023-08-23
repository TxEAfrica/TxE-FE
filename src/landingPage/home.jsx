import { useState, useEffect } from "react";
import Banner from "./sections/Banner";
import EventSchedule from "./sections/EventSchedule";
import Highlight from "./sections/Highlight";
import Navbar from "./sections/Navbar";
import PhotoSpeaks from "./sections/PhotoSpeaks";
import Sponsors from "./sections/Sponsors";
import Testimonials from "./sections/Testimonials/Testimonials";
import CountUpAnimation from "./sections/Counter/CountUpAnimation";
import Footer from "./sections/Footer";
import "./Home.css";
import Speakers from "../landingPage/sections/Speakers/Speakers";
import Speakerz from "./sections/Speakers/Speakerz";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="main-container">
				<div className=" py-2 md:space-y-10 overflow-x-hidden">
					<Banner />
					<Highlight />
					<EventSchedule />
					<CountUpAnimation />
					{/* <Speakers /> */}
					<Speakerz />

					<div className="z-50">
						<PhotoSpeaks />

						<Testimonials />
						<div className="flex justify-center items-center bottom-0 md:-bottom-20 left-0 right-0 z-30 mt-3 mb-3">
							<Sponsors />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
