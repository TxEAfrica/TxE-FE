import React from "react";
import { useSwipeable } from "react-swipeable";
import linkedin from "../../../assets/linkedin-icon.svg";
import "./ImageSlider.css";

const ImageSlider = ({ images, activeIndex, setActiveIndex }) => {
	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handlers = useSwipeable({
		onSwipedLeft: handleNext,
		onSwipedRight: handlePrev,
	});

	const handleImageClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div
			id="speakers"
			className="main">
			<div className="title">
				<div className="flex flex-col space-y-5 items-center">
					<h1
						id="section-heading"
						className="text-5xl text-center font-bold mb-4 md:mb-0">
						Meet our speakers
					</h1>
					<div className="text-lg text-white mt-6 flex flex-col justify-center items-center">
						TxE Summit 2023
						<div className="flex space-x-2 mt-2 lines">
							<div className="w-56 h-1 rounded-full bg-orange"></div>
							<div className="w-56 h-1 rounded-full bg-white"></div>
						</div>
					</div>
				</div>
				{/* <div className="arrows">
					<img
						src={leftarrow}
						loading="lazy"
						className="left-arrow"
						onClick={handlePrev}
						alt=""
					/>
					<img
						src={rightarrow}
						loading="lazy"
						className="right-arrow"
						onClick={handleNext}
						alt=""
					/>
				</div> */}
			</div>
			<div
				className="slider-container"
				{...handlers}>
				{images.map((image, index) => (
					<div
						key={index}
						className={`image-card ${index === activeIndex ? "active" : ""}`}>
						<img
							src={image.url} // Use the image URL from the images array
							alt=""
							loading="lazy"
							className="image"
							onClick={() => handleImageClick(index)}
						/>
						{index === activeIndex && (
							<div
								className="descriptionn"
								style={{ opacity: 1 }}>
								<div className="description">
									<p>{image.designation}</p>
									<h3>{image.name}</h3>
								</div>
								<img
									className="linkedin"
									src={linkedin}
									loading="lazy"
									alt="linkedin-logo"
								/>
							</div>
						)}
					</div>
				))}
			</div>
			{/* <div className="footnote">
				<div className="number-holder">
					<div className="n1">
						<h1>0</h1>
					</div>
					<div className="n1">
						<h1>7</h1>
					</div>
				</div>
				<h2 className="slider-footnote">carefully curated Speakers</h2>
			</div> */}
		</div>
	);
};

export default ImageSlider;
