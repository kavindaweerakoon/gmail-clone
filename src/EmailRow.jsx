import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import "./EmailRow.css";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  let navigate = useNavigate();


  function handleClick() {
    navigate(`/mail/`);
  }

  return (
    <div onClick={handleClick} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
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
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
