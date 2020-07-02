// 新版生命周期
import React from "react-dom";

export default class LifeNewItem extends React.Component {
  // 一、挂载
  // 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
  constructor() {}
  // 不常用：
  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps生命周期");
  // }
  render() {
    return <div>新版生命周期</div>;
  }
  componentDidMount() {
    console.log("componentDidMount生命周期");
  }

  // 二、更新
  // 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
  // 不常用：
  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps生命周期");
  // }
  // 不常用：
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate生命周期");
  // }
  // render() {}
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate生命周期");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate生命周期");
  }

  // 三、卸载
  // 当组件从 DOM 中移除时会调用如下方法：
  componentWillUnmount() {
    console.log("componentWillUnmount生命周期");
  }
}
