import { Icon } from "../../icons/Icons";
import win from "../../assets/txe-win1.png";
import scholarship from "../../assets/scholarship.png";
import win1 from "../../assets/txe-win2.png";
import "../Landing.css";
import { useNavigate } from "react-router-dom";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import BtnPrimary from "../buttons/BtnPrimary";
import BtnSecondary from "../buttons/BtnSecondary";

const Highlight = () => {
	const navigate = useNavigate();
	return (
		<div
			id="highlight"
			className="px-3 lg:px-20 py-10 bg-orange-50">
			<div className="flex flex-col justify-center items-center md:mb-20">
				<h1 className="text-5xl text-white text-center lg:text-left font-bold">
					Event Highlights
				</h1>
				<div className="text-lg text-white mt-3 flex flex-col justify-center items-center">
					TxE Summit 2023
					<div className="flex space-x-2 mt-2">
						<div className="w-12 h-1 rounded-full bg-orange"></div>
						<div className="w-12 h-1 rounded-full bg-white"></div>
					</div>
				</div>
			</div>

			<div className="lg:flex highlight-container mt-10 lg:mt-0 space-y-5 md:space-y-0 lg:space-x-5 text-gray-400 ">
				<div className=" flex flex-col justify-center items-center highlight-box">
					<div className="px-4 py-8 rounded-md h-fit  space-y-4 flex flex-col justify-center items-center text-center lg:text-center lg:justify-center lg:items-center">
						<div className="w-fit h-fit rounded-md overflow-none">
							<img
								src={win}
								alt=""
								loading="lazy"
							/>
						</div>
						<h1 className="text-3xl font-bold">Business Grant</h1>
						<p className="md:w-2/3 lg:w-full">
							Lucky participants will be going home with valuable scholarships
							from our incredible tech event! 🎉🏆
						</p>
						<div
							className="text-orange-500 bg-orange flex justify-center items-center text-center text-white rounded-md w-64 py-3 cursor-pointer"
							onClick={() => navigate("/grant")}>
							Apply
						</div>
					</div>
				</div>
				<div className=" flex flex-col justify-center items-center highlight-box">
					<div className="px-4 py-8 rounded-md h-fit  space-y-4 flex flex-col justify-center items-center text-center lg:text-center lg:justify-center lg:items-center">
						<div className="w-fit h-fit rounded-md overflow-none">
							<img
								src={win1}
								alt=""
								loading="lazy"
							/>
						</div>
						<h1 className="text-3xl font-bold">Free Laptops</h1>
						<p className="md:w-2/3 lg:w-full">
							Lucky participants will be going home with valuable scholarships
							from our incredible tech event! 🎉🏆
						</p>
						<div
							className="text-orange-500 bg-orange flex justify-center items-center text-center text-white rounded-md w-64 py-3 cursor-pointer"
							onClick={() => navigate("/techsupport")}>
							Apply
						</div>
					</div>
				</div>

				<div className=" flex flex-col justify-center items-center highlight-box">
					<div className="h-fit px-4 py-8 rounded-md space-y-4 flex flex-col justify-center items-center text-center lg:text-center lg:justify-center lg:items-center">
						<div className="w-fit h-fit rounded-md overflow-none">
							<img
								src={scholarship}
								alt=""
								loading="lazy"
							/>
						</div>
						<h1 className="text-3xl font-bold">Tech Scholarships</h1>
						<p className="md:w-2/3 lg:w-full">
							Lucky participants will be going home with valuable scholarships
							from our incredible tech event! 🎉🏆
						</p>
						<div
							className="text-orange-500 bg-orange flex justify-center items-center text-center text-white rounded-md w-64 py-3 cursor-pointer"
							onClick={() => navigate("/techsupport")}>
							Apply
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Highlight;
