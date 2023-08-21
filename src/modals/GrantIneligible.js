import React, { useState } from "react";
import "../modals/Modals.css";
import info from "../assets/info.svg";
import close from "../assets/close.svg";

export const GrantIneligible = ({ onClose }) => {
	const handleNavigate = () => {
		window.location.href = "/techsupport";
	};
	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className="modal-header">
					<div className="info">
						<img
							src={info}
							alt=""
						/>
						<p>Information</p>
					</div>
					<span onClick={onClose}>
						<img
							src={close}
							alt=""
						/>
					</span>
				</div>

				<div className="modal-content">
					<div className="success-animation">
						<svg
							width="150"
							height="150"
							viewBox="0 0 199 203"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g id="stop">
								<path
									id="cover"
									d="M137.952 13.6478L102.974 5.66424C100.687 5.1424 98.3127 5.1424 96.0264 5.66424L61.048 13.6478C58.7617 14.1697 56.6223 15.1999 54.7888 16.6621L26.7383 39.0316C24.9048 40.4938 23.4243 42.3503 22.4068 44.4632L6.84 76.788C5.82248 78.9009 5.2941 81.2159 5.2941 83.5611V119.439C5.2941 121.784 5.82248 124.099 6.84 126.212L22.4068 158.537C23.4243 160.65 24.9048 162.506 26.7383 163.968L54.7888 186.338C56.6223 187.8 58.7617 188.83 61.048 189.352L96.0264 197.336C98.3127 197.858 100.687 197.858 102.974 197.336L137.952 189.352C140.238 188.83 142.378 187.8 144.211 186.338L172.262 163.968C174.095 162.506 175.576 160.65 176.593 158.537L192.16 126.212C193.178 124.099 193.706 121.784 193.706 119.439V83.5611C193.706 81.2159 193.178 78.9009 192.16 76.788L176.593 44.4632C175.576 42.3503 174.095 40.4938 172.262 39.0316L144.211 16.6621C142.378 15.1999 140.238 14.1697 137.952 13.6478Z"
									fill="#C81515"
									stroke="#F88C8C"
									strokeWidth="10"
								/>
								<g id="icon">
									<g id="Group">
										<path
											id="Vector"
											d="M86.3966 66.3491L64.3491 88.9699V117.793L86.3966 139.841H115.793L137.841 117.793V88.9699L115.793 66.3491H86.3966Z"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											id="Vector_2"
											d="M115.793 103.095H86.3967"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<div className="modal-message">
						<h2>Hello there!</h2>
						<small>Only available for Entreprenuership Applicants</small>
						<p>
							You are not eligible for the business grant, as you already
							registered for the tech track.
						</p>
					</div>
				</div>

				<div className="modal-cta">
					<button
						onClick={handleNavigate}
						className="btn2">
						Register for Tech Support
					</button>
				</div>
			</div>
		</div>
	);
};
