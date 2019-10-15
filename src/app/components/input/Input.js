import React from "react";

const Input = ({handleChange,placeholder,value}) => {
  return (
    <input
      type="text"
      id="searchTextbox"
      className="form-control mx-auto"
      placeholder={placeholder}
      onChange={(event) => handleChange(event)}
      value={value}
    />
  );
};

export default Input;
