import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BtnPrimary from "../buttons/BtnPrimary";
import BtnSecondary from "../buttons/BtnSecondary";
import animation1 from "../../assets/animation-img-1.jpeg";
import animation2 from "../../assets/animation-img-2.svg";
import animation3 from "../../assets/animation-img-3.svg";
import animation4 from "../../assets/animation-img-4.svg";
import enugu from "../../assets/esg-logo.svg";
import { CSSTransition } from "react-transition-group";
import "../Landing.css";

const Banner = () => {
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating((prevState) => !prevState);
		}, 2000); // Adjust the interval time (in milliseconds) as needed

		return () => {
			clearInterval(interval);
		};
	}, []);
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
			className="h-screen w-full overflow-hidden banner-container mx-3 lg:mx-0 ">
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
					<p className="text-white md:text-6xl mt-5">
						The Enugu Tech and Entrepreneurship (TxE) Summit 2nd edition. Enugu
						TxE aims to ignite innovation, foster collaboration, and empower the
						local entrepreneurial community. The summit aims to drive economic
						growth and position Enugu as a leading tech hub in South East,
						Nigeria.{" "}
					</p>
					<div className="banner-buttons space-y-5 mt-10">
						<div className="cursor-pointer h-fit w-full">
							<BtnSecondary btnName={"Partner With Us"} />
						</div>
						<div
							className="cursor-pointer w-full h-fit"
							onClick={() => navigate("/register")}>
							<BtnPrimary btnName={"Register"} />
						</div>
					</div>
					<div className={`cursor ${isAnimating ? "animate-click" : ""}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none">
							<path
								d="M35.8839 15.8287L7.00885 5.32873C6.77444 5.24417 6.52079 5.22809 6.27757 5.28237C6.03435 5.33666 5.81161 5.45906 5.6354 5.63528C5.45919 5.81149 5.33678 6.03423 5.2825 6.27745C5.22821 6.52067 5.24429 6.77431 5.32885 7.00873L15.8289 35.8837C15.9206 36.1374 16.0882 36.3566 16.309 36.5116C16.5297 36.6666 16.7929 36.7499 17.0626 36.75C17.3255 36.7502 17.5824 36.6716 17.8 36.5241C18.0176 36.3767 18.186 36.1673 18.2832 35.9231L23.3232 23.3231L35.9232 18.2831C36.1723 18.1887 36.3866 18.0207 36.5379 17.8015C36.6892 17.5823 36.7703 17.3223 36.7703 17.0559C36.7703 16.7896 36.6892 16.5296 36.5379 16.3104C36.3866 16.0912 36.1723 15.9232 35.9232 15.8287H35.8839ZM21.827 21.0787L21.302 21.2887L21.092 21.8137L17.0626 31.7625L8.75448 8.75436L31.7626 17.0625L21.827 21.0787Z"
								fill="white"
							/>
						</svg>
						<p>Click here</p>
					</div>
				</div>
			</CSSTransition>

			<div className="hidden lg:flex animation-container">
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
			<div className="absolute partnership">
				<p>
					In partnership with <span>ENUGU STATE GOVERNMENT</span>
				</p>
				<img
					src={enugu}
					alt="esg-logo"
					loading="lazy"
				/>
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
