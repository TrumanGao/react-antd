import React from "react";
import './Parent.css'
import Child from "./Child";

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  addParentCount = () => {
    const count = this.state.count + 1;
    this.setState({
      count,
    });
  };
  render() {
    return (
      <div className="parent-wrap">
        <h3>父组件：{this.state.count}</h3>
        <button onClick={this.addParentCount}>父组件按钮</button>
        <Child count={this.state.count} onAddParentCount={this.addParentCount}></Child>
      </div>
    );
  }
}
