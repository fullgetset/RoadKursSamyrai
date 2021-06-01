import React from "react";
import '../App.css';
import s from './HeaderCss.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://s3.tproger.ru/uploads/2016/10/reactmini.png"
        alt="Картинка"/>
    </header>
  )
}
export default Header;