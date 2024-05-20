import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase";
import * as yup from "yup";

const contactSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  phone: yup.number().required("Phone number is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact update successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  phone: contact.phone,
                }
              : {
                  name: "",
                  email: "",
                  phone: "",
                }
          }
          onSubmit={(values) => {
            // console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className=" border h-10 pl-3 border-gray-500"
              />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className=" border h-10 pl-3 border-gray-500"
              />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="phone">Phone no.</label>
              <Field
                type="number"
                name="phone"
                className=" border h-10 pl-3 border-gray-500"
              />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name="phone" />
              </div>
            </div>

            <button className=" bg-orange-400 px-3 py-2 border self-end text-white hover:bg-orange-300 rounded-sm">
              {isUpdate ? "update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
