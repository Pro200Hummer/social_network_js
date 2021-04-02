import React from 'react';
import DialogStyle from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";


function Dialogs(props) {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.messagesPage.messages.map(m => <Message message={m.message}/>)

    const sendMessage = () => {
        props.sendNewMessage()
    }

    const updateNewMessageText = (e) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={DialogStyle.main}>
            <div className={DialogStyle.dialogs}>
                {dialogsElements}
            </div>
            <div className={DialogStyle.messages}>
                {messageElements}
            </div>
            <div  className={DialogStyle.send}>
                <textarea value={props.messagesPage.newMessageText}
                          onChange={updateNewMessageText}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;