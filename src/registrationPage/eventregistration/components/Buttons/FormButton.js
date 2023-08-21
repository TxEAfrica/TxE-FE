import React from 'react'
import ButtonsCSS from './ButtonsCSS.module.css'


const FormBtn = ({btnFor, onClick, isLoading}) => {
  return (
    <div className='h-fit h-16'>
      <button 
        onClick={onClick} 
        className={`${!isLoading?ButtonsCSS.formbutton:'bg-gray-200/40 rounded-md w-full p-3 flex justify-center items-center cursor-not-allowed'}`} 
        type='submit'
        disabled={isLoading}>
          {btnFor}
      </button>
    </div>
  )
}

export default FormBtn
