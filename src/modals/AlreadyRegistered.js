import React from "react";
import "../modals/Modals.css";
import info from "../assets/info.svg";
import linkarrow1 from "../assets/link-arrow1.svg";
import linkarrow2 from "../assets/link-arrow2.svg";
import close from "../assets/close.svg";
import { NavLink } from "react-router-dom";

export const AlreadyRegistered = () => {
	const handleRefresh = () => {
		window.location.reload(); // Refresh the page
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
					<span onClick={handleRefresh}>
						<img
							src={close}
							alt=""
						/>
					</span>
				</div>

				<div className="modal-content">
					<div className="success-animation">
						<svg
							className="svg"
							width="150"
							height="150"
							viewBox="0 0 203 203"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								id="cover"
								d="M145.798 16.6932L105.54 5.90619C102.893 5.19699 100.107 5.19699 97.4598 5.90619L57.202 16.6932C54.5552 17.4024 52.1418 18.7959 50.2042 20.7334L20.7334 50.2042C18.7959 52.1418 17.4024 54.5552 16.6932 57.202L5.90619 97.4598C5.19699 100.107 5.19699 102.893 5.90619 105.54L16.6932 145.798C17.4024 148.445 18.7959 150.858 20.7334 152.796L50.2042 182.267C52.1418 184.204 54.5552 185.598 57.202 186.307L97.4598 197.094C100.107 197.803 102.893 197.803 105.54 197.094L145.798 186.307C148.445 185.598 150.858 184.204 152.796 182.267L182.267 152.796C184.204 150.858 185.598 148.445 186.307 145.798L197.094 105.54C197.803 102.893 197.803 100.107 197.094 97.4598L186.307 57.202C185.598 54.5552 184.204 52.1418 182.267 50.2042L152.796 20.7334C150.858 18.7959 148.445 17.4024 145.798 16.6932Z"
								fill="#F01919"
								stroke="#F88C8C"
								stroke-width="10"
							/>
							<path
								d="M101.258 70.0237C110.516 70.0237 119.395 73.7015 125.942 80.2482C132.488 86.7948 136.166 95.6739 136.166 104.932C136.166 114.191 132.488 123.07 125.942 129.616C119.395 136.163 110.516 139.841 101.258 139.841C91.9993 139.841 83.1202 136.163 76.5736 129.616C70.027 123.07 66.3491 114.191 66.3491 104.932C66.3491 95.6739 70.027 86.7948 76.5736 80.2482C83.1202 73.7015 91.9993 70.0237 101.258 70.0237ZM101.258 73.6983C92.9739 73.6983 85.0294 76.989 79.1719 82.8465C73.3144 88.704 70.0237 96.6485 70.0237 104.932C70.0237 113.216 73.3144 121.16 79.1719 127.018C85.0294 132.875 92.9739 136.166 101.258 136.166C105.359 136.166 109.421 135.358 113.21 133.789C117 132.219 120.443 129.918 123.343 127.018C126.244 124.118 128.544 120.674 130.114 116.885C131.684 113.095 132.492 109.034 132.492 104.932C132.492 96.6485 129.201 88.704 123.343 82.8465C117.486 76.989 109.541 73.6983 101.258 73.6983ZM99.4204 88.3966V95.7458H103.095V88.3966H99.4204ZM99.4204 103.095V121.468H103.095V103.095H99.4204Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="modal-message">
						<h2>Oops!</h2>
						<p>Looks like you have already registered for this event.</p>
						<small>Kindly check your email for your ticket. </small>
					</div>
				</div>

				<div className="modal-cta">
					<button className="btn1">Contact us</button>
					<button className="btn2">Event Schedule</button>
				</div>
			</div>
		</div>
	);
};
