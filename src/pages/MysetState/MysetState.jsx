// setState同步方法
import React from "react";

export default class MysetState extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      inputValue: 10,
    };
  }
  addCount = () => {
    const count = Number(this.state.count) + 1;
    this.setState(
      {
        count,
      },
      () => {
        console.log("setState第二个参数内，同步", this.state.count);
      }
    );
    console.log("setState外，异步", this.state.count);
  };
  reduceCount = async () => {
    const count = Number(this.state.count) - 1;
    await this.setStateAsync({
      count,
    });
    console.log("setStateAsync外，同步", this.state.count);
  };
  // 定义同步的setState方法
  setStateAsync = (state = {}) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };
  handleInput = (e) => {
    console.log("输入框触发onChange事件", e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };
  setCount(num) {
    console.log("输入框value", num);
    this.setState({
      count: num,
    });
  }
  render() {
    return (
      <div className="setstate-async">
        <h2>同步setState方法</h2>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.addCount}>count增加</button>
        <button onClick={this.reduceCount}>count减少</button>
        <div>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <br />
          <button onClick={this.setCount.bind(this, this.state.inputValue)}>
            设置count为输入值
          </button>
        </div>
      </div>
    );
  }
}
