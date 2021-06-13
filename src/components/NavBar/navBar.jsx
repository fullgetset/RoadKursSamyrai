import React from "react";
import className from './navBarCss.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (<nav className={className.sidebar}>
      <div className={className.item}>
        <div>
          <NavLink to={'/profile'} activeClassName={className.activeLink}>Profile</NavLink>
        </div>
        <div>
          <NavLink to={"/dialogs"} activeClassName={className.activeLink}>Messages</NavLink>
        </div>
        <div>
          <NavLink to={'/news'} activeClassName={className.activeLink}>News</NavLink>

        </div>
        <div>
          <NavLink to={'/music'} activeClassName={className.activeLink}>Music</NavLink>
        </div>
        <div>
          <NavLink to={'/settings'} activeClassName={className.activeLink}>Settings</NavLink>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;