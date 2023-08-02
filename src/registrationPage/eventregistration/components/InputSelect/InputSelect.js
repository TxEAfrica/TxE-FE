import React from 'react';
import InputCSS from '../InputCSS.module.css'
// import Select from 'react-select';



const customStyles = {
  // Add any custom styles you want for the dropdown options here
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    fontSize: '16px',
    fontWeight: '300',
    color: '#FF6F43',
    borderRadius: '6px',
    background:  'white', // Set the background color for selected options
    ':hover': {
      background: '#FF6F43', // Set the background color on hover
      color: 'white', // Set the text color on hover
    },
  }),
  control: (provided, state) => ({
    ...provided,
    maxHeight: '50px',
    fontSize: '14px',
    fontWeight: '400',
    borderRadius: '4px',
    display: "flex",
    justifyContent: 'center',
    // padding: "20px 0",
    paddingBottom: "40px"
  }),
  // Style for the arrow icon
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '50px', // Adjust the height of the arrow icon container
    svg: {
      width: '20px', // Adjust the width of the arrow icon
      height: '20px', // Adjust the height of the arrow icon
      // Change the color of the arrow icon
    },
  }),

  // Style for the line between the arrow icon and the value
  indicatorSeparator: (provided) => ({
    ...provided,
    height: '30px', // Adjust the height of the line
    backgroundColor: '#CED4D8', // Change the color of the line
  }),

  // Add other custom styles for the dropdown container if needed
};

const InputSelect = ({labelText, htmlFor, selectId, value, onChange, options}) => {

  const selectedOption = options.find((option) => option.value === value);


  return (

      <div className={InputCSS.inputholder}>
          <label htmlFor={htmlFor}>
            {labelText} <span className={InputCSS.required}>*</span>
          </label>

          {/* <Select
          id={selectId}
          value={selectedOption} // Make sure to provide the whole option object here
          onChange={onChange}
          required
          options={options}
          styles={customStyles} // Apply the custom styles to the dropdown options
        /> */}



        <select id={selectId} value={value} onChange={onChange} required>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
  );
};

export default InputSelect;
