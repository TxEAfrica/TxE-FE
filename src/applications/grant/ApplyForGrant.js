// MainForm.js
import React, { useState } from "react";
import EmailVerification from "./EmailVerification";
import InputOption from "../../registrationPage/eventregistration/components/InputOption/InputOption";
import InputField from "../../registrationPage/eventregistration/components/InputField/InputField";
import InputFieldNon from "../../registrationPage/eventregistration/components/InputFieldNon/InputFieldNon";
import TextArea from "../../registrationPage/eventregistration/components/TextArea/TextArea";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import FormVector from "../FormVector";
import Navbar from "../../landingPage/sections/Navbar";
import Footer from "../../landingPage/sections/Footer";
import ApplyForGrantCSS from "../grant/ApplyForGrant.module.css";
import GrantSuccess from "../../modals/GrantSuccess";
import "../../landingPage/Landing.css";
import { NetworkError } from "../../modals/NetworkError";
import Sponsors from "../../landingPage/sections/Sponsors";

const ApplyForGrant = () => {
	const [isEmailVerified, setIsEmailVerified] = useState(false);
	const [userData, setUserData] = useState({});
	const [businessName, setBusinessName] = useState("");
	const [businessLocation, setBusinessLocation] = useState("");
	const [operationMonths, setOperationMonths] = useState("");
	const [isBusinessRegistered, setIsBusinessRegistered] = useState("");
	const [cacDocument, setCacDocument] = useState("");
	const [whyNeedGrant, setWhyNeedGrant] = useState("");
	const [videoLink, setVideoLink] = useState("");
	const [whyNotRegistered, setWhyNotRegistered] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [showGrantSuccess, setShowGrantSuccess] = useState(false);
	const [showNetworkError, setShowNetworkError] = useState(false);
	const [loading, setLoading] = useState(false);

	const { firstName, lastName, email, phoneNumber, country, state, gender } =
		userData || {};

	const handleEmailVerificationSuccess = (userData, verificationStatus) => {
		setIsEmailVerified(verificationStatus);
		if (userData) {
			setUserData(userData);
		}
	};

	const validateFields = () => {
		// Additional validation based on the "isBusinessRegistered" value
		if (isBusinessRegistered === "yes") {
			if (
				businessName.trim() === "" ||
				businessLocation.trim() === "" ||
				operationMonths.trim() === "" ||
				cacDocument.trim() === "" ||
				whyNeedGrant.trim() === "" ||
				videoLink.trim() === ""
			) {
				return false;
			}
		}

		if (isBusinessRegistered === "no") {
			if (
				whyNotRegistered.trim() === "" ||
				businessLocation.trim() === "" ||
				operationMonths.trim() === "" ||
				whyNeedGrant.trim() === "" ||
				videoLink.trim() === ""
			) {
				return false;
			}
		}

		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Data from readOnly input fields (prepopulated data)
		const readOnlyData = {
			firstName: userData?.data?.firstName || "",
			lastName: userData?.data?.lastName || "",
			email: userData?.data?.email || "",
			phoneNumber: userData?.data?.phoneNumber || "",
			country: userData?.data?.country || "",
			state: userData?.data?.state || "",
			gender: userData?.data?.gender || "",
		};

		// Data from editable input fields
		const editableData = {
			businessName,
			businessLocation,
			operationMonths,
			isBusinessRegistered,
			cacDocument,
			whyNeedGrant,
			videoLink,
			whyNotRegistered,
		};

		// Combine both data sets
		const grantFormData = { ...readOnlyData, ...editableData };

		// Check if all visible fields are not empty
		if (!validateFields(editableData)) {
			setErrorMessage("Please fill in all required fields.");
			return;
		}

		// Reset error message if validation passes
		setErrorMessage("");

		setLoading(true);

		try {
			// Make the POST request to the API
			const response = await fetch(
				"https://txe-africa.onrender.com/api/v1/register/grant",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(grantFormData),
				}
			);
			// console.log(response)

			// console.log(grantFormData);

			if (response.status === 200) {
				setShowGrantSuccess(true);
			}
		} catch (error) {
			setLoading(false);
			// console.log("API Fetch Error:", error);

			// Check if the error is network-related
			if (
				error instanceof TypeError &&
				error.message.includes("Failed to fetch")
			) {
				// Show the NetworkError modal
				setShowNetworkError(true);
			}
		}
	};

	return (
		<div>
			{/* <Navbar /> */}

			<div
				id="top"
				className={`relative bg-orange-50 h-fit flex flex-col justify-center items-center mx-auto relative py-20 ${ApplyForGrantCSS.heading}`}>
				<div className={ApplyForGrantCSS.decor}>
					{/* <FormVector position={"left-10 top-10"} /> */}
					<FormVector position={"top-10"} />
					<FormVector position={"right-10 top-30"} />
					<FormVector position={"left-10"} />
					{/* <FormVector position={'right-10'} /> */}
				</div>

				<div
					className={`text-center w-1/2 mt-15 space-y-3 ${ApplyForGrantCSS.title}`}>
					<h1 className="text-5xl text-orange-500 font-semibold">
						Apply For {"Grant"}
					</h1>
					<p>Need it? Go for it!</p>
					<h3 className="text-xl font-semibold">
						{"Only available for Grant Applicants"}
					</h3>
				</div>
				{/* ... (other JSX content) */}
				<div className={ApplyForGrantCSS.main}>
					{isEmailVerified ? (
						// Render the main form if email is verified
						// Use the received userData for the non-editable fields
						<form onSubmit={handleSubmit}>
							{/* Non-editable fields */}

							<div className={ApplyForGrantCSS.smallinputholder}>
								<InputFieldNon
									labelText="First Name"
									htmlFor="firstName" //
									inputId="firstName" //
									type="firstName"
									value={userData.data.firstName || ""}
								/>
								<InputFieldNon
									labelText="Last Name"
									htmlFor="lastName" //
									inputId="lastName" //
									type="lastName"
									value={userData.data.lastName || ""}
								/>
							</div>

							<InputFieldNon
								labelText="Email address"
								htmlFor="email" //
								inputId="email" //
								type="email"
								value={userData.data.email || ""}
								// onChange={(e) => setEmail(e.target.value)}
							/>

							<div className={ApplyForGrantCSS.smallinputholder}>
								<InputFieldNon
									labelText="Gender"
									htmlFor="gender" //
									inputId="gender" //
									type="gender"
									value={userData.data.gender || ""}
								/>
								<InputFieldNon
									labelText="Phone Number"
									htmlFor="phoneNumber" //
									inputId="phoneNumber" //
									type="phoneNumber"
									value={userData.data.phoneNumber || ""}
								/>
							</div>

							<div className={ApplyForGrantCSS.smallinputholder}>
								<InputFieldNon
									labelText="Country"
									htmlFor="country" //
									inputId="country" //
									type="country"
									value={userData.data.country || ""}
								/>
								<InputFieldNon
									labelText="State"
									htmlFor="state" //
									inputId="state" //
									type="state"
									value={userData.data.state || ""}
								/>
							</div>

							{/* Editable fields */}

							<InputField
								labelText="Business Name"
								placeholder={"Enter Business Name"}
								htmlFor="businessName" //
								inputId="businessName" //
								type="businessName"
								value={businessName}
								onChange={(e) => setBusinessName(e.target.value)}
							/>
							<InputField
								labelText="Business Location"
								placeholder={"Enter Business Location"}
								htmlFor="businessLocation" //
								inputId="businessLocation" //
								type="businessLocation"
								value={businessLocation}
								onChange={(e) => setBusinessLocation(e.target.value)}
							/>
							<InputField
								labelText="How many months has your business been in operation?"
								placeholder={"Enter here"}
								htmlFor="operationMonths" //
								inputId="operationMonths" //
								type="operationMonths"
								value={operationMonths}
								onChange={(e) => setOperationMonths(e.target.value)}
							/>

							{/* Radio buttons for "Is your business registered?" */}
							<div>
								<label>
									<InputOption
										descriptionLabelText="Is your business registered?"
										options={[
											{ label: "Yes", value: "yes" },
											{ label: "No", value: "no" },
										]}
										initialSelection={isBusinessRegistered}
										updatedSelection={setIsBusinessRegistered}
									/>
								</label>
							</div>

							{/* Conditional Form */}
							{isBusinessRegistered && (
								<div>
									{/* Common input field for both "Yes" and "No" choices */}

									{/* Input fields for "Yes" choice */}
									{isBusinessRegistered === "yes" && (
										<div className={ApplyForGrantCSS.inputt}>
											<InputField
												labelText="if yes, Paste a link to your CAC document"
												placeholder={"Paste link here"}
												htmlFor="cacDocument" // Pass the htmlFor prop for label element
												inputId="cacDocument" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={cacDocument}
												onChange={(e) => setCacDocument(e.target.value)}
											/>

											<TextArea
												labelText="Why do you need a grant?"
												placeholder={"Tell us why"}
												htmlFor="whyNeedGrant" // Pass the htmlFor prop for label element
												inputId="whyNeedGrant" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={whyNeedGrant}
												onChange={(e) => setWhyNeedGrant(e.target.value)}
											/>

											<InputField
												labelText="Paste a link to a 1-minute video explaining why you need a grant"
												placeholder={"Paste link here"}
												htmlFor="videoLink" // Pass the htmlFor prop for label element
												inputId="videoLink" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={videoLink}
												onChange={(e) => setVideoLink(e.target.value)}
											/>
										</div>
									)}

									{/* Input fields for "No" choice */}
									{isBusinessRegistered === "no" && (
										<div className={ApplyForGrantCSS.inputt}>
											<TextArea
												labelText="if No, why?"
												placeholder={"Write here"}
												htmlFor="whyNotRegistered" // Pass the htmlFor prop for label element
												inputId="whyNotRegistered" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={whyNotRegistered}
												onChange={(e) => setWhyNotRegistered(e.target.value)}
											/>
											<TextArea
												labelText="Why do you need a grant?"
												placeholder={"Tell us why"}
												htmlFor="whyNeedGrant" // Pass the htmlFor prop for label element
												inputId="whyNeedGrant" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={whyNeedGrant}
												onChange={(e) => setWhyNeedGrant(e.target.value)}
											/>

											<InputField
												labelText="Paste a link to a 1-minute video explaining why you need a grant"
												placeholder={"Paste link here"}
												htmlFor="videoLink" // Pass the htmlFor prop for label element
												inputId="videoLink" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={videoLink}
												onChange={(e) => setVideoLink(e.target.value)}
											/>
										</div>
									)}
								</div>
							)}

							{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

							{/* Submit button */}

							{loading ? (
								<button className="btn2">Please wait...</button>
							) : (
								<FormBtn btnFor="Submit" />
							)}
						</form>
					) : (
						// Render the EmailVerification component if email is not verified
						<div className={ApplyForGrantCSS.mainn}>
							<EmailVerification
								onSuccess={handleEmailVerificationSuccess}
								initialUserData={userData}
							/>
						</div>
					)}
				</div>
			</div>

			<div className="bg-gray-200 h-fit w-full">
				<Sponsors />
			</div>

			<Footer />
			{showGrantSuccess && <GrantSuccess />}
			{showNetworkError && (
				<NetworkError onClose={() => setShowNetworkError(false)} />
			)}
		</div>
	);
};

export default ApplyForGrant;
