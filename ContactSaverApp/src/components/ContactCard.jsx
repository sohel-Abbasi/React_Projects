import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";

import useDisclose from "../Hooks/useDisclose";
import { toast } from "react-toastify";

function ContactCard({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow-300 flex justify-between items-center p-2 rounded-lg"
      >
        <div className="flex gap-2">
          <FaUserCircle className=" text-orange-500 text-5xl mt-2" />
          <div className=" ">
            <h2 className=" font-medium">{contact.name}</h2>
            <p className=" text-sm">{contact.email}</p>
            <p className=" text-sm">{contact.phone}</p>
          </div>
        </div>
        <div className=" flex text-3xl gap-1 cursor-pointer">
          <RiEditCircleLine onClick={onOpen} className=" cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className=" text-orange-500 hover:text-orange-400"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default ContactCard;
