import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      onClick={() => {
        setToggle((prevState) => !prevState);
      }}
    >
      {toggle ? children : ""}
    </div>
  );
};

export default Toggle;
