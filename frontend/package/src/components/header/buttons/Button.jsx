import React from "react";
import "./button.scss"

const Top = (props) => {
  const classes = 'button' + props.className
  return (
    <>
      <button className={`top-button ${classes}`}>
        <span> {props.text}</span>
      </button>
    </>
  );
};

export default Top;
