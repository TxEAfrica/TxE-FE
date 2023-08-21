// EmailVerification.js
import React, { useState } from "react";
import InputField from "../../registrationPage/eventregistration/components/InputField/InputField";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import ApplyForTechSupportCSS from "../techSupport/ApplyForTechSupport.module.css";
import FailedModal from "../../modals/FailedModal";
import { GrantIneligible } from "../../modals/GrantIneligible";
import { useNavigate, Navigate } from "react-router-dom";
import { NotRegistered } from "../../modals/NotRegistered";
import { InvalidEmail } from "../../modals/InvalidEmail";
import { NetworkError } from "../../modals/NetworkError";
import { baseUrl } from "../../api/BaseURL";

const EmailVerification = ({ onSuccess, onUserData }) => {
	const [email, setEmail] = useState("");
	const [verificationFailed, setVerificationFailed] = useState(false);
	const [showGrantIneligible, setShowGrantIneligible] = useState(false);
	const [showNotRegistered, setShowNotRegistered] = useState(false);
	const [showInvalidEmail, setShowInvalidEmail] = useState(false);
	const [showNetworkError, setShowNetworkError] = useState(false);
	const [loading, setLoading] = useState(false);

	// const { handleNavigate, setHandleNavigate } = useState({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleVerifyEmail = (e) => {
		e.preventDefault();
		if (!emailRegex.test(email)) {
			setVerificationFailed(true);
			setShowInvalidEmail(true);
			return;
		}
		setLoading(true);

		fetch(`${baseUrl.url}/api/v1/verify/${email}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setLoading(false);
				if (!data || !data.data) {
					setShowNotRegistered(true);
				} else {
					const trackInterest = data.data.trackInterest;

					if (trackInterest === "technology") {
						setVerificationFailed(false);
						onSuccess(data, true);
					} else if (trackInterest === "entrepreneurship") {
						setVerificationFailed(true);
						setShowGrantIneligible(true);
					} else {
						setVerificationFailed(true);
						setShowNetworkError(true);
						// Handle other cases here
					}
				}
			})
			.catch((error) => {
				setLoading(false);
				// console.log("API Fetch Error:", error);

				// Check if the error is network-related
				if (
					error instanceof TypeError &&
					error.message.includes("Failed to fetch")
				) {
					// Show the NetworkError modal
					setShowNetworkError(true);
				} else {
					// Handle other types of errors here
					onSuccess(null, false);
				}
			});
	};

	return (
		<div className={ApplyForTechSupportCSS.mainn}>
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

				{loading ? (
					<button className="btn3">Please wait...</button>
				) : (
					<FormBtn
						btnFor="Next"
						onClick={handleVerifyEmail}
					/>
				)}
			</form>

			{showGrantIneligible && (
				<div>
					<GrantIneligible onClose={() => setShowGrantIneligible(false)} />
				</div>
			)}
			{showNotRegistered && (
				<div>
					<NotRegistered onClose={() => setShowNotRegistered(false)} />
				</div>
			)}
			{showInvalidEmail && (
				<div>
					<InvalidEmail onClose={() => setShowInvalidEmail(false)} />
				</div>
			)}
			{showNetworkError && (
				<div>
					<NetworkError onClose={() => setShowNetworkError(false)} />
				</div>
			)}
		</div>
	);
};

export default EmailVerification;
