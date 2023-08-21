import React, { useState } from "react";
import "../modals/Modals.css";
import info from "../assets/info.svg";
import close from "../assets/close.svg";

const GrantSuccess = () => {
	const [showOverlay, setShowOverlay] = useState(true);

	const handleCloseOverlay = () => {
		setShowOverlay(false);
	};
	const handleNavigate = () => {
		window.location.href = "/";
	};

	return (
		showOverlay && (
			<div className="modal-overlay">
				<div className="modal">
					<div className="modal-header">
						<div className="info">
							<img
								src={info}
								alt=""
							/>
							<p>Information</p>
						</div>
						<span onClick={handleNavigate}>
							<img
								src={close}
								alt=""
							/>
						</span>
					</div>

					<div className="modal-content">
						<div className="success-animation">
							<svg
								width="150"
								height="150"
								viewBox="0 0 195 203"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g id="success">
									<path
										id="cover"
										d="M149.549 21.6543L102.324 6.31005C99.1886 5.29135 95.8114 5.29135 92.6762 6.31005L45.4513 21.6543C42.3161 22.673 39.5839 24.6581 37.6462 27.3251L8.45962 67.497C6.52195 70.1639 5.47833 73.3759 5.47833 76.6724V126.328C5.47833 129.624 6.52196 132.836 8.45962 135.503L37.6462 175.675C39.5839 178.342 42.3161 180.327 45.4513 181.346L92.6762 196.69C95.8114 197.709 99.1886 197.709 102.324 196.69L149.549 181.346C152.684 180.327 155.416 178.342 157.354 175.675L186.54 135.503C188.478 132.836 189.522 129.624 189.522 126.328V76.6724C189.522 73.3759 188.478 70.1639 186.54 67.4969L157.354 27.3251C155.416 24.6581 152.684 22.673 149.549 21.6543Z"
										fill="#2BA501"
										stroke="#B8E1AA"
										stroke-width="10"
									/>
									<g
										id="tick"
										clip-path="url(#clip0_1217_1066)">
										<path
											id="Vector"
											d="M71.1268 124.651L50.3647 103.889L55.6012 98.7443L71.2187 114.362L76.3632 119.506L71.1268 124.651ZM91.8888 124.651L71.1268 103.889L76.2714 98.6524L91.8888 114.27L125.696 80.4626L130.841 85.6991L91.8888 124.651ZM91.8888 103.889L86.6524 98.7443L104.842 80.5545L110.079 85.6991L91.8888 103.889Z"
											fill="white"
										/>
									</g>
								</g>
								<defs>
									<clipPath id="clip0_1217_1066">
										<rect
											width="88.1928"
											height="88.1928"
											fill="white"
											transform="translate(54.5063 58.5061)"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="modal-message">
							<h2>Congratulations!</h2>
							<p>You have successfully submitted your Grant application.</p>
							<small>Keep an eye out for our email.</small>
						</div>
					</div>

					<div className="modal-cta">
						<button
							className="btn1"
							onClick={handleNavigate}>
							Close
						</button>
						<button
							className="btn2"
							onClick={handleNavigate}>
							Back to Home
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default GrantSuccess;
