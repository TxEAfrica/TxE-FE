import "../Landing.css";

const BtnPrimary = ({ btnName, onClick }) => {
	return (
		<div
			className="p-3 w-full flex justify-center items-center text-center bg-orange rounded-md text-white cursor-pointer"
			onClick={onClick}>
			{btnName}
		</div>
	);
};

export default BtnPrimary;
