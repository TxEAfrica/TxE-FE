import React from 'react'
import ButtonsCSS from './ButtonsCSS.module.css'


const FormBtn = ({btnFor}) => {
  return (
    <>
      <button className={ButtonsCSS.formbutton} type='submit'>{btnFor}</button>
    </>
  )
}

export default FormBtn
