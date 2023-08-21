import React from "react";
import animationData from "../assets/Attention Mark.json";
import Lottie from "react-lottie";
import "./Modals.css";
import FormBtn from "../registrationPage/eventregistration/components/Buttons/FormButton";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FailedModal = ({ onClose, message, secondMessage, btnFor }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/");
	};

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData, // This is the imported animation data
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div
			className="modal-overlay"
			onClick={onClose}>
			<div className="modall">
				<div className="modal-header">
					<div className="success-animation">
						<Lottie options={defaultOptions} />
					</div>
				</div>
				<div className="modal-content">
					<div className="modal-text">
						<h1>Oops!</h1>
						<p>{message}</p>
						<small>{secondMessage}</small>
						{/* <h2>TxE Summit 2023</h2> */}
					</div>
					<FormBtn
						onClick={handleNavigate}
						btnFor={btnFor}
					/>
				</div>
				<div className="modal-links">
					<NavLink
						to={"/grant"}
						className="grant-link">
						Apply for Grant
						{/* <img
							src={arrowlink1}
							alt=""
						/> */}
					</NavLink>
					<NavLink
						to={"/techsupport"}
						className="scholarship-link">
						Apply for Scholarship
						{/* <img
							src={arrowlink2}
							alt=""
						/> */}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default FailedModal;
