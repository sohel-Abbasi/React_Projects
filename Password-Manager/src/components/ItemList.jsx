import React from "react";

const ItemList = ({ passwords, deletePasswords }) => {
  return (
    <>
      <ul className="flex text-left ml-3 p-2 rounded-md justify-between flex-col">
        {passwords.map((password, index) => (
          <li
            className="h-18 w-[90%] flex text-left ml-3 p-2 flex-grow rounded bg-pink-300 m-1 font-bold content-start"
            key={index}
          >
            {password.website}
            <br />

            {password.username}
            <br />

            {password.password}
            <br />

            <button
              className="h-18 w-[70px] mb-2 bg-red-600  text-center p-2 mx-auto rounded-xl text-1xl font-bold mt-1 hover:bg-red-400 content-end"
              onClick={() => deletePasswords(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
