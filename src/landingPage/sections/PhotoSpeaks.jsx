import { useState } from "react";
import Modal from "react-modal";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";
import photo7 from "../../assets/photo7.png";

const PhotoSpeaks = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleCloseModal = () => {
		setSelectedImage(null);
	};

	return (
		<div id="achievements">
			<div className="achievements-heading text-center lg:text-start w-full lg:w-fit">
				<div className="text-5xl text-white w-full font-bold md:mb-0">
					Gallery
				</div>
				<div className="text-lg text-white w-full">
					TxE Summit 2023
				</div>
				<div className="flex space-x-2 mb-3 justify-center lg:justify-start w-full lg:w-fit">
					<div className="w-12 h-1 rounded-full bg-orange"></div>
					<div className="w-12 h-1 rounded-full bg-white"></div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2 md:px-20">
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

			<div className="grid grid-cols-3 gap-2 md:px-20 mt-2">
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
