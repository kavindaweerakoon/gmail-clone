import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <>
      <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
      <div className= {`sidebarOption ${selected && 'sidebarOption--active'} sidebarOption--mobile`}>
        <Icon />
      
    </div>
    </>
  );
}

export default SidebarOption;
