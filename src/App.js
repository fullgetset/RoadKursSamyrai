import React from "react";
import './App.css';
import Header from "./components/header/Heared";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/usersContainer";


const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
};

export default App;
