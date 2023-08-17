import React, { useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";
import TicketPageCSS from "./TicketPage.module.css";

export default function Ticket({ userData }) {
	return (
		<div className={TicketPageCSS.mainticket}>
			<div className={TicketPageCSS.ticketTitle}>
				<p>SUMMIT TICKET</p>
			</div>
			<div className={TicketPageCSS.ticketBody}>
				<div className={TicketPageCSS.part}>
					<h2>TxE SUMMIT 2023</h2>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="198"
					height="198"
					viewBox="0 0 198 198"
					fill="none">
					<g clip-path="url(#clip0_1472_1751)">
						<path
							d="M31.3752 21.9821C29.0533 21.9821 26.8266 22.9045 25.1848 24.5463C23.5429 26.1881 22.6206 28.4149 22.6206 30.7368V65.7554H66.3938V21.9821H31.3752ZM55.4505 54.8121H33.5639V32.9254H55.4505V54.8121Z"
							fill="black"
						/>
						<path
							d="M22.6206 166.434C22.6206 168.756 23.5429 170.983 25.1848 172.624C26.8266 174.266 29.0533 175.189 31.3752 175.189H66.3938V131.415H22.6206V166.434ZM33.5639 142.359H55.4505V164.245H33.5639V142.359Z"
							fill="black"
						/>
						<path
							d="M132.054 175.189H167.072C169.394 175.189 171.621 174.266 173.263 172.624C174.905 170.983 175.827 168.756 175.827 166.434V131.415H132.054V175.189ZM142.997 142.359H164.884V164.245H142.997V142.359Z"
							fill="black"
						/>
						<path
							d="M167.072 21.9821H132.054V65.7554H175.827V30.7368C175.827 28.4149 174.905 26.1881 173.263 24.5463C171.621 22.9045 169.394 21.9821 167.072 21.9821ZM164.884 54.8121H142.997V32.9254H164.884V54.8121Z"
							fill="black"
						/>
						<path
							d="M110.167 54.8121V43.8688H88.2805V65.7554H99.2238V54.8121H110.167Z"
							fill="black"
						/>
						<path
							d="M66.3939 65.7554H77.3372V76.6987H66.3939V65.7554Z"
							fill="black"
						/>
						<path
							d="M77.3372 76.6987H99.2239V87.642H77.3372V76.6987Z"
							fill="black"
						/>
						<path
							d="M110.167 32.9254V43.8687H121.111V21.9821H77.3372V43.8687H88.2806V32.9254H110.167Z"
							fill="black"
						/>
						<path
							d="M22.6206 76.6987H33.5639V98.5854H22.6206V76.6987Z"
							fill="black"
						/>
						<path
							d="M66.3938 87.642V98.5854H55.4505V76.6987H44.5072V98.5854H33.5639V109.529H22.6206V120.472H44.5072V109.529H55.4505V120.472H66.3938V109.529H77.3371V87.642H66.3938Z"
							fill="black"
						/>
						<path
							d="M110.167 87.642H121.11V98.5853H132.054V87.642H142.997V76.6987H121.11V54.8121H110.167V65.7554H99.2238V76.6987H110.167V87.642Z"
							fill="black"
						/>
						<path
							d="M99.2239 164.245H77.3372V175.189H121.111V164.245H110.167V153.302H99.2239V164.245Z"
							fill="black"
						/>
						<path
							d="M121.11 109.529V98.5853H110.167V87.642H99.2238V98.5853H88.2805V109.529H99.2238V120.472H110.167V109.529H121.11Z"
							fill="black"
						/>
						<path
							d="M164.884 109.529H175.827V120.472H164.884V109.529Z"
							fill="black"
						/>
						<path
							d="M121.11 109.529H153.94V120.472H121.11V109.529Z"
							fill="black"
						/>
						<path
							d="M164.884 76.6987H153.94V87.642H142.997V98.5854H153.94V109.529H164.884V98.5854H175.827V87.642H164.884V76.6987Z"
							fill="black"
						/>
						<path
							d="M110.167 120.472H121.111V153.302H110.167V120.472Z"
							fill="black"
						/>
						<path
							d="M77.3372 153.302H88.2806V142.359H99.2239V131.415H88.2806V109.529H77.3372V153.302Z"
							fill="black"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1472_1751">
							<rect
								width="196.98"
								height="196.98"
								fill="white"
								transform="translate(0.734039 0.09552)"
							/>
						</clipPath>
					</defs>
				</svg>
				<p>ID: 56789535675</p>
			</div>
		</div>
	);
}
