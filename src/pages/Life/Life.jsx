import React from "react";
import LifeItem from "./LifeItem";
export default class Life extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  addCount = () => {
    let count = this.state.count;
    this.setState({
      count: (count += 1),
    });
  };
  editCount = (num) => {
    console.log("子传父num:" + num);
    this.setState({
      count: num,
    });
  };

  render() {
    return (
      <div>
        <h1>React生命周期</h1>
        <h2>父组件count：{this.state.count}</h2>
        <button onClick={this.addCount}>父组件自身count+1</button>
        <LifeItem count={this.state.count} onEditParentCount={this.editCount} />
      </div>
    );
  }
}
