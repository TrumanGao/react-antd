import React from "react";
// 引入路由
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
// HashRouter：锚点链接（路由地址后会有#号）。
// BrowserRouter：H5新特性 history.push。（问题：上线后需要后台做重定向处理，否则会产生404bug）
import logo from "./logo.svg";
import "./App.css";
import Life from "./pages/Life/Life.jsx";
import Parent from "./pages/ParentChild/Parent.jsx";
// import Performance from "./pages/Performance/Performance.jsx";
// import MysetState from "./pages/MysetState/MysetState.jsx";
import Render from "./pages/Render/Render.jsx";
import Common1 from './pages/HighOrder/Common1'
import Common2 from './pages/HighOrder/Common2'


export default function App() {
  const user1 = {
    name: "冰淇淋",
    birthYear: 1993,
  };
  const user2 = {
    name: "方机灵儿",
    birthYear: 1997,
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <h3>路由</h3>
        <Router>
          <NavLink to="/life">跳转到生命周期</NavLink>
          <NavLink to="/render">跳转到渲染</NavLink>
          <Route path="/life" component={Life}></Route>
          <Route path="/render" component={Render}></Route>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="user-card-wrap flex-box">
          <Parent userInfo={user1} />
          <Parent userInfo={user2} />
        </div>

        <Common1></Common1>
        <Common2></Common2>
        {/* <Life /> */}
        {/* <Performance /> */}
        {/* <MysetState /> */}
        {/* <Render /> */}
      </header>
    </div>
  );
}
