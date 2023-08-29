import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SpeakerzCard from "./SpeakerzCard";
import williams from "../../../assets/williams 1-min.png";
import ifeanyi from "../../../assets/ifeanyi 1-min.png";
import joyce from "../../../assets/joyce 1-min.png";
import hack from "../../../assets/hack.png";
import napa from "../../../assets/napa.png";
import jduren from "../../../assets/j-duren 1-min.png";
import collins from "../../../assets/collins 1-min.png";
import nnamdi from "../../../assets/nnamdi 2-min.png";
import moj from "../../../assets/moj 1-min.png";
import afigbo from "../../../assets/image_15 1-min.png";
import nkem from "../../../assets/nkem.png";
import user from "../../../assets/user.svg";
import user2 from "../../../assets/user2.svg";

const Speakerz = () => {
	const allSpeakers = [
		// {
		// 	position: "Senior Program Manager, Global Business Operations at Google",
		// 	name: "Justin Duren",
		// 	imageURL: user,
		// },
		{
			position: "Startups Leader, Amazon Web Services",
			name: "Napa Onwusah",
			imageURL: napa,
		},
		{
			position: "Co-Founder, AltSchool Africa",
			name: "Hack Sultan",
			imageURL: hack,
		},

		{
			position: "Founder, TxE Africa",
			name: "Williams Uchembah",
			imageURL: williams,
		},

		{
			position: "Tech Business Leader",
			name: "Mojolaoluwa Aderemi-Makinde",
			imageURL: moj,
		},

		{
			position: "PM Engineering Innovation, Microsoft",
			name: "Nkem Nweke",
			imageURL: nkem,
		},
		{
			position: "Senior Engineering Program Manager, Google",
			name: "Collins Ndukwe",
			imageURL: collins,
		},
		{
			position: "Digital Product Leader",
			name: "Ifeanyi Akosionu",
			imageURL: ifeanyi,
		},
		{
			position: 'Co-Founder The BWPW "Hinge of Career Mentorship',
			name: "Joyce Agbanobi",
			imageURL: joyce,
		},

		// {
		// 	position: "Developer Success at Okta",
		// 	name: "Chukwuemeka Afigbo",
		// 	imageURL: user2,
		// },
		// {
		// 	position: "Director, Global Network Operations at Google",
		// 	name: "Nnamdi Abraham-Igwe",
		// 	imageURL: user,
		// },
	];

	const speakersPerPage = 5;
	const [displaySpeakers, setDisplaySpeakers] = useState(
		allSpeakers.slice(0, speakersPerPage)
	);
	const [startIndex, setStartIndex] = useState(0);

	const handleSwap = (direction) => {
		let newStartIndex = startIndex;

		if (direction === "left") {
			newStartIndex =
				(startIndex - 1 + allSpeakers.length) % allSpeakers.length;
		} else if (direction === "right") {
			newStartIndex = (startIndex + 1) % allSpeakers.length;
		}

		const newDisplaySpeakers = [];

		for (let i = 0; i < speakersPerPage; i++) {
			const index = (newStartIndex + i) % allSpeakers.length;
			newDisplaySpeakers.push(allSpeakers[index]);
		}

		setStartIndex(newStartIndex);
		setDisplaySpeakers(newDisplaySpeakers);
	};

	return (
		<div
			id="speakers"
			className="px-8 mt-20 relative flex items-center bg-black justify-center">
			<div className=" absolute -top-9 lg:top-5">
				<h1 className="text-4xl lg:text-5xl text-white font-bold text-center">
					Meet our speakers
				</h1>
				<div className="text-lg text-white mt-6 mb-8 flex flex-col justify-center items-center">
					Well seasoned
					<div className="flex space-x-2 mt-2 lines">
						<div className="w-56 h-1 rounded-full bg-orange"></div>
						<div className="w-56 h-1 rounded-full bg-white"></div>
					</div>
				</div>
			</div>
			<button
				className="p-3 mt-24 lg:mx-8 hover:bg-bgColor border-2 border-white rounded-full text-white absolute top-0 left-0"
				onClick={() => handleSwap("left")}>
				<IoIosArrowBack size={24} />
			</button>
			<div className="flex mt-44 items-center justify-center -space-x-14">
				{displaySpeakers.map((speaker, index) => (
					<SpeakerzCard
						key={speaker.name}
						speaker={speaker}
						position={index}
						animationDirection={
							index === 2 ? "current" : index < 4 ? "left" : "right"
						}
					/>
				))}
			</div>
			<button
				className="p-3 mt-24 lg:mx-8 hover:bg-bgColor border-2 border-white rounded-full text-white absolute top-0 right-0"
				onClick={() => handleSwap("right")}>
				<IoIosArrowForward size={24} />
			</button>
		</div>
	);
};

export default Speakerz;
