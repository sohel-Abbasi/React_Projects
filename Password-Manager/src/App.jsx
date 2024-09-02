import { useEffect, useState } from "react";

import "./App.css";
import PasswordForm from "./components/PasswordForm";
import ItemList from "./components/ItemList";

function App() {
  const [passwords, setPasswords] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
    setPasswords(storedPasswords);
  }, []);

  const addPassword = (newPasswords) => {
    const updatedPasswords = [...passwords, newPasswords];
    setPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  const deletePasswords = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  return (
    <>
      <div className="w-[370px] flex flex-col m-auto mx-auto border text-center text-white bg-slate-800 h-[650px]">
        <div className="my-4 h-12 w-[70%] bg-yellow-400  text-center p-2 mx-auto rounded-xl text-2xl font-bold">
          <h3>Password Manager</h3>
        </div>
        <div>
          <button
            className="h-10 w-[50%] mb-2 bg-blue-600  text-center p-2 mx-auto rounded-xl text-1xl font-bold hover:bg-blue-400"
            onClick={() => setShowPopup(true)}
          >
            Add details
          </button>
        </div>
        {showPopup && (
          <div className="poppup">
            <div className="poppup-inner">
              <PasswordForm addPassword={addPassword} />
              <button
                className="h-10 w-[70%] mb-2 bg-green-600  text-center p-2 mx-auto rounded-xl text-1xl font-bold hover:bg-green-400"
                onClick={() => setShowPopup(false)}
              >
                close
              </button>
            </div>
          </div>
        )}

        <ItemList passwords={passwords} deletePasswords={deletePasswords} />
      </div>
    </>
  );
}

export default App;
