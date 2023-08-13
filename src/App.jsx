import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landingPage/home";
import EventRegForm from "./registrationPage/eventregistration/EventRegForm";
import TechSupportApplication from "./applications/category/TechSupportApplication";
import ApplyForGrant from "./applications/grant/ApplyForGrant";

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
					element={<TechSupportApplication />}
				/>
				<Route
					path="/grant"
					element={<ApplyForGrant />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
