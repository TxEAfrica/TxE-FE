import React, { useState } from "react";
import "./Testimonials.css";
import arrowleft from "../../../assets/arrow-left.svg";
import arrowright from "../../../assets/arrow-right.svg";
import arnold from "../../../assets/arnold-min.png";
import test1 from "../../../assets/testimonial 1.svg";
import test2 from "../../../assets/test2.svg";
import q1 from "../../../assets/q1.svg";
import q2 from "../../../assets/q2.svg";

const Testimonials = () => {
	const totalSlides = 4; // Update this number according to the total number of slides
	const [currentSlide, setCurrentSlide] = useState(0);

	// Function to handle moving to the next slide
	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
	};

	// Function to handle moving to the previous slide
	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
	};

	return (
		<div
			id="testimonials"
			className="test-container">
			<div className="carousel">
				<div className="flex flex-col space-y-5 items-center mt-20 md:mb-10">
					<h1
						id="section-heading"
						className="text-5xl text-white text-center font-bold mb-4 md:mb-0">
						Past attendees testimonials
					</h1>
					<div className="text-lg text-white mt-6 flex flex-col justify-center items-center">
						TxE Summit 2022
						<div className="flex space-x-2 mt-2 lines">
							<div className="w-56 h-1 rounded-full bg-orange"></div>
							<div className="w-56 h-1 rounded-full bg-white"></div>
						</div>
					</div>
				</div>

				<div className="indicators">
					{/* {Array.from({ length: totalSlides }, (_, index) => (
						<span
							key={index}
							className={`indicator-dot ${
								index === currentSlide ? "active" : ""
							}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))} */}
				</div>

				<div
					className="slider"
					style={{
						transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
					}}>
					<section>
						<div className="test-image">
							<img
								className="test-1 rounded-full"
								src={arnold}
								loading="lazy"
								alt="test-1"
							/>
						</div>
						<div className="quote">
							<img
								className="quote-mark q1"
								src={q1}
								loading="lazy"
								alt=""
							/>
							<h3>How TXE Africa caused a shift in my tech career</h3>
							<p>
								It is through a Scholarship program I then got comprehensive
								training and guidance that were pivotal in honing my skills. A
								testament to the quality and expertise fostered by TxE Africa.
							</p>
							<small>
								Arnold Ngowi, <span>Senior. Frontend Developer.</span>
							</small>
							<img
								className="quote-mark q2"
								src={q2}
								loading="lazy"
								alt=""
							/>
						</div>
					</section>
					<section>
						<div className="test-image">
							<img
								className="test-1"
								src={test1}
								loading="lazy"
								alt="test-1"
							/>
						</div>
						<div className="quote">
							<img
								className="quote-mark q1"
								src={q1}
								loading="lazy"
								alt=""
							/>
							<h3>How TXE Africa caused a shift in my tech career</h3>
							<p>
								I was privileged to be among those awarded scholarship to learn
								any tech skill of my choice under Learnable internship, after
								completing the internship I got a job with one of the tech
								startups in Lagos to work remotely from Enugu State.
							</p>
							<small>
								Vivian Nnoka, <span>Frontend Developer.</span>
							</small>
							<img
								className="quote-mark q2"
								src={q2}
								loading="lazy"
								alt=""
							/>
						</div>
					</section>
					<section>
						<div className="test-image">
							<img
								className="test-1"
								src={test1}
								alt="test-1"
							/>
						</div>
						<div className="quote">
							<img
								className="quote-mark q1"
								src={q1}
								loading="lazy"
								alt=""
							/>
							<h3>How TXE Africa caused a shift in my tech career</h3>
							<p>
								I was privileged to be among those awarded scholarship to learn
								any tech skill of my choice under Learnable internship, after
								completing the internship I got a job with one of the tech
								startups in Lagos to work remotely from Enugu State.
							</p>
							<small>
								Vivian Nnoka, <span>Frontend Developer.</span>
							</small>
							<img
								className="quote-mark q2"
								src={q2}
								loading="lazy"
								alt=""
							/>
						</div>
					</section>
					<section>
						<div className="test-image">
							<img
								className="test-1"
								src={test2}
								alt="test-2"
							/>
						</div>
						<div className="quote">
							<img
								className="quote-mark q1"
								src={q1}
								loading="lazy"
								alt=""
							/>
							<h3>Charting New Horizons:</h3>
							<p>
								TxE Africa's scholarship propelled me to chart new horizons in
								the tech world. Their support has paved the path to success,
								ensuring that I'm well-equipped to make my mark in the tech
								industry.
							</p>
							<small>
								Seyi Peters, <span>Sr. Frontend Developer.</span>
							</small>
							<img
								className="quote-mark q2"
								src={q2}
								loading="lazy"
								alt=""
							/>
						</div>
					</section>
				</div>
				<div className="control">
					<img
						className="arrow left z-50 absolute"
						onClick={prevSlide}
						src={arrowleft}
						loading="lazy"
						alt=""
					/>
					<img
						className="arrow right"
						onClick={nextSlide}
						src={arrowright}
						loading="lazy"
						alt=""
					/>
					{/* <span className='arrow right' onClick={nextSlide}>
            Right
          </span> */}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
