import React from 'react'
import ButtonsCSS from './ButtonsCSS.module.css'


const FormBtn = ({btnFor, onClick, isLoading}) => {
  return (
    <div className='h-fit h-14'>
      <button 
        onClick={onClick} 
        className={`${!isLoading?ButtonsCSS.formbutton:'bg-gray-200 rounded-md w-full p-3 flex justify-center items-center'}`} 
        type='submit'
        disabled={isLoading}>
          {btnFor}
      </button>
    </div>
  )
}

export default FormBtn
