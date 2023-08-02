import React from 'react';
import InputCSS from '../InputCSS.module.css';

function InputFieldNon({labelText, htmlFor, inputId, type, value, onChange, placeholder }) {
  return (
        <div className={InputCSS.inputholder}>
            <label htmlFor={htmlFor}>
                {labelText} <span className={InputCSS.required}>*</span>
            </label>
            <input
                className={InputCSS.nontext}
                type={type} 
                id={inputId}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                readOnly
            />
        </div>
    
  );
}

export default InputFieldNon;
