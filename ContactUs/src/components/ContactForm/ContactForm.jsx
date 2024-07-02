import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Buttons from '../Buttons/Buttons'
import { MdCall, MdMail, MdMessage } from 'react-icons/md'

const ContactForm = () => {

   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [text,setText] = useState("");

    const onSubmit = (e)=> {
      e.preventDefault();
        
        setName(e.target[0].value);
        setEmail( e.target[1].value);
        setText(e.target[2].value);
       
        
    }


  return (
      <section
       className={styles.container}
      >
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Buttons 
            text='VIA SUPPORT CHAT'
            icon={<MdMessage font-size='24px'/>}
            />
              <Buttons 
            text='VIA CALL'
            
            icon={<MdCall font-size='24px'/>}
            />
           
          </div>
          <Buttons 
          isOutline={true}
            text='VIA EMAIL FROM'
            icon={<MdMail font-size='24px'/>}
            />

            <form action=""
             onSubmit={onSubmit }
            >
              <div className={styles.form_container}>
              <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
                <div className={styles.form_container}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
                </div>
                <div className={styles.form_container}>
                  <label htmlFor="text">Text</label>
                 <textarea rows='8' name='text'></textarea>
                </div>
               
              </div>
              <div  id={styles.submit} >
              <Buttons text='SUBMIT'/>
              </div>
           
            <div>{
                name+' '+email+' '+text
              }
              
              
            </div>
            </form>
        </div>
        <div className={styles.contact_Image}>
              <img src="./images/contact.svg" alt="contact image" />
        </div>

      </section>
  )
}

export default ContactForm