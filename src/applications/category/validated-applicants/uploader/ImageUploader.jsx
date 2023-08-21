import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs"; // Cloud icon from react-icons/bs
import { useDropzone } from "react-dropzone";
import ApplyForTechSupportCSS from "../../../techSupport/ApplyForTechSupport.module.css";
// import { ImageCompressor } from "image-compressor";

const ImageUploader = ({ onImageChange }) => {
	const [image, setImage] = useState("");

	const onDrop = async (acceptedFiles) => {
		const file = acceptedFiles[0];

		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onloadend = () => {
			const base64String = reader.result;
			if (base64String.startsWith("data:image/")) {
				setImage(base64String);
				onImageChange(base64String);
			} else {
				// console.log("Invalid base64 format");
				return 
			}
		};
	};

	const removeImage = () => {
		setImage(""); // Clear the image when the remove button is clicked
		onImageChange(""); // Also update the parent component
	};

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		multiple: false,
		onDrop,
	});

	return (
		<div
			className={`w-full flex flex-col items-center ${ApplyForTechSupportCSS.uploader}`}>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{image ? (
					<div className={`text-white ${ApplyForTechSupportCSS.uploadedImg}`}>
						<img
							src={image}
							alt="Uploaded"
							loading="lazy"
							className={`rounded-md`}
						/>
						<button
							className={ApplyForTechSupportCSS.removeBtn}
							onClick={removeImage}>
							Remove Image
						</button>
					</div>
				) : (
					<div
						className={`text-white ${ApplyForTechSupportCSS.uploadercontent}`}>
						<BsCloudUpload className="mx-auto w-12 h-12" />
						<p>Drag & drop or click to upload</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageUploader;
