import React  from "react";
import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink className={navData => navData.isActive?classes.active:classes.navLink} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;