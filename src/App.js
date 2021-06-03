import React from "react";
import './App.css';
import Header from "./components/header/Heared";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <div className={"app-wrapper-content"}>
        {/*<Profile/>*/}
        <Dialogs/>
      </div>
    </div>
  );
}

export default App;
