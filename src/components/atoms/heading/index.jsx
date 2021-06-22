import React from "react";

const Heading = ({ content, size }) => {
  return <h1 className={`heading heading--${size}`}>{content}</h1>;
};
export default Heading;
