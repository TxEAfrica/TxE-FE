import { useState } from "react";
import Modal from "react-modal";
import photo1 from "../../assets/event-min.jpg";
import photo2 from "../../assets/winPC.jpg";
import photo3 from "../../assets/Williams Uchemba.jpg";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/speaker1-min.jpg";
import photo6 from "../../assets/speaker2-min.jpg";
import photo7 from "../../assets/photo2-min.png";

const PhotoSpeaks = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleCloseModal = () => {
		setSelectedImage(null);
	};

	return (
		<div id="achievements" className="px-4 lg:px-20">
			<div className="flex flex-col justify-center items-center md:mb-10">
				<h1
					id="section-heading"
					className="text-5xl text-white mt-20 text-center font-bold">
					Gallery
				</h1>
				<div className="text-lg text-white mt-6 mb-8 flex flex-col justify-center items-center">
					TxE Summit 2022
					<div className="flex space-x-2 mt-2 lines">
						<div className="w-56 h-1 rounded-full bg-orange"></div>
						<div className="w-56 h-1 rounded-full bg-white"></div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo1)}>
					<img
						src={photo1}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo2)}>
					<img
						src={photo2}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo3)}>
					<img
						src={photo3}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo4)}>
					<img
						src={photo4}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-2 mt-2">
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo5)}>
					<img
						src={photo5}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo6)}>
					<img
						src={photo6}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
				<div
					className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden cursor-pointer"
					onClick={() => handleImageClick(photo7)}>
					<img
						src={photo7}
						alt=""
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			<Modal
				className={"h-1/2 md:h-4/5 md:w-4/5 md:mx-auto my-48 md:my-24"}
				isOpen={selectedImage !== null}
				onRequestClose={handleCloseModal}
				contentLabel="Larger Image"
				ariaHideApp={false}>
				{selectedImage && (
					<img
						src={selectedImage}
						alt=""
						loading="lazy"
						className="w-full h-full object-contain"
					/>
				)}
			</Modal>
		</div>
	);
};

export default PhotoSpeaks;
