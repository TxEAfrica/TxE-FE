import React, { useState, useEffect, useRef } from "react";
import "./EmailTemplate.css";
import Navbar from "../landingPage/sections/Navbar";
import BtnPrimary from "../landingPage/buttons/BtnPrimary";
import BtnSecondary from "../landingPage/buttons/BtnSecondary";
import Sponsors from "../landingPage/sections/Sponsors";
import Footer from "../landingPage/sections/Footer";
import Nav from "./Nav";

export default function EmailTemplate() {
	return (
		<div className="container w-full">
			<Nav />
			<div
				id="ticket-container"
				className="ticketContainer">
				<h2>Hi, FirstName</h2>
				<div className="ticketMessage">
					<h1>Registration successful</h1>
					<p>
						You have successfully registered for TXE Africa tech and
						Entrepreneurship program scheduled to hold on the{" "}
						<span> 29th of September 2023.</span> Click the button below to get
						a copy of your ticket, you are expect to present your ticket at the
						event before you can be granted access to the event.
					</p>
				</div>

				<div className="buttons">
					<BtnPrimary btnName={"Go to ticket page"} />
					<BtnSecondary btnName={"Go to website"} />
				</div>
			</div>
		</div>
	);
}
