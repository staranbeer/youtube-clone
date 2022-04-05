import React from "react";

function Tag({ classNameProp, name }) {
  return (
    <span className={`tag first-letter:${classNameProp || " "}`}>{name}</span>
  );
}

export default Tag;
