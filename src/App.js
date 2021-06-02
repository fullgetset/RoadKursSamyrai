import React from "react";
import './App.css';
import Header from "./components/header/Heared";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
