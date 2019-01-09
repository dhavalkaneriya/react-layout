import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Card
          title="Organizations"
          style={{ width: 300 }}
          //extra={<Link to="organizations">View all</Link>}
        >
          <p>5</p>
        </Card>
      </Fragment>
    );
  }
}
