import React, { useState, useEffect } from "react";
import airtel from "../../assets/sponsors/airtel.svg";
import rite from "../../assets/sponsors/Rite.svg";
import fidelity from "../../assets/sponsors/fidelity.svg";
import veemost from "../../assets/sponsors/VeeMost.svg";
import zenith from "../../assets/sponsors/zenith.svg";
import wakanow from "../../assets/sponsors/wakanow.svg";
import interswitch from "../../assets/sponsors/interswitch.svg";
import sterling from "../../assets/sponsors/sterling.svg";
import xend from "../../assets/sponsors/XendFinance.svg";
import Williams from "../../assets/sponsors/Williams Uchemba Foundation.svg";
import buildspace from "../../assets/sponsors/buildspace.svg";
import spaceInAfrica from "../../assets/sponsors/spaceInAfrica.svg";
import vc4a from "../../assets/sponsors/VC4A Logo - Full colour.svg";
import lloydant from "../../assets/sponsors/Lloydant Logo.svg";
import moniepoint from "../../assets/sponsors/Moniepoint Logo 1.svg";
import "../Landing.css";

const Sponsors = () => {
	const images = [
		zenith,
		moniepoint,
		rite,
		fidelity,
		sterling,
		interswitch,
		wakanow,
		vc4a,
		lloydant,
	];

	// Duplicate the images for an infinite loop effect
	const duplicatedImages = [...images, ...images];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % duplicatedImages.length);
		}, 30000); // Change slide every 3 seconds (adjust as needed)

		return () => {
			clearInterval(timer);
		};
	}, [currentIndex, duplicatedImages]);

	return (
		<div className="flex flex-col justify-center items-center p-6 bg-white shadow-sm rounded-md lg:w-3/4 overflow-hidden sponsors">
			<h1 className="text-lg font-semibold">
				<b>Our Sponsors</b>
			</h1>
			<div className="slide-container">
				<div
					className="slide-wrapper"
					style={{
						transform: `translateX(-${
							(currentIndex * 100) / duplicatedImages.length
						}%)`,
						transition: "transform 1s ease",
					}}>
					{duplicatedImages.map((src, index) => (
						<img
							key={index}
							src={src}
							loading="lazy"
							className="mx-8 md:mx-16 sponsor"
							alt=""
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
