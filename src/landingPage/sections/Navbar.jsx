import React, { useState } from "react";
import { Icon } from "../../icons/Icons";
import TxELogo from "../../assets/txelogo-orange.svg";
import ScrollToContainerLink from "../scroll/ScrollToContainerLink";
import { useLocation, useNavigate } from "react-router-dom";
import "../Landing.css";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	return (
		<div className="flex justify-between lg:justify-center items-center py-4 px-4 md:px-8 lg:px-4 sticky top-0 z-50 navbar">
			<div onClick={() => location.pathname !== "/" && navigate("/")}>
				<img
					src={TxELogo}
					className="w-32 img-logo"
					alt=""
				/>
			</div>
			<div className="relative flex justify-between ">
				<ul
					className={`hidden lg:flex font-bold space-x-20 ${
						showMenu ? "lg:hidden" : ""
					}`}>
					<ScrollToContainerLink to={"about"}>
						<li className="p-2 cursor-pointer navlink">About</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"testimonials"}>
						<li className="p-2 cursor-pointer navlink">Testimonials</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"speakers"}>
						<li className="p-2 cursor-pointer navlink">Speakers</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"event-schedule"}>
						<li className="p-2 cursor-pointer navlink">Event Schedule</li>
					</ScrollToContainerLink>
				</ul>

				{/* small devices */}
				{!showMenu && (
					<div
						className="p-3"
						onClick={toggleMenu}>
						<Icon.BarMenu className="lg:hidden text-2xl font-semibold cursor-pointer" />
					</div>
				)}
				{showMenu && (
					<div
						className="fixed flex justify-between bg-orange-100 text-black top-0 left-0 right-0 bottom-0 shadow-md p-4 z-10"
						onClick={toggleMenu}
						style={{ opacity: 0.95, transition: "opacity 1s ease" }}>
						<ul
							className="w-full h-fit flex flex-col font-bold mt-16 p-4 space-y-6 z-50"
							onClick={() => setShowMenu(!showMenu)}>
							<ScrollToContainerLink to={"about"}>
								<li className="p-2 cursor-pointer">About</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"testimonials"}>
								<li className="p-2 cursor-pointer">Testimonials</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"speakers"}>
								<li className="p-2 cursor-pointer">Speakers</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"event-schedule"}>
								<li className="p-2 cursor-pointer">Event Schedule</li>
							</ScrollToContainerLink>
						</ul>
						<Icon.CancelMenu className="lg:hidden text-2xl mt-4 font-semibold cursor-pointer" />
						<div className="absolute h-full justify-center items-center w-full">
							<img
								src={TxELogo}
								className="absolute bottom-10 w-3/5 animate-bounce"
								alt=""
							/>
						</div>
					</div>
				)}
			</div>
			<button className="nav-btn">Register</button>
		</div>
	);
};

export default Navbar;
