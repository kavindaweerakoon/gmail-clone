import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import "./EmailRow.css";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate(`/mail/`);
  };

  const dateObject = new Date(time).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <div className="showButton">
          <Checkbox />
          <IconButton>
            <StarBorderOutlined />
          </IconButton>

          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
        </div>
      </div>
      <div className="emailRow__title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <div className="emailRow__time">
        <p>{dateObject}</p>
      </div>
    </div>
  );
}

export default EmailRow;
