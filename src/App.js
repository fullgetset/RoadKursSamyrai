import React from "react";
import './App.css';
import Header from "./components/header/Heared";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";



const App = (props) => {


  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <div className={"app-wrapper-content"}>
        <Route path={'/profile'} render={() => {
          return <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>
        }}/>
        <Route path={'/dialogs'} render={() => {
          return <Dialogs
            state={props.state.dialogsPage}
            addMessage={props.addMessage}/>
        }}/>
        <Route path={'/news'} component={News}/>
        <Route path={'/music'} component={Music}/>
        <Route path={'/settings'} component={Settings}/>
      </div>
    </div>
  );
}

export default App;
