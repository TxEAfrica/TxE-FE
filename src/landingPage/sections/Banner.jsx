import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BtnPrimary from "../buttons/BtnPrimary";
import BtnSecondary from "../buttons/BtnSecondary";
import animation1 from "../../assets/animation-img-1.jpeg";
import animation2 from "../../assets/animation-img-2.svg";
import animation3 from "../../assets/animation-img-3.svg";
import animation4 from "../../assets/animation-img-4.svg";
import { CSSTransition } from "react-transition-group";
import "../Landing.css";

const Banner = () => {
	const navigate = useNavigate();
	// List of image URLs
	const images = [animation1, animation4];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Automatically switch images every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div
			id="top"
			className="h-screen w-full overflow-hidden banner-container">
			<CSSTransition
				in={true}
				appear={true}
				timeout={1000}
				classNames="slide">
				<div className="banner-text">
					<h1 className="text-4xl md:text-6xl text-white font-bold">
						<span className="orange">ENUGU</span> Tech & Entrepreneurship Summit
						2023
					</h1>
					<p className="text-white md:text-6xl">
						The Enugu Tech and Entrepreneurship (TxE) Summit 2nd edition. Enugu
						TxE aims to ignite innovation, foster collaboration, and empower the
						local entrepreneurial community. The summit aims to drive economic
						growth and position Enugu as a leading tech hub in South East,
						Nigeria.{" "}
					</p>
					<div className="banner-buttons">
						<div className="cursor-pointer h-fit w-full">
							<BtnSecondary btnName={"Partner With Us"} />
						</div>
						<div
							className="cursor-pointer w-full h-fit"
							onClick={() => navigate("/register")}>
							<BtnPrimary btnName={"Register"} />
						</div>
					</div>
				</div>
			</CSSTransition>

			<div className="animation-container">
				<CSSTransition
					in={true}
					appear={true}
					timeout={1000}
					classNames="slide">
					<img
						className="animation-1"
						src={images[currentImageIndex]}
						alt=""
					/>
				</CSSTransition>
			</div>
		</div>
	);
};

export default Banner;

{
	/* <div className="content-container md:text-white flex flex-col items-center md:justify-center text-center">
				<h1 className="text-4xl md:text-6xl font-bold w-5/6 mt-16 md:mt-0 mb-5">
					<span className="orange">Enugu</span> Tech & Entrepreneurship Summit
					2023
				</h1>
				<p className="text-lg md:text-2xl font-semibold mb-10">
					Great Innovative Ideas Unleashed
				</p>
				<div className="md:flex space-y-5 md:space-y-0 md:space-x-5 w-full md:w-1/2 p-8">
					<div className="cursor-pointer h-fit w-full">
						<BtnSecondary btnName={"Partner With Us"} />
					</div>
					<div
						className="cursor-pointer w-full h-fit"
						onClick={() => navigate("/register")}>
						<BtnPrimary btnName={"Register"} />
					</div>
				</div>
			</div> */
}
