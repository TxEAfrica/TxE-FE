import React from 'react';
import InputCSS from '../InputCSS.module.css'
import Select from 'react-select';



const customStyles = {
  // Add any custom styles you want for the dropdown options here
  option: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    fontWeight: '500',
    color: '#FF6F43',
    background: state.isSelected ? '#FF6F43' : 'white', // Set the background color for selected options
    ':hover': {
      background: '#FF6F43', // Set the background color on hover
      color: 'white', // Set the text color on hover
    },
  }),
};

const InputSelect = ({labelText, htmlFor, selectId, value, onChange, options}) => {
  return (

      <div className={InputCSS.inputholder}>
        <label htmlFor={htmlFor}>
          {labelText} <span className={InputCSS.required}>*</span>
        </label>

        <Select
        id={selectId}
        value={value} // Make sure to provide the whole option object here
        onChange={onChange}
        required
        options={options}
        styles={customStyles} // Apply the custom styles to the dropdown options
      />



        {/* <select id={selectId} value={value} onChange={onChange} required>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
      </div>
  );
};

export default InputSelect;
