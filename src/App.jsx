import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landingPage/home";
import EventRegForm from "./registrationPage/eventregistration/EventRegForm";
import ApplyForTechSupport from "./applications/techSupport/ApplyForTechSupport";
import TechSupportApplication from "./applications/category/TechSupportApplication";
import ApplyForGrant from "./applications/grant/ApplyForGrant";
import TicketPage from "./ticketPage/TicketPage";

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
					path="/ticket/:email"
					element={<TicketPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
