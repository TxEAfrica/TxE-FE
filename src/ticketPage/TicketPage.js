import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import ReactDOM from "react-dom";
import TicketPageCSS from "./TicketPage.module.css";
import Navbar from "../landingPage/sections/Navbar";
import BtnPrimary from "../landingPage/buttons/BtnPrimary";
import BtnSecondary from "../landingPage/buttons/BtnSecondary";
import Ticket from "./Ticket";
import { useParams } from "react-router-dom";
import Sponsors from "../landingPage/sections/Sponsors";
import Footer from "../landingPage/sections/Footer";

export default function TicketPage({}) {
	const { userId } = useParams();
	const [userData, setUserData] = useState(null);
	const ticketContainerRef = useRef(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// Fetch user data using the email...
				const response = await fetch(
					`https://txe-africa.onrender.com/api/v1/${userId}`
				);
				const registrantData = await response.json();
				console.log("Fetched user data:", registrantData);
				setUserData(registrantData.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
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
		<div>
			<div className={TicketPageCSS.container}>
				<Navbar />
				<div
					id="ticket-container"
					className={TicketPageCSS.ticketContainer}>
					<h2>Hi {userData?.firstName},</h2>
					<div className={TicketPageCSS.ticketMessage}>
						<h1>Registration successful</h1>
						<p>
							You have successfully registered for TXE Africa Tech and
							Entrepreneurship program scheduled to hold on the 29th and 30th of
							July 2023. Click on the link below to download your event ticket.
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
						<BtnSecondary btnName={"Go to Website"} />
					</div>
				</div>
			</div>

			<Sponsors />
			<Footer />
		</div>
	);
}
