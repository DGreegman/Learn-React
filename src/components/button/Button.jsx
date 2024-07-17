import React from 'react'
import styles from './Button.module.css'

// function doSomething(){
//   alert('Something')
// }

const Button = ({className, children, whenButtonIsClicked }) => {
  return (
    <button onClick={whenButtonIsClicked} className={`${styles.button} ${className}`}>{children}</button>
  )
}

export default Button