import React from 'react';
import DialogStyle from "./../Dialogs.module.css";

function Message(props) {
    return <div className={DialogStyle.message}>
        {props.message}
    </div>
}



export default Message;