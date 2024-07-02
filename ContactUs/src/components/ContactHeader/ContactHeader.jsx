import React from 'react'
import styles from "./ContactHeader.module.css"


const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section} container`}>
      <h1>CONTACT US</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel consectetur libero adipisci doloribus, quam officiis accusamus nisi repellendus tempora aperiam, aliquid enim accusantium, ex omnis architecto. </p>
    </div>
  )
}

export default ContactHeader