import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProfilePhoto from "./components/profile/ProfilePhoto";
import FullName from "./components/profile/FullName";
import Address from "./components/profile/Address";
import Age from "./components/profile/age";
import Profession from "./components/profile/profession";

function App() {
  return (
    <div className="core">
      <h1>Identity Card</h1>
      <div className="info">
        <div className="photo">
          <ProfilePhoto />
        </div>
        <div className="name">
          <FullName />
          <Age/>
          <Profession/>
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
