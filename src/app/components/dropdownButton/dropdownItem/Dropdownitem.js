import React from "react";
function DropDownItem({item,handleClick}) {
  return (
    <a className="dropdown-item" onClick={() => handleClick()}>
      {item}
    </a>
  );
}
export default DropDownItem;

