import React, { Component } from "react";
import { Popover } from "react-bootstrap";

export default class MyPopover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Popover id="popover-trigger-focus" title={this.props.title}>
        {this.props.children}
      </Popover>
    );
  }
}
