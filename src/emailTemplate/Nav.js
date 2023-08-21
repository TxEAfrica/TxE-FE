import React, { useState } from "react";
import TxELogo from "../assets/txe-logo-white.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "../emailTemplate/EmailTemplate.css";

const Nav = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	return (
		<div className="flex justify-center py-6 text-center  sticky top-0 z-50 nav">
			<div onClick={() => location.pathname !== "/" && navigate("/")}>
				<img
					src={TxELogo}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Nav;
