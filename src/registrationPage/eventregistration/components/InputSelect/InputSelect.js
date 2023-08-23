import React from "react";
import InputCSS from "../InputCSS.module.css";

const InputSelect = ({
	labelText,
	htmlFor,
	selectId,
	value,
	onChange,
	options,
}) => {
	// const selectedOption = options.find((option) => option.value === value);

	return (
		<div className={InputCSS.inputholder}>
			<label htmlFor={htmlFor}>
				{labelText} <span className={InputCSS.required}>*</span>
			</label>

			<select
				id={selectId}
				value={value}
				onChange={onChange}
				required>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default InputSelect;
