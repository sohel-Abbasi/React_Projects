import React from 'react'
import "./Navigation.module.css"
const navigation = () => {
  return (
   <nav className='container'>
    <div className='logo'>
      <img src="./images/logo.png" alt="do sum coding logo" />
    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>conatact</li>
     
      <li></li>
    </ul>
   </nav>
  )
}

export default navigation