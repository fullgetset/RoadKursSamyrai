import React from "react";
import s from './navBarCss.module.css';

const NavBar = () => {
  return (<nav className={s.sidebar}>
      <div className={s.item}>
        <div>
          <a href={'/profile'}> Profile</a>
        </div>
        <div>
          <a href={"/dialogs"}>Massages</a>
        </div>
        <div>
          <a href={'/news'}>News</a>

        </div>
        <div>
          <a href={'/music'}>Music</a>
        </div>
        <div>
          <a href={'/settings'}>Settings</a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;