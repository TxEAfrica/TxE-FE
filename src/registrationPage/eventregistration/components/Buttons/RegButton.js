import React from 'react'
import ButtonsCSS from './ButtonsCSS.module.css'


const RegButton = () => {
  return (
    <div>
      <button className={ButtonsCSS.formbutton} type='submit'>Register</button>
    </div>
  )
}

export default RegButton
