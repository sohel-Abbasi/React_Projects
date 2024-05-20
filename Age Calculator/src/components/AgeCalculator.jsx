import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const todayDate = new Date();
    const birthdateDate = new Date(birthdate);

    let age = todayDate.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = todayDate.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && todayDate.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };

  const resetCalculator = () => {
    setBirthdate("");
    setAge(0);
  };
  return (
    <div className="container">
      <h2 className="heading container_title">Age Calculator</h2>
      <p className="para container_title">
        The Age Calculator can determine the age or interval
      </p>

      <div className="filed_container">
        <div className="DOB">
          <h2>Date of Birth</h2>
          <input
            className="date"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div className="btn_container">
            <button className="btn1" onClick={calculateAge}>
              Calculate Age
            </button>
            <button className="btn2" onClick={resetCalculator}>
              Clear
            </button>
          </div>
        </div>
        <div className="age">
          <h2>Your Age is </h2>
          <div className="age_cls">{age > 0 ? `${age}` : ``}</div>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
