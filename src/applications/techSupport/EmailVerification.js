// EmailVerification.js
import React, { useState } from "react";
import InputField from "../../registrationPage/eventregistration/components/InputField/InputField";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import ApplyForTechSupportCSS from "../techSupport/ApplyForTechSupport.module.css";
import FailedModal from "../../modals/FailedModal";
import { TechIneligible } from "../../modals/TechIneligible";
import { useNavigate, Navigate } from "react-router-dom";
import { NotRegistered } from "../../modals/NotRegistered";
import { InvalidEmail } from "../../modals/InvalidEmail";
import { NetworkError } from "../../modals/NetworkError";
import { baseUrl } from "../../api/BaseURL";

const EmailVerification = ({ onSuccess, onUserData }) => {
	const [email, setEmail] = useState("");
	const [verificationFailed, setVerificationFailed] = useState(false);
	const [showTechIneligible, setShowTechIneligible] = useState(false);
	const [showNotRegistered, setShowNotRegistered] = useState(false);
	const [showInvalidEmail, setShowInvalidEmail] = useState(false);
	const [showNetworkError, setShowNetworkError] = useState(true);
	const [loading, setLoading] = useState(false);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleVerifyEmail = (e) => {
		e.preventDefault();

		setLoading(true);

		if (!emailRegex.test(email)) {
			setVerificationFailed(true);
			setShowInvalidEmail(true);
			setLoading(false);
			return;
		}

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
						setShowTechIneligible(true);
					} else {
						setVerificationFailed(true);
						setShowNetworkError(true);
					}
				}
			})
			.catch((error) => {
				setLoading(false);

				// Check if the error is network-related
				if (
					error instanceof TypeError &&
					error.message.includes("Failed to fetch")
				) {
					setShowNetworkError(true);
				} else {
					onSuccess(null, false);
				}
			});
	};

	return (
		<div className={ApplyForTechSupportCSS.mainn}>
			<form
				method="GET"
				onSubmit={handleVerifyEmail}>
				<InputField
					labelText="Email Address"
					placeholder="Verify email address"
					htmlFor="email"
					inputId="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<FormBtn
					btnFor={loading ? "Please wait..." : "Next"}
					isLoading={loading}
				/>
			</form>

			{showTechIneligible && (
				<div>
					<TechIneligible onClose={() => setShowTechIneligible(false)} />
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
