import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Yuri
        </div>
        <div className={s.dialog}>
          Nastya
        </div>
        <div className={s.dialog}>
          Tamara
        </div>
        <div className={s.dialog}>
          AudiA6C5
        </div>
      </div>
      <div className={s.messagesItems}>
        <div className={s.message}>Hi I am Yuri</div>
        <div className={s.message}>Hi I am Nastya</div>
        <div className={s.message}>Hi I am MyaU</div>
        <div className={s.message}>Hi I am AudiA6C5</div>
      </div>
    </div>
  )
}

export default Dialogs;