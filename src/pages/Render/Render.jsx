// 条件渲染
import React from "react";
import "./Render.css";

export default class Render extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      users: [],
    };
  }
  login = () => {
    this.setState({
      isLogin: true,
      users: [
        { name: "方机灵", hobby: "吃" },
        { name: "冰淇淋", hobby: "睡" },
      ],
    });
  };
  logout = () => {
    this.setState({
      isLogin: false,
      users: [],
    });
  };
  render() {
    let isShow = this.state.isLogin ? (
      <div>已登录，确认退出？</div>
    ) : (
      <div>未登录，是否登录？</div>
    );
    return (
      <div>
        <h3>条件渲染/列表渲染</h3>
        {isShow}
        <button onClick={this.login}>登录</button>
        <button onClick={this.logout}>退出</button>
        <div className="user-wrap">
          {this.state.users && this.state.users.length ? (
            <div className="user-items">
              {this.state.users.map((item, index) => (
                <div className="user-item" key={index}>
                  <div>
                    {item.name}，爱好{item.hobby}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>暂无数据，请登录后查看</div>
          )}
        </div>
      </div>
    );
  }
}
