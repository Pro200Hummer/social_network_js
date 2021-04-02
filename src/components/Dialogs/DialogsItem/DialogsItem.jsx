import React from 'react';
import DialogStyle from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogsItem(props) {
    let path = "/dialogs/" + props.id;
    return <div className={DialogStyle.item}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem;