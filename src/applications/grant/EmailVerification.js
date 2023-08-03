// EmailVerification.js
import React, { useState } from "react";
import InputField from "../../registrationPage/eventregistration/components/InputField/InputField";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import ApplyForGrantCSS from "../grant/ApplyForGrant.module.css";
import FailedModal from "../../modals/FailedModal";
import { useNavigate, Navigate } from "react-router-dom";

const EmailVerification = ({ onSuccess, onUserData }) => {
	const [email, setEmail] = useState("");
	const [verificationFailed, setVerificationFailed] = useState(false);
	const [showFailedModal, setShowFailedModal] = useState(false);
	const [failedModalMessage, setFailedModalMessage] = useState("");
	const [failedSecondModalMessage, setFailedSecondModalMessage] = useState("");
	const { buttonMessage, setButtonMessage } = useState("");
	// const { handleNavigate, setHandleNavigate } = useState({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleVerifyEmail = (e) => {
		e.preventDefault();
		if (!emailRegex.test(email)) {
			setVerificationFailed(true);
			setFailedModalMessage("Please enter a valid email address");
			return;
		}

		fetch(`https://txe-africa.onrender.com/api/v1/${email}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data && data.data.trackInterest === "entrepreneurship") {
					setVerificationFailed(false);
					onSuccess(data, true); // Pass the user data and verification status back to the parent component
				} else {
					setVerificationFailed(true);
					setFailedModalMessage("You are ineligible to apply for a Grant");
					setFailedSecondModalMessage(
						"This grant is only available to Entrepreneur Applicants"
					);
					setButtonMessage("Click here to apply for Tech Support");
					// setHandleNavigate(() => Navigate("/"));
					onSuccess(null, false); // Pass null as user data and verification status back to the parent component
				}
			})
			.catch((error) => {
				setVerificationFailed(true);
				// setFailedModalMessage("You have not registered for the event");
				// setFailedSecondModalMessage(
				// 	"Kindly Register for TxE Summit 2023"
				// );
				onSuccess(null, false); // Pass null as user data and verification status back to the parent component
			});
	};

	return (
		<div className={ApplyForGrantCSS.mainn}>
			<form>
				<InputField
					labelText="Email Address"
					placeholder="Verify email address"
					htmlFor="email"
					inputId="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<div>
					<FormBtn
						btnFor="Next"
						onClick={handleVerifyEmail}
					/>
				</div>
			</form>

			{verificationFailed && (
				<div>
					<FailedModal
						onClose={() => window.location.reload()}
						message={failedModalMessage}
						secondMessage={failedSecondModalMessage}
						btnFor={buttonMessage}
					/>
				</div>
			)}
		</div>
	);
};

export default EmailVerification;
