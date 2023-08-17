import React from "react";
import TicketPageCSS from "./TicketPage.module.css";
import Navbar from "../landingPage/sections/Navbar";
import BtnPrimary from "../landingPage/buttons/BtnPrimary";
import BtnSecondary from "../landingPage/buttons/BtnSecondary";
import Ticket from "./Ticket";

export default function TicketPage() {
	return (
		<div className={TicketPageCSS.container}>
			<Navbar />
			<div
				id="ticket-container"
				className={TicketPageCSS.ticketContainer}>
				<h2>Hi Miracle,</h2>
				<div className={TicketPageCSS.ticketMessage}>
					<h1>Registration successful</h1>
					<p>
						You have successfully registered for TXE Africa tech and
						Entrepreneurship program scheduled to hold on the 29th and 30th of
						July 2023. Click on the link below to download your event ticket.
					</p>
				</div>
				<Ticket />

				<div className={TicketPageCSS.buttons}>
					<BtnPrimary btnName={"Download Ticket"} />
					<BtnSecondary btnName={"Go to Website"} />
				</div>
			</div>
		</div>
	);
}
