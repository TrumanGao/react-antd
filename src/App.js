import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/User/UserCard";
// import Life from "./pages/Life/Life.jsx";
import Performance from "./pages/Performance/Performance.jsx";

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
        <img src={logo} className="App-logo" alt="logo" />

        <div className="user-card-wrap flex-box">
          <UserCard userInfo={user1} />
          <UserCard userInfo={user2} />
        </div>
        {/* <Life /> */}
        <Performance />
      </header>
    </div>
  );
}
