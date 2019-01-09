import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default class Navigation extends Component {
  state = {
    current: this.props.location.pathname
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
        mode="vertical"
        style={{ width: 300 }}
      >
        <Menu.Item key="/app/dashboard">
          <Link to="/dashboard">DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="/app/new-organization">
          <Link to="new-organization">Create organization</Link>
        </Menu.Item>
        <Menu.Item key="/app/organizations">
          <Link to="organizations">Organizations</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
