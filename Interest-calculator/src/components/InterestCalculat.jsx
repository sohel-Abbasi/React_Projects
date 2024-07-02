import React, { useState } from "react";
import "./InterestCalculator.css"

const IneterestCalculat = () => {

   const [interest,setInterest] = useState(0);
   const [principle,setPrinciple] = useState(0);
   const [rate,setRate] = useState(0);
   const [time,setTime] = useState(0);
   
   function CalculateInterest(e){
    e.preventDefault();
          let totalInetrest = principle*rate*time/100;
          setInterest(totalInetrest);
   }

   function resetvalue(e){
    e.preventDefault();
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setTime(0);
    
   }


  return (
       <>
         <div className="container">
               <div className="heading">
                    Interest Calculator
               </div>

               <div className="field-container">
                     <h2 className="output">{interest}</h2>
                     <p className="para">Total ineterst</p>

                   
                         <label htmlFor="">Principle</label><br>
                         </br>
                         <input type="text"  
                         onChange={(e)=>setPrinciple(e.target.value)}
                         placeholder="Enter principle"/><br/><br/>
                         <label htmlFor="">Rate</label><br>
                         </br>
                         <input type="text"
                         onChange={(e)=>setRate(e.target.value)}
                           placeholder="Enter Rate"/><br/><br/>
                         <label htmlFor="">Time</label><br>
                         </br>
                         <input type="text" 
                         onChange={(e)=>setTime(e.target.value)}
                         placeholder="Enter time"/><br/><br/>

                          <div className="btn-container">
                            <button 
                             className="calculat-btn"
                             onClick={CalculateInterest}
                            >Calculate</button>
                            <button
                            className="reset-btn"
                            onClick={resetvalue}
                            >Reset</button>
                          </div>
              
               </div>
         </div>
       
       </>

  )
} 

export default IneterestCalculat;