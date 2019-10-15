import React from "react";
function NumberButton({number,clickHandler,location}) {
  return (
    <li>
      <a className="cta cta-blue" onClick={clickHandler}>
        {number}
      </a>
      {location && (<span>{location}</span>)}
    </li>
  );
}
export default NumberButton;
