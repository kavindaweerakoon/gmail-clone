import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db, collection, addDoc, serverTimestamp } from "./firebase";

import "./SendMail.css";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  var ref = collection(db, "emails/");

  const onSubmit = (formData) => {
    // pushes the data to firebase
    addDoc(ref, {
      email: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        console.log("data written");
        dispatch(closeSendMessage());
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>

        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      {/* 
    // use the useForm hook to create a form that will be used to collect the data from the user
    */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          name="to"
          placeholder="To"
          type="email"
        />

        {errors.to && (
          <p className="sendMail__error">At least one recipient is required.</p>
        )}

        <input
          {...register("subject", { required: true })}
          id="subject"
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required.</p>
        )}

        <input
          {...register("message", { required: true })}
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__error">Message is required.</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
