import "../Landing.css";

const BtnPrimary = ({ btnName }) => {
	return (
		<div className="p-3 w-full flex justify-center items-center text-center bg-orange rounded-md text-white">
			{btnName}
		</div>
	);
};

export default BtnPrimary;
