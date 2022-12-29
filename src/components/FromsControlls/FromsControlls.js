import React from "react";
import classes from "./FromsControlls.module.css";

export const TextArea = ({input, meta, ...props}) => {
    return(
        <div className={classes.formControlL + ' ' + classes.error}>
            <textarea {...props.input} {...props}/>
        </div>
    )
}