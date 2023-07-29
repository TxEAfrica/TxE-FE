import React from 'react';
import InputCSS from '../InputCSS.module.css'

const InputOption = ({
  className,
  descriptionLabelText,
  options,
  initialSelection,
  updatedSelection,
}) => {
  return (
    <div className={InputCSS.labelholder}>
      <p>
        {descriptionLabelText} <span className={InputCSS.required}>*</span>
      </p>

      <div className={InputCSS.labelholder}>
        {options.map((option) => (
          <label key={option.value} className={InputCSS.radioLabel}>
            <input
              type='radio'
              value={option.value}
              checked={initialSelection === option.value}
              onChange={(e) => updatedSelection(e.target.value)}
              required
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InputOption;
