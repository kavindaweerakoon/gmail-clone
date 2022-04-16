import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotifactionsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  };


  return (
    <h1 className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__arrow" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotifactionsIcon />
        </IconButton>
        <div className="avatar">
          {
            user ? (<img src={user?.photoURL} alt="avatar" onClick={signOut} />) : (<AccountCircleIcon />) 
          }         
        </div>
      </div>
    </h1>
  );
}

export default Header;
