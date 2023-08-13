import "../Landing.css";

const BtnSecondary = ({ btnName }) => {
	return (
		<div className="p-3 w-full flex justify-center items-center text-center border-2 border-orange-500 text-orange-500 rounded-md">
			{btnName}
		</div>
	);
};

export default BtnSecondary;
