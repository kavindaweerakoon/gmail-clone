import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  DomainVerificationTwoTone,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";
import {
  db,
  collection,  
  orderBy,
  query,
  onSnapshot,
} from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  


  useEffect(() => {
    
    const unsub = onSnapshot(
      query(collection(db, "emails"), orderBy("timestamp", "desc")),
      (querySnapshot) => {
        const emails = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        
        setEmails(emails);
        localStorage.setItem("emailCount", JSON.stringify(emails.length));
      });
      return () => {
        unsub();
      };
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { email, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={email}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
