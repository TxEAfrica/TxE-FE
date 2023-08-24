import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import TicketPageCSS from "./TicketPage.module.css";
import Navbar from "../landingPage/sections/Navbar";
import BtnPrimary from "../landingPage/buttons/BtnPrimary";
import BtnSecondary from "../landingPage/buttons/BtnSecondary";
import Ticket from "./Ticket";
import { useNavigate, useParams } from "react-router-dom";
import Sponsors from "../landingPage/sections/Sponsors";
import Footer from "../landingPage/sections/Footer";
import { baseUrl } from "../api/BaseURL";

export default function TicketPage({}) {
	const { userId } = useParams();
	const [userData, setUserData] = useState(null);
	const ticketContainerRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`${baseUrl.url}/api/v1/${userId}`);
				const registrantData = await response.json();
				setUserData(registrantData.data);
			} catch (error) {
				throw error;
			}
		};

		fetchUserData();
	}, [userId]);

	const handleDownloadTicket = () => {
		if (ticketContainerRef.current) {
			html2canvas(ticketContainerRef.current).then((canvas) => {
				const ticketImageURL = canvas.toDataURL("image/png");

				// Create a download link
				const link = document.createElement("a");
				link.href = ticketImageURL;
				link.download = "ticket.png";
				link.click();
			});
		}
	};
	return (
		<div className="bg-black">
			<Navbar />
			<div className={TicketPageCSS.container}>
				{/* <Navbar /> */}
				<div
					id="ticket-container"
					className={TicketPageCSS.ticketContainer}>
					<h2>Hi {userData?.firstName},</h2>
					<div className={TicketPageCSS.ticketMessage}>
						<h1>Registration successful</h1>
						<p>
							You have successfully registered for Enugu Tech and
							Entrepreneurship summit scheduled to hold on the{" "}
							<span>30th September 2023.</span> Click on the link below to
							download your event ticket.
						</p>
					</div>
					<div id="ticket-container">
						<Ticket
							ticketContainerRef={ticketContainerRef}
							userData={userData}
						/>
					</div>

					<div className={TicketPageCSS.buttons}>
						<BtnPrimary
							btnName={"Download Ticket"}
							onClick={handleDownloadTicket}
						/>
						<BtnSecondary
							btnName={`${
								userData?.trackInterest === "entrepreneurship"
									? "Apply for Grant"
									: userData?.trackInterest === "technology"
									? "Apply for Tech Support"
									: "Please Register"
							}`}
							onClick={() => {
								if (userData?.trackInterest === "entrepreneurship") {
									window.open("https://forms.gle/h6reLGjNLYi7hC7E9", "_blank");
								} else if (userData?.trackInterest === "technology") {
									window.open("https://forms.gle/wvnbwGtwGCAqSiBh7", "_blank");
								} else {
									navigate("/register");
								}
							}}
						/>
					</div>
				</div>
			</div>

			<Sponsors />
			<Footer />
		</div>
	);
}
