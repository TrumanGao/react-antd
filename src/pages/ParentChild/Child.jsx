import React from "react";
// props类型验证
import PropTypes from "prop-types";
import "./Child.css";

export default class Child extends React.Component {
  render() {
    return (
      <div className="child-wrap">
        <h3>子组件</h3>
        <div>父组件的count：{this.props.count}</div>
        <button onClick={this.props.onAddParentCount}>父组件count增加</button>
      </div>
    );
  }
}

// props类型验证
Child.propTypes = {
  count: PropTypes.number // 数字类型验证
};

Child.propTypes = {
  count: PropTypes.number.isRequired // 数字类型，必选验证
};

Child.defaultProps = {
  count: 9 // 给默认值即满足必选条件，不会报错
}
