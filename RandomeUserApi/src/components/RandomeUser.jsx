import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from "./RandomeUser.module.css"
const RandomeUser = () => {
    const [user,setUser]  = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
     useEffect(()=>{
      
              axios.get("https://randomuser.me/api/?results=15")
              .then(response=> {
                setUser(response.data.results)
                setLoading(false)
              })
              .catch((error)=>{
                setError("Error fetching user..")
                setLoading(false);
              })
            

         
     },[])

     if (loading) return <div>loading..</div>
     if (error) return <p>Error..</p>

  return (
    
    <div >
     <h2>User Details</h2>
     <div className={styled.Main_Container}>
     {
        user.map((detail,i)=>(
              <div className={styled.user} key={i}>
                <div>
                <img src={detail.picture.large} alt="user picture" />
                </div>
                 <div>
                 <p className={styled.name}>{detail.name.title}. {detail.name.first} {detail.name.last}</p>
                  <p>Age : {detail.dob.age}</p>
                  <p>{detail.email}</p>
                  <p>{detail.location.city}, {detail.location.country}</p>

                 </div>
                 
                  
              </div>
        ))
      }
     </div>
    
    </div>
  )
}

export default RandomeUser

