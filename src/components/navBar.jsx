import React from "react";
import '../App.css';

const NavBar = () => {
  return (<nav className={'sidebar'}>
      <div className={'navBar'}>
      <div>
        Profile
      </div>
      <div>
        Massages
      </div>
      <div>
        News
      </div>
      <div>
        Music
      </div>
      <div className={'setting'}>
        Settings
      </div>
      </div>
    </nav>
  );
}
export default NavBar;