import React from 'react'
import {MdMessage} from 'react-icons/md'
import styles from './Buttons.module.css'

const Buttons = (props) => {
  const {isOutline,text,icon,...rest} = props;
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn} > 
    {icon}
      {text}</button>
  )
}

export default Buttons