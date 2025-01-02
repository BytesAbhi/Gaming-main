import React from "react";
import './RightSection.css'

const RightSection = ({ children }) => {
    console.log(children);
    
  return <div className="rightSection_container">{children}</div>;
};

export default RightSection;
