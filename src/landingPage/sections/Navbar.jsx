import React, { useState } from "react";
import { Icon } from "../../icons/Icons";
import TxELogo from "../../assets/txelogo-orange.svg";
import ScrollToContainerLink from "../scroll/ScrollToContainerLink";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Landing.css";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import BtnPrimary from "../buttons/BtnPrimary";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	const closeMenu = () => {
		setShowMenu(false);
	};

	return (
		<div className="flex bg-black justify-between items-center py-4 px-4 md:px-8 lg:px-6 sticky top-0 z-50">
			<div onClick={() => location.pathname !== "/" && navigate("/")}>
				<img
					src={TxELogo}
					className="w-24"
					alt=""
				/>
			</div>
			<div className="relative h-14 flex justify-between">
				<ul
					className={`hidden lg:flex flex-row-reverse h-full items-center font-bold ${
						showMenu ? "lg:hidden" : ""
					}`}>
					<Link
						to={"https://chat.whatsapp.com/GKcp82Pjs1jKEsVNOtGRaK"}
						target="_blank"
						className="p-2 mx-3 cursor-pointer  rounded-lg text-gray-100 navlink font-normal"
						onClick={closeMenu}>
						Join Our Community
					</Link>
					<ScrollToContainerLink to={"testimonials"}>
						<li
							className="p-2 mx-3 cursor-pointer  rounded-lg text-gray-100  navlink font-normal"
							onClick={closeMenu}>
							Testimonials
						</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"speakers"}>
						<li
							className="p-2 mx-3 cursor-pointer rounded-lg text-gray-100 navlink font-normal"
							onClick={closeMenu}>
							Speakers
						</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"event-schedule"}>
						<li
							className="p-2 mx-3 cursor-pointer rounded-lg text-gray-100 navlink font-normal"
							onClick={closeMenu}>
							Event Schedule
						</li>
					</ScrollToContainerLink>
				</ul>

				{/* small devices */}
				{!showMenu && (
					<div
						className="p-3 text-white z-50 small-nav"
						onClick={toggleMenu}>
						<Icon.BarMenu className="lg:hidden text-2xl font-semibold cursor-pointer text-white" />
					</div>
				)}
				{showMenu && (
					<div
						className="fixed flex justify-between h-screen bg-black text-white top-0 left-0 right-0 bottom-0 shadow-md p-4 z-50"
						onClick={toggleMenu}
						style={{ opacity: 0.95, transition: "opacity 1s ease" }}>
						<ul className="w-full h-fit flex flex-col font-bold mt-16 p-4 space-y-6 z-50">
							<ScrollToContainerLink to={"testimonials"}>
								<li
									className="p-2 cursor-pointer"
									onClick={closeMenu}>
									Testimonials
								</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"speakers"}>
								<li
									className="p-2 cursor-pointer"
									onClick={closeMenu}>
									Speakers
								</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"event-schedule"}>
								<li
									className="p-2 cursor-pointer"
									onClick={closeMenu}>
									Event Schedule
								</li>
							</ScrollToContainerLink>

							<Link
								to={"https://docs.google.com/forms/d/e/1FAIpQLScU7DjD_tw3aKC6i_l7W_ihkGXCZ_0CD1eTNNszsk4EbDRimA/viewform?pli=1"}
								className="p-2 cursor-pointer text-white"
								onClick={closeMenu}>
								Become a Volunteer
							</Link>

							<Link
								to={"https://chat.whatsapp.com/GKcp82Pjs1jKEsVNOtGRaK"}
								className="p-2 cursor-pointer text-white"
								onClick={closeMenu}>
								Join Our Community
							</Link>
						</ul>
						<svg
							className="lg:hidden text-2xl mt-4 font-semibold cursor-pointer"
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none">
							<g clip-path="url(#clip0_285_41)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.0002 15.6495L20.6 22.2493C20.8201 22.4619 21.1148 22.5795 21.4207 22.5768C21.7266 22.5741 22.0192 22.4514 22.2355 22.2351C22.4518 22.0188 22.5745 21.7262 22.5772 21.4203C22.5798 21.1144 22.4622 20.8197 22.2497 20.5997L15.6499 13.9998L22.2497 7.40002C22.4622 7.17998 22.5798 6.88528 22.5772 6.57938C22.5745 6.27348 22.4518 5.98087 22.2355 5.76456C22.0192 5.54825 21.7266 5.42555 21.4207 5.4229C21.1148 5.42024 20.8201 5.53783 20.6 5.75035L14.0002 12.3502L7.40037 5.75035C7.17934 5.54308 6.88635 5.42994 6.58339 5.43486C6.28042 5.43978 5.99126 5.56238 5.77708 5.77671C5.5629 5.99104 5.44051 6.28029 5.4358 6.58326C5.4311 6.88622 5.54445 7.17914 5.75187 7.40002L12.3505 13.9998L5.7507 20.5997C5.63927 20.7073 5.55039 20.836 5.48925 20.9784C5.42811 21.1207 5.39592 21.2738 5.39458 21.4287C5.39323 21.5836 5.42275 21.7372 5.48141 21.8806C5.54007 22.024 5.6267 22.1543 5.73624 22.2638C5.84578 22.3734 5.97604 22.46 6.11942 22.5186C6.2628 22.5773 6.41643 22.6068 6.57134 22.6055C6.72624 22.6041 6.87933 22.5719 7.02167 22.5108C7.16401 22.4497 7.29275 22.3608 7.40037 22.2493L14.0002 15.6495Z"
									fill="#FFEECC"
								/>
							</g>
							<defs>
								<clipPath id="clip0_285_41">
									<rect
										width="28"
										height="28"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>

						<div className="absolute h-full justify-center items-center w-full">
							<img
								src={TxELogo}
								className="absolute bottom-10 w-2/5 animate-bounce"
								alt="logo"
							/>
						</div>
					</div>
				)}
			</div>

			<div className="hidden lg:flex cursor-pointer w-1/2 lg:w-1/6 h-fit">
				<BtnPrimary
					btnName={"Become a Volunteer"}
					// onClick={() => navigate("/register")}
					onClick={() => {
						// window.open("https://forms.gle/H3VvW1Ky71KFWMSCA");
						window.open("https://docs.google.com/forms/d/e/1FAIpQLScU7DjD_tw3aKC6i_l7W_ihkGXCZ_0CD1eTNNszsk4EbDRimA/viewform")
						// window.open("https://bit.ly/TxE2023");
					}}
				/>
			</div>
		</div>
	);
};

export default Navbar;
