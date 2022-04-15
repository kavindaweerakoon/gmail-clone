import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./SendMail.css";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>

        <Close className="sendMail__close" />
      </div>
      {/* 
    // use the useForm hook to create a form that will be used to collect the data from the user
    */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          name="to"
          placeholder="To"
          type="text"
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
          <Button></Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
