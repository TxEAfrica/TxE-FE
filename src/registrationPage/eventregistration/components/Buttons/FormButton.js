import React from 'react'
import ButtonsCSS from './ButtonsCSS.module.css'


const FormBtn = ({btnFor, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={ButtonsCSS.formbutton} type='submit'>{btnFor}</button>
    </>
  )
}

export default FormBtn
