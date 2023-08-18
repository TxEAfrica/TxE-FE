import "../Landing.css";

const BtnSecondary = ({ btnName, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="p-3 w-full flex justify-center items-center text-center border-2 border-white text-white rounded-md">
			{btnName}
		</div>
	);
};

export default BtnSecondary;
