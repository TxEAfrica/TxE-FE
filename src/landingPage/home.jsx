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

const Home = () => {
	return (
		<>
			<div className="main-container">
			
					<Navbar />

				<div className=" py-2 md:space-y-10 overflow-x-hidden">
				<Banner />
					<Highlight />
					<EventSchedule />
					<CountUpAnimation />
					<Speakers />
					<PhotoSpeaks />
				
				<Testimonials />
				<div className="flex justify-center items-center bottom-0 md:-bottom-20 left-0 right-0 z-30 mt-3 mb-3">
					<Sponsors />
				</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
