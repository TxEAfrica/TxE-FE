import React from 'react'
import InputCSS from '../InputCSS.module.css'

function TextArea  ({labelText, htmlFor, inputId, type, value, onChange, placeholder }) {
  return (
    <div>
        <div className={InputCSS.inputholder}>
            <label htmlFor={htmlFor}>
                {labelText} <span className={InputCSS.required}>*</span>
            </label>
            <textarea
                type={type} // Add the type attribute for the input element
                id={inputId}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    </div>
  )
}

export default TextArea
