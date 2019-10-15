import React from 'react'

export default function ToggleButton({handleClick,selectedValue}) {
    return (
        <ul
        className="nav nav-tabs mx-auto text-center"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className={`nav-link ${selectedValue==='local' ? 'active':''}`}
            data-toggle="tab"
            onClick={() => handleClick('local')}
          >
            Local
          </a>
        </li>
        <li className="nav-item" >
          <a
            className={`nav-link ${selectedValue==='toll free'? 'active':''}`}
            data-toggle="tab"
            onClick={() => handleClick('toll free')}
          >
            Toll Free
          </a>
        </li>
      </ul>
    )
}
