import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./landingPage/home";
import EventRegForm from "./registrationPage/eventregistration/EventRegForm";
import ApplyForTechSupport from "./applications/techSupport/ApplyForTechSupport";
import ApplyForGrant from "./applications/grant/ApplyForGrant";
import TicketPage from "./ticketPage/TicketPage";
import EmailTemplate from "./emailTemplate/EmailTemplate";
import NotFoundPage from "./landingPage/sections/404";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/register"
					element={<EventRegForm />}
				/>
				<Route
					path="/techsupport"
					element={<ApplyForTechSupport />}
				/>
				<Route
					path="/grant"
					element={<ApplyForGrant />}
				/>
				<Route
					path="/ticket/:userId"
					element={<TicketPage />}
				/>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
				<Route
					path="/email-template"
					element={<EmailTemplate />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
