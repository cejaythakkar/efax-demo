import React, { Component } from "react";
// import { Popover, PopoverBody } from "reactstrap";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  popup;
  handleClickOutside = event => {
    if (this.popup && !this.popup.contains(event.target)) {
      this.setState({
        popoverOpen: false
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render = () => (
    <div
      className="popover-wrapper"
      ref={el => {
        this.popup = el;
      }}
    >
      {/* <Popover
        placement="top"
        isOpen={this.state.popoverOpen}
        target={this.props.target}
        toggle={this.toggle}
      >
        <PopoverBody>{this.props.children}</PopoverBody>
      </Popover> */}
    </div>
  );
}

export default Popup;
