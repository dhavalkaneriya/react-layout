import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

export default class Navigation extends Component {
  state = {
    current: "dashboard"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="dashboard">
          <Link to="/dashboard">DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="new">
          <Link to="new-organization">Create New</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
