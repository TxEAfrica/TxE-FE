import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EventRegCSS from "./EventRegForm.module.css";
import InputField from "./components/InputField/InputField";
import InputSelect from "./components/InputSelect/InputSelect";
import InputOption from "./components/InputOption/InputOption";
import FormBtn from "./components/Buttons/FormButton";
import Footer from "../../landingPage/sections/Footer";
import FormVector from "../../applications/FormVector";
import RegSuccess from "../../modals/RegSuccess";
import Sponsors from "../../landingPage/sections/Sponsors";
import "../../landingPage/Landing.css";
import { AlreadyRegistered } from "../../modals/AlreadyRegistered";
import { InvalidEmail } from "../../modals/InvalidEmail";
import { NetworkError } from "../../modals/NetworkError";
import { baseUrl } from "../../api/BaseURL";
import Nav from "../../emailTemplate/Nav";

const EventRegForm = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [country, setCountry] = useState("");
	const [state, setState] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [bestDescription, setBestDescription] = useState("");
	const [trackInterest, setTrackInterest] = useState("");
	const [attended2022, setAttended2022] = useState("");
	const [joiningMode, setJoiningMode] = useState("");
	const [userId, setUserId] = useState("");
	const [showRegSuccess, setShowRegSuccess] = useState(false);
	const [showNetworkError, setShowNetworkError] = useState(false);
	const [showInvalidEmail, setShowInvalidEmail] = useState(false);
	const [showAlreadyRegistered, setShowAlreadyRegistered] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [countryOptions, setCountryOptions] = useState([]);

	useEffect(() => {
		// Function to fetch country data from API
		const fetchCountries = async () => {
			try {
				const response = await fetch("https://restcountries.com/v3.1/all");
				const data = await response.json();

				const countries = data.map((country) => ({
					label: country.name.common,
					value: country.name.common,
				}));

				const defaultOption = { label: "Select your country", value: null };
				countries.sort((a, b) => a.label.localeCompare(b.label));
				setCountryOptions([defaultOption, ...countries]);
			} catch (error) {
				// console.error("Error fetching country data:", error);
			}
		};

		fetchCountries();
	}, []);

	const EventReg = {
		firstName,
		lastName,
		country,
		state,
		gender,
		phoneNumber,
		email,
		bestDescription,
		attended2022,
		joiningMode,
		trackInterest,
	};

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleVerifyEmail = (e) => {
		e.preventDefault();
		if (!emailRegex.test(email)) {
			setShowInvalidEmail(true);
			return;
		}
	};

	const checkEmailAvailability = async () => {
		try {
			const response = await fetch(`${baseUrl.url}/api/v1/register/event`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await response.json();

			// Check if the API response indicates that the email already exists
			if (data.status === "fail" && data.message === "email already exist") {
				return true; // Email already exists
			}

			return false; // Email does not exist
		} catch (error) {
			// console.log("Error checking email availability:", error);
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (isSubmitting) {
			return;
		}

		setIsSubmitting(true);

		try {
			// Check if the email exists in the database
			const emailExists = await checkEmailAvailability();

			if (emailExists) {
				setShowAlreadyRegistered(true);
				return;
			}

			// Prepare the data to be sent in the POST request
			const EventRegistration = {
				firstName,
				lastName,
				country,
				state,
				gender,
				phoneNumber,
				email,
				bestDescription,
				attended2022,
				joiningMode,
				trackInterest,
			};

			const response = await fetch(`${baseUrl.url}/api/v1/register/event`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(EventRegistration),
			});

			const data = await response.json();

			if ((data.success = true)) {
				setLoading(false);
				setUserId(data.data._id);
				setShowRegSuccess(true);
			}
		} catch (error) {
			setLoading(false);
			setShowNetworkError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Radio button options for "Which of the following best describes you?"
	const bestDescriptionOptions = [
		{ label: "Student", value: "student" },
		{ label: "Developer", value: "developer" },
		{ label: "Entrepreneur", value: "entrepreneur" },
		{ label: "Others", value: "others" },
	];
	// Radio button options for "Did you attend last year?"
	const attendedOptions = [
		{ label: "Yes", value: "Yes" },
		{ label: "No", value: "No" },
	];
	const joiningModeOptions = [
		{ label: "Virtual", value: "Virtual" },
		{ label: "Physical", value: "Physical" },
	];

	// Radio button options for "Which trackInterest are you interested in?"
	const trackInterestOptions = [
		{ label: "Entrepreneurship", value: "entrepreneurship" },
		{ label: "Technology", value: "technology" },
	];

	// Dropdown button options for "Gender"
	const genderOptions = [
		{ label: "Select your gender", value: null },
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	];

	return (
		<div>
			<Nav />
			<div className={EventRegCSS.main}>
				<div className={EventRegCSS.formtitle}>
					<h1 className="orange">Register Now!</h1>
					<small>Reserve your Spot</small>
					<p>Fill the form carefully and correctly</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className={EventRegCSS.smallinputholder}>
						<InputField
							placeholder={"Enter your first name"}
							labelText="First Name"
							htmlFor="firstName"
							inputId="firstName"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<InputField
							placeholder={"Enter your last name"}
							labelText="Last Name"
							htmlFor="lastName"
							inputId="lastName"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div className={EventRegCSS.smallinputholder}>
						<InputSelect
							labelText={"Gender"}
							htmlFor={"gender"}
							selectId="gender"
							value={gender}
							// onChange={(selectedOption) => setGender(selectedOption.value)}
							onChange={(e) => setGender(e.target.value)}
							options={genderOptions}
						/>

						<InputField
							labelText="Phone Number"
							placeholder={"Enter your phone number"}
							htmlFor="phoneNumber"
							inputId="phoneNumber"
							type="text"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>
					<div className={EventRegCSS.smallinputholder}>
						<InputSelect
							labelText="Country"
							htmlFor="country"
							selectId="country"
							value={country}
							// onChange={(selectedOption) => setCountry(selectedOption.value)} // Pass the handleGenderChange function
							onChange={(e) => setCountry(e.target.value)}
							options={countryOptions}
						/>

						<InputField
							labelText="State"
							placeholder={"Enter your state"}
							htmlFor="state"
							inputId="state"
							type="text"
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>

					<InputField
						labelText="Email"
						placeholder={"Enter your email address"}
						htmlFor="email"
						inputId="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<InputOption
						descriptionLabelText="Which of the following best describes you?"
						options={bestDescriptionOptions}
						initialSelection={bestDescription}
						updatedSelection={setBestDescription}
					/>

					<InputOption
						descriptionLabelText="Did you attend TxE 2022?"
						options={attendedOptions}
						initialSelection={attended2022}
						updatedSelection={setAttended2022}
					/>

					<InputOption
						descriptionLabelText="How will you be joining us this year?"
						options={joiningModeOptions}
						initialSelection={joiningMode}
						updatedSelection={setJoiningMode}
					/>

					<InputOption
						descriptionLabelText="Which track are you interested in?"
						options={trackInterestOptions}
						initialSelection={trackInterest}
						updatedSelection={setTrackInterest}
					/>

					<FormBtn
						btnFor={loading ? "Please wait..." : "Register"}
						isLoading={loading}
					/>
				</form>
			</div>
			<div className="bg-gray-200 h-fit w-full">
				<Sponsors />
			</div>
			<Footer />

			{showRegSuccess && (
				<RegSuccess
					userId={userId}
					email={email}
					onClose={() => setShowRegSuccess(false)}
				/>
			)}
			{showAlreadyRegistered && (
				<AlreadyRegistered onClose={() => setShowAlreadyRegistered(false)} />
			)}
			{showInvalidEmail && (
				<InvalidEmail onClose={() => setShowInvalidEmail(false)} />
			)}
			{showNetworkError && (
				<NetworkError onClose={() => setShowNetworkError(false)} />
			)}
		</div>
	);
};

export default EventRegForm;
