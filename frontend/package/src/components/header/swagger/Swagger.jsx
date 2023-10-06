import React from "react";
import "./swagger.scss"

const Swagger = (props) => {
  const sipo = 'button' + props.className
  return (
    <>
      <button className={`swagger-button ${sipo}`}>
        <span> {props.text}</span>
      </button>
    </>
  );
};

export default Swagger;