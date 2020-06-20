// 旧版生命周期
import React from "react";

export default class LifeItem extends React.Component {
  // 一、Mounting 加载阶段
  // 加载的时候调用一次，可以初始化state
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      inputValue: 0,
    };
  }
  // 设置默认的props，也可以用dufaultProps设置组件的默认属性。
  // getDefaultProps() {}
  // 初始化state，可以直接在constructor中定义this.state
  getInitialState() {}
  // 1. 组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。弃用
  // componentWillMount() {
  //   console.log("componentWillMount生命周期");
  // }

  // 组件渲染之后调用，只调用一次
  componentDidMount() {
    console.log("componentDidMount生命周期");
  }

  // 二、Updating 更新阶段
  // 组件加载时不调用，组件接受新的props时调用。弃用
  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps生命周期");
  // }

  // 组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate生命周期");
    return true;
  }

  // 组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state。弃用
  // componentWillUpdate() {
  //   console.log("componentWillUpdate生命周期");
  // }

  // 组件加载时不调用，组件更新完成后调用
  componentDidUpdate() {
    console.log("componentDidUpdate生命周期");
  }

  // 三、Unmounting 卸载阶段
  // 组件渲染之后调用，只调用一次
  componentWillUnmount() {
    console.log("componentWillUnmount生命周期");
  }

  // react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
  render() {
    console.log("render生命周期");
    return (
      <div>
        <h2>子组件count：{this.state.count}</h2>
        <button onClick={this.addCount}>子组件自身count+1</button>
        <div>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
          <button onClick={this.editParentCount}>子组件修改父组件count</button>
        </div>
      </div>
    );
  }

  // 自定义方法
  addCount = () => {
    let count = this.state;
    this.setState({
      count: (count += 1),
    });
  };
  // 输入值，修改
  changeInputValue = (event) => {
    const num = event.target.value;
    console.log("输入值", num);
    this.setState({
      inputValue: Number(num),
    });
  };
  editParentCount = () => {
    this.props.onEditParentCount(this.state.inputValue);
  };
}
