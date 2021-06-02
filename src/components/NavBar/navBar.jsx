import React from "react";
import s from './navBarCss.module.css';

const NavBar = () => {
  return (<nav className={s.sidebar}>
      <div className={s.item}>
        <div>
          <a> Profile</a>
        </div>
        <div>
          <a>Massages</a>
        </div>
        <div>
          <a>News</a>

        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;