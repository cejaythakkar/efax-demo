import React, { Component } from "react";
import "./DropdownButton.scss";
import DropDownItem from "./dropdownItem/Dropdownitem";

class DropdownButton extends Component {
  container = null;
  state = {
    open: false,
    menuItems:["(888)", "(881)", "(882)", "(883)"]
  };
  handleButtonClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };
  handleClickOutside = event => {
    if (
      this.container &&
      !this.container.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render = () => (
    <>
      <div className={`dropdown dropdown-list mb-5 ${this.state.open?'show':''}`} ref={el => this.container = el}>
        <button
          type="button"
          className="btn btn-lt-grey dropdown-toggle"
          data-toggle="dropdown"
          onClick={this.handleButtonClick}
        >
          US Toll Free (888)
        </button>
        <div className="dropdown-menu">
            {this.state.menuItems.map(item => <DropDownItem item={item} handleClick={this.handleButtonClick} />)}
        </div>
      </div>
    </>
  );
}
export default DropdownButton;
