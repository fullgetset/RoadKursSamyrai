import React from "react";
import './App.css';
import Header from "./components/header/Heared";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";


const App = (props) => {


  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <NavBar/>
        <div className={"app-wrapper-content"}>
          <Route path={'/profile'} component={() => {
            return <Profile postData={props.postData}/>
          }}/>
          <Route path={'/dialogs'} component={() => {
            return <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>
          }}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/settings'} component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
