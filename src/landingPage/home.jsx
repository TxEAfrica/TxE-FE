import React, { useState } from "react";
import Banner from "./sections/Banner";
import Event from "./sections/Event";
import EventSchedule from "./sections/EventSchedule";
import Highlight from "./sections/Highlight";
import Navbar from "./sections/Navbar";
import PhotoSpeaks from "./sections/PhotoSpeaks";
import ImageSlider from "./sections/Speakers/ImageSlider";
import Sponsors from "./sections/Sponsors";
import Testimonials from "./sections/Testimonials/Testimonials";
import CountUpAnimation from "./sections/Counter/CountUpAnimation";
import image1 from "../assets/Speaker-1.svg";
import Footer from "./sections/Footer";
import "./Home.css";
import Speakers from "./sections/Speakers/Speakers";

const Home = () => {
	const images = [
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
		{
			url: image1,
			name: "Williams Uchembah",
			designation: "Actor, Filmaker, Humanitarian Founder, WUF",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<>
			<div className="main-container overflow-hidden">
				<div className="px-16 sticky nav-holder">
					<Navbar />
				</div>
				<Banner />

				<div className=" py-2 md:mt-36 md:space-y-10">
					<Highlight />
					<EventSchedule />
					<CountUpAnimation />
					<Speakers />
					<PhotoSpeaks />
				</div>
				<Testimonials />
				<div className="flex justify-center items-center bottom-0 md:-bottom-20 left-0 right-0 z-30 mt-3 mb-3">
					<Sponsors />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
