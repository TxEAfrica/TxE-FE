import React, { useState } from "react";
import EmailVerification from "../techSupport/EmailVerification";
import InputOption from "../../registrationPage/eventregistration/components/InputOption/InputOption";
import InputField from "../../registrationPage/eventregistration/components/InputField/InputField";
import InputFieldNon from "../../registrationPage/eventregistration/components/InputFieldNon/InputFieldNon";
import TextArea from "../../registrationPage/eventregistration/components/TextArea/TextArea";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import FormVector from "../FormVector";
import Navbar from "../../landingPage/sections/Navbar";
import Footer from "../../landingPage/sections/Footer";
import ApplyForTechSupportCSS from "../techSupport/ApplyForTechSupport.module.css";
import GrantSuccess from "../../modals/GrantSuccess";
import TechSuccess from "../../modals/TechSuccess";
import "../../landingPage/Landing.css";
import { NetworkError } from "../../modals/NetworkError";
import Sponsors from "../../landingPage/sections/Sponsors";
import ImageUploader from "../category/validated-applicants/uploader/ImageUploader";
import { RequiredFields } from "../../modals/RequiredFields";

export default function ApplyForTechSupport() {
	const [isEmailVerified, setIsEmailVerified] = useState(false);
	const [userData, setUserData] = useState({});
	const [showTechSuccess, setShowTechSuccess] = useState(false);
	const [showRequiredFields, setShowRequiredFields] = useState(false);
	const [showNetworkError, setShowNetworkError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [imageChange, setImageChange] = useState("");
	const [supportInterest, setSupportInterest] = useState("");
	const [track, setTrack] = useState("");
	const [sixMonthsAvailable, setSixMonthsAvailable] = useState("");
	const [haveALaptop, setHaveALaptop] = useState("");
	const [whyLaptop, setWhyLaptop] = useState("");
	const [pictureEvidence, setPictureEvidence] = useState("");
	const [showUpForInterview, setShowUpForInterview] = useState("");
	const [whyNotShowUpForInterview, setWhyNotShowUpForInterview] = useState("");
	const [whyParticipateInScholarship, setWhyParticipateInScholarship] =
		useState("");
	const [
		didYouParticipateInFirstScholarship,
		setDidYouParticipateInFirstScholarship,
	] = useState("");
	const [aboutYou, setAboutYou] = useState("");
	const { firstName, lastName, email, phoneNumber, country, state, gender } =
		userData || {};

	const handleEmailVerificationSuccess = (userData, verificationStatus) => {
		setIsEmailVerified(verificationStatus);
		if (userData) {
			setUserData(userData);
		}
	};

	const validateFields = () => {
		if (!supportInterest) {
			// If supportInterest is empty
			return false;
		}

		if (supportInterest === "Laptop") {
			if (
				(whyLaptop.trim() === "" && imageChange === "") ||
				(whyNotShowUpForInterview.trim() === "" && showUpForInterview === "") ||
				aboutYou.trim() === ""
			) {
				return false;
			}
		}

		if (supportInterest === "Scholarship") {
			if (whyParticipateInScholarship.trim() === "") {
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
			supportInterest,
			track,
			sixMonthsAvailable,
			whyParticipateInScholarship,
			haveALaptop,
			didYouParticipateInFirstScholarship,
			whyLaptop,
			pictureEvidence,
			showUpForInterview,
			whyNotShowUpForInterview,
			aboutYou,
		};

		// Combine both data sets
		const techSupportFormData = { ...readOnlyData, ...editableData };

		// Check if all visible fields are not empty
		if (!validateFields(editableData)) {
			setShowRequiredFields(true);
			return;
		}

		// Reset error message if validation passes
		setShowRequiredFields(false);

		setLoading(true);

		try {
			// Make the POST request to the API
			const response = await fetch(
				"https://txe-africa.onrender.com/api/v1/register/tech",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(techSupportFormData),
				}
			);
			// console.log(response);

			setLoading(false);

			if (response.status === 200) {
				console.log("Form data sent:", techSupportFormData);
				setShowTechSuccess(true);
			}
		} catch (error) {
			setLoading(false);
			console.log("API Fetch Error:", error);

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
				className={`relative bg-orange-50 h-fit flex flex-col justify-center items-center mx-auto relative py-20 ${ApplyForTechSupportCSS.heading}`}>
				<div className={ApplyForTechSupportCSS.decor}>
					{/* <FormVector position={"left-10 top-10"} /> */}
					{/* <FormVector position={"top-10"} /> */}
					<FormVector position={"right-10 top-30"} />
					<FormVector position={"left-10"} />
					{/* <FormVector position={'right-10'} /> */}
				</div>

				<div
					className={`text-center w-1/2 mt-15 space-y-3 ${ApplyForTechSupportCSS.title}`}>
					<h1 className="text-5xl text-orange-500 font-semibold">
						Apply For {"Tech Support"}
					</h1>
					<p>Need it? Go for it!</p>
					<h3 className="text-xl font-semibold">
						{"Only available for Technology Applicants"}
					</h3>
				</div>
				{/* ... (other JSX content) */}
				<div className={ApplyForTechSupportCSS.main}>
					{isEmailVerified ? (
						// Render the main form if email is verified
						// Use the received userData for the non-editable fields
						<form onSubmit={handleSubmit}>
							{/* Non-editable fields */}

							<div className={ApplyForTechSupportCSS.smallinputholder}>
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

							<div className={ApplyForTechSupportCSS.smallinputholder}>
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

							<div className={ApplyForTechSupportCSS.smallinputholder}>
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

							{/* Radio buttons for "Is your business registered?" */}
							<div>
								<label>
									<InputOption
										descriptionLabelText="What support are you interested in?"
										options={[
											{ label: "Scholarship", value: "Scholarship" },
											{ label: "Laptop", value: "Laptop" },
										]}
										initialSelection={supportInterest}
										updatedSelection={setSupportInterest}
									/>
								</label>
							</div>

							{/* Conditional Form */}
							{supportInterest && (
								<div>
									{/* Input fields for "Yes" choice */}
									{supportInterest === "Scholarship" && (
										<div className={ApplyForTechSupportCSS.inputt}>
											<TextArea
												labelText="Why do you want to participate in the scholarship programme?"
												placeholder={"Write here"}
												htmlFor="whyParticipateInScholarship" // Pass the htmlFor prop for label element
												inputId="whyParticipateInScholarship" // Pass the inputId prop for input element
												type="text" // Pass the type prop for input element
												value={whyParticipateInScholarship}
												onChange={(e) =>
													setWhyParticipateInScholarship(e.target.value)
												}
											/>
											<InputOption
												descriptionLabelText={
													"Did you participate in the first scholarship programme?"
												}
												options={[
													{ label: "Yes", value: "yes" },
													{ label: "No", value: "no" },
												]}
												initialSelection={didYouParticipateInFirstScholarship}
												updatedSelection={
													setDidYouParticipateInFirstScholarship
												}
											/>
											<InputOption
												descriptionLabelText={
													"Which track are you interested in?"
												}
												options={[
													{
														label: "Frontend Development",
														value: "frontendDevelopment",
													},
													{
														label: "Backend Development",
														value: "backendDevelopment",
													},
													{ label: "Product Design", value: "productDesign" },
													{ label: "Others", value: "others" },
												]}
												initialSelection={track}
												updatedSelection={setTrack}
											/>
											<InputOption
												descriptionLabelText={
													"Will you be available for the period of six months?"
												}
												options={[
													{ label: "Yes", value: "yes" },
													{ label: "No", value: "no" },
												]}
												initialSelection={sixMonthsAvailable}
												updatedSelection={setSixMonthsAvailable}
											/>
											<InputOption
												descriptionLabelText={"Do you have a laptop?"}
												options={[
													{ label: "Yes", value: "yes" },
													{ label: "No", value: "no" },
												]}
												initialSelection={haveALaptop}
												updatedSelection={setHaveALaptop}
											/>
										</div>
									)}

									{/* Input fields for "No" choice */}
									{supportInterest === "Laptop" && (
										<div className={ApplyForTechSupportCSS.inputt}>
											<TextArea
												labelText={"Why do you need a Laptop?"}
												placeholder={"Write here"}
												htmlFor="whyLaptop"
												inputId="whyLaptop"
												type="text"
												value={whyLaptop}
												onChange={(e) => setWhyLaptop(e.target.value)}
											/>

											<div className={ApplyForTechSupportCSS.inputholder}>
												<label
													htmlFor="pictureEvidence"
													className={ApplyForTechSupportCSS.label}>
													<p>
														Upload picture evidence of what you have been
														learning and why it relates to your computer need.{" "}
														<span className={ApplyForTechSupportCSS.required}>
															*
														</span>
													</p>

													<ImageUploader
														onImageChange={(base64Image) =>
															setPictureEvidence(base64Image)
														}
													/>
												</label>
											</div>

											<div className={ApplyForTechSupportCSS.inputt}>
												<InputOption
													descriptionLabelText={
														"Would you show up for an interview if called?"
													}
													options={[
														{ label: "Yes", value: "yes" },
														{ label: "No", value: "no" },
													]}
													initialSelection={showUpForInterview}
													updatedSelection={setShowUpForInterview}
												/>

												{showUpForInterview === "no" && (
													<TextArea
														labelText="If no, Why?"
														placeholder="Write here"
														htmlFor="whyNotShowUpForInterview"
														inputId="whyNotShowUpForInterview"
														type="text"
														value={whyNotShowUpForInterview}
														onChange={(e) =>
															setWhyNotShowUpForInterview(e.target.value)
														}
													/>
												)}
											</div>

											<TextArea
												labelText={
													"Is there any other thing you will like us to know?"
												}
												placeholder={"Write here"}
												htmlFor="aboutYou"
												inputId="aboutYou"
												type="text"
												value={aboutYou}
												required={false}
												onChange={(e) => setAboutYou(e.target.value)}
											/>
										</div>
									)}
								</div>
							)}

							{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

							{/* Submit button */}

							{loading ? (
								<button className="btn3">Please wait...</button>
							) : (
								<FormBtn btnFor="Submit" />
							)}
						</form>
					) : (
						// Render the EmailVerification component if email is not verified
						<div className={ApplyForTechSupportCSS.mainn}>
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
			{showTechSuccess && <TechSuccess />}
			{showNetworkError && (
				<NetworkError onClose={() => setShowNetworkError(false)} />
			)}
			{showRequiredFields && (
				<RequiredFields onClose={() => setShowRequiredFields(false)} />
			)}
		</div>
	);
}
