import React from "react";
import { Button } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import StarIcon from '@mui/icons-material/Star';
import { AccessTime, Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {

  const dispatch = useDispatch();
  const emailCount = localStorage.getItem("emailCount") || 0;
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" 
      onClick={() => dispatch(openSendMessage())} >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="compose"
        />
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={emailCount} />
      <SidebarOption Icon={StarIcon} title="Starred"  />
      <SidebarOption Icon={AccessTime} title="Snoozed"  />
      <SidebarOption Icon={LabelImportant} title="Important"  />
      <SidebarOption Icon={NearMe} title="Sent"  />
      <SidebarOption Icon={Note} title="Drafts"  />
      <SidebarOption Icon={ExpandMore} title="More"  />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
            <IconButton>
                <Person/>
            </IconButton>
            <IconButton>
                <Duo/>
            </IconButton>
            <IconButton>
                <Phone/>
            </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
