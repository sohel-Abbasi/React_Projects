import React, { useState } from "react";

const PasswordForm = ({ addPassword }) => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!website || !password || !username) {
      return;
    }
    addPassword({ website, password, username });
    setPassword("");
    setUsername("");
    setWebsite("");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-2 flex-grow"
      onSubmit={handleSubmit}
    >
      <input
        className="h-10 w-[70%] p-2 rounded-lg border-yellow-400 text-black"
        type="text"
        placeholder="Enter Website name"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        className="h-10 w-[70%] p-2 rounded-lg border-yellow-400  text-black"
        type="text"
        placeholder="Enter username or email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="h-10 w-[70%] p-2 rounded-lg border-yellow-400  text-black"
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="h-10 w-[70%] mb-2 bg-blue-600  text-center p-2 mx-auto rounded-xl text-1xl font-bold hover:bg-blue-400"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default PasswordForm;
