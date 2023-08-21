import React, { useRef, useEffect } from "react";
import QRCode from "qrcode.react";
import TicketPageCSS from "./TicketPage.module.css";

export default function Ticket({ userData, ticketContainerRef }) {
	return (
		<div
			ref={ticketContainerRef}
			className={TicketPageCSS.mainticket}>
			<div className={TicketPageCSS.ticketTitle}>
				<p>SUMMIT TICKET</p>
			</div>
			<div className={TicketPageCSS.ticketBody}>
				<div className={TicketPageCSS.part}>
					<h2 className="text-center">TxE SUMMIT 2023</h2>
				</div>
				<div className={TicketPageCSS.part}>
					<div className={TicketPageCSS.partHolder}>
						<p>Name:</p>
						<div className={TicketPageCSS.partInner}>
							<p>{userData?.firstName + " " + userData?.lastName}</p>
						</div>
					</div>
					<div className={TicketPageCSS.partHolder}>
						<p>Date:</p>
						<div className={TicketPageCSS.partInner}>
							<p>29•09•2023</p>
						</div>
					</div>
				</div>
				<div className={TicketPageCSS.part}>
					<div className={TicketPageCSS.partHolder}>
						<p>Event Type:</p>
						<div className={TicketPageCSS.partInner}>
							<p>{userData?.trackInterest} summit </p>
						</div>
					</div>
				</div>
				<div className={TicketPageCSS.part}>
					<div className={TicketPageCSS.partHolder}>
						<p>Event Address:</p>
						<div className={TicketPageCSS.partInner}>
							<p>Golden Heart Event centre, Emene</p>
						</div>
					</div>
				</div>
			</div>
			<div className={TicketPageCSS.ticketStub}>
				<small>Scan to check in</small>
				<QRCode
					value={userData?.id}
					size={100}
				/>
				<small className="text-center">{userData?.id}</small>
			</div>
		</div>
	);
}
